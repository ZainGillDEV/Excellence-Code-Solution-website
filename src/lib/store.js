import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

/**
 * JSON-file fallback store.
 *
 * Used when MONGODB_URI is not configured, so `npm run dev` works with no
 * setup at all — submissions land in `data/contacts.json` at the project
 * root. Swap in MongoDB by setting MONGODB_URI in .env.local.
 *
 * NOTE: serverless hosts (Netlify, Vercel) give each function a read-only
 * filesystem, so this store only works locally or on a normal Node server.
 * In production, set MONGODB_URI.
 */

const DATA_DIR = path.join(process.cwd(), "data");
const FILE = path.join(DATA_DIR, "contacts.json");

async function readAll() {
  try {
    const raw = await fs.readFile(FILE, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

async function writeAll(rows) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(rows, null, 2), "utf8");
}

export async function saveContactToFile(doc) {
  const all = await readAll();

  const record = {
    _id: crypto.randomUUID(),
    ...doc,
    createdAt: new Date().toISOString(),
  };

  all.unshift(record);
  await writeAll(all);

  return record;
}

export async function listContactsFromFile({ limit = 50, status } = {}) {
  const all = await readAll();
  const filtered = status ? all.filter((r) => r.status === status) : all;
  return filtered.slice(0, limit);
}

export async function updateContactInFile(id, changes) {
  const all = await readAll();
  const index = all.findIndex((r) => String(r._id) === String(id));
  if (index === -1) return null;

  all[index] = { ...all[index], ...changes, updatedAt: new Date().toISOString() };
  await writeAll(all);
  return all[index];
}

export async function deleteContactFromFile(id) {
  const all = await readAll();
  const next = all.filter((r) => String(r._id) !== String(id));
  if (next.length === all.length) return false;

  await writeAll(next);
  return true;
}
