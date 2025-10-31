import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "@/db/schema";
import "dotenv/config";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error("Missing DATABASE_URL environment variable");
}

const sql = neon(databaseUrl);
const db = drizzle(sql, { schema });

// Export the raw sql client in case callers need to run raw queries (e.g. adjust sequences after seeding)
export { sql };

export default db;