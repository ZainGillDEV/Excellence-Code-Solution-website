/**
 * MongoDB connection with a cached global handle, so Next.js hot-reloads
 * and serverless invocations reuse one connection instead of opening a new
 * one per request.
 *
 * If MONGODB_URI is not set the app falls back to a local JSON file — see
 * src/lib/store.js — so the site works out of the box.
 */

const MONGODB_URI = process.env.MONGODB_URI;

let cached = global._ecsMongoose;
if (!cached) {
  cached = global._ecsMongoose = { conn: null, promise: null };
}

export const hasMongo = Boolean(MONGODB_URI);

export async function connectToDatabase() {
  if (!MONGODB_URI) return null;
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const mongoose = (await import("mongoose")).default;
    mongoose.set("strictQuery", true);

    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: process.env.MONGODB_DB || "ecs",
        bufferCommands: false,
        serverSelectionTimeoutMS: 8000,
      })
      .then((m) => m);
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}
