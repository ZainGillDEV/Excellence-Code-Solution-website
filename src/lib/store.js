import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

/**
 * JSON-file fallback store.
 *
 * Used when MONGODB_URI is not configured, so `npm run dev` works with no
 * setup at all — submissions land in `data/contacts.json` at the project
 * root. Swap in MongoDB by setting MONGODB_URI in .env.local.
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

export async function saveContactToFile(doc) {
  const all = await readAll();

  const record = {
    _id: crypto.randomUUID(),
    ...doc,
    createdAt: new Date().toISOString(),
  };

  all.unshift(record);

  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(all, null, 2), "utf8");

  return record;
}

export async function listContactsFromFile({ limit = 50 } = {}) {
  const all = await readAll();
  return all.slice(0, limit);
}
