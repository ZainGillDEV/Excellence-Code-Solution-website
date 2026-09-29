import { connectToDatabase, hasMongo } from "@/lib/mongodb";
import {
  deleteContactFromFile,
  listContactsFromFile,
  updateContactInFile,
} from "@/lib/store";

/**
 * One interface over the two storage backends, so pages and API routes do
 * not each have to know whether MongoDB is configured.
 */

export const STATUSES = ["new", "read", "replied", "archived"];

/** Plain objects only — Mongoose documents cannot cross into a client component. */
function serialise(row) {
  if (!row) return null;
  return {
    _id: String(row._id),
    name: row.name || "",
    email: row.email || "",
    phone: row.phone || "",
    subject: row.subject || "",
    message: row.message || "",
    status: row.status || "new",
    createdAt: row.createdAt ? new Date(row.createdAt).toISOString() : null,
    updatedAt: row.updatedAt ? new Date(row.updatedAt).toISOString() : null,
    meta: {
      ip: row.meta?.ip || "",
      userAgent: row.meta?.userAgent || "",
    },
  };
}

export async function listContacts({ limit = 200, status } = {}) {
  if (hasMongo) {
    await connectToDatabase();
    const { default: Contact } = await import("@/models/Contact");
    const query = status ? { status } : {};
    const rows = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean();
    return rows.map(serialise);
  }

  const rows = await listContactsFromFile({ limit, status });
  return rows.map(serialise);
}

export async function countByStatus() {
  const rows = await listContacts({ limit: 1000 });
  const counts = { total: rows.length };
  STATUSES.forEach((s) => {
    counts[s] = rows.filter((r) => r.status === s).length;
  });
  return counts;
}

export async function updateContact(id, changes) {
  if (hasMongo) {
    await connectToDatabase();
    const { default: Contact } = await import("@/models/Contact");
    const row = await Contact.findByIdAndUpdate(id, changes, {
      new: true,
    }).lean();
    return serialise(row);
  }

  const row = await updateContactInFile(id, changes);
  return serialise(row);
}

export async function deleteContact(id) {
  if (hasMongo) {
    await connectToDatabase();
    const { default: Contact } = await import("@/models/Contact");
    const result = await Contact.findByIdAndDelete(id);
    return Boolean(result);
  }

  return deleteContactFromFile(id);
}

/** Which backend is actually in use — shown in the dashboard footer. */
export const storageLabel = () =>
  hasMongo ? "MongoDB" : "Local JSON file (development only)";
