import { drizzle } from "drizzle-orm/libsql";
import { Client, createClient } from "@libsql/client";
import { env } from "~/env";
import * as schema from "~/server/db/schema/google-auth";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  client: Client | undefined;
};

export const client =
  globalForDb.client ??
  createClient({
    url: env.DATABASE_URL,
    authToken: env.DATABASE_AUTH_TOKEN,
    // syncUrl: env.DATABASE_URL_PROD,
    // syncInterval: 60000,
  });
if (env.NODE_ENV !== "production") globalForDb.client = client;

export const db = drizzle(client, { schema: schema });
