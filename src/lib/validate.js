import { subjects } from "@/data/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[\d\s()+-]{7,20}$/;

/** Strips angle brackets and trims — stored values are never rendered raw. */
export function clean(value, max = 2000) {
  return String(value ?? "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, max);
}

/**
 * Server-side validation for the contact form. The browser validates too,
 * but the API never trusts that — this is the check that counts.
 */
export function validateContact(body = {}) {
  const data = {
    name: clean(body.name, 120),
    email: clean(body.email, 160).toLowerCase(),
    phone: clean(body.phone, 40),
    subject: clean(body.subject, 120),
    message: clean(body.message, 4000),
  };

  const errors = {};

  if (!data.name) errors.name = "Please enter your name.";
  else if (data.name.length < 2) errors.name = "Name is too short.";

  if (!data.email) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(data.email))
    errors.email = "Please enter a valid email address.";

  if (data.phone && !PHONE_RE.test(data.phone))
    errors.phone = "Please enter a valid phone number.";

  if (!data.subject) errors.subject = "Please choose a subject.";
  else if (!subjects.includes(data.subject))
    errors.subject = "Please choose a subject from the list.";

  if (!data.message) errors.message = "Please tell us about your project.";
  else if (data.message.length < 10)
    errors.message = "Message should be at least 10 characters.";

  return { data, errors, valid: Object.keys(errors).length === 0 };
}
