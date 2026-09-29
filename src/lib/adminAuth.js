import crypto from "crypto";
import { cookies } from "next/headers";

/**
 * Admin session handling.
 *
 * A signed, time-limited cookie — no database table, no third-party auth
 * service. Enough for a single-admin dashboard behind one password.
 *
 * Set these in .env.local:
 *   ADMIN_PASSWORD        the password you type on the login screen
 *   ADMIN_SESSION_SECRET  a long random string used to sign the cookie
 */

export const COOKIE_NAME = "ecs_admin";
const MAX_AGE_SECONDS = 60 * 60 * 8; // 8 hours

function secret() {
  return (
    process.env.ADMIN_SESSION_SECRET ||
    process.env.ADMIN_PASSWORD ||
    "ecs-insecure-development-secret"
  );
}

export function isAdminConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD);
}

function sign(value) {
  return crypto.createHmac("sha256", secret()).update(value).digest("hex");
}

/** Constant-time compare so a wrong password leaks nothing through timing. */
export function passwordMatches(input) {
  const expected = process.env.ADMIN_PASSWORD || "";
  if (!expected) return false;

  const a = Buffer.from(String(input || ""));
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;

  return crypto.timingSafeEqual(a, b);
}

export function createSessionValue() {
  const expires = Date.now() + MAX_AGE_SECONDS * 1000;
  return `${expires}.${sign(String(expires))}`;
}

export function verifySessionValue(value) {
  if (!value || typeof value !== "string") return false;

  const [expires, signature] = value.split(".");
  if (!expires || !signature) return false;
  if (Number(expires) < Date.now()) return false;

  const expected = sign(expires);
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;

  return crypto.timingSafeEqual(a, b);
}

/** Server-component helper: is the current request signed in? */
export function isSignedIn() {
  const value = cookies().get(COOKIE_NAME)?.value;
  return verifySessionValue(value);
}

export const cookieOptions = {
  httpOnly: true,
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: MAX_AGE_SECONDS,
};
