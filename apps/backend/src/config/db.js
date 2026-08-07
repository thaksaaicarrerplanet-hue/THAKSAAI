import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool, types } = pkg;

// Override DATE type parser (OID 1082) to return raw YYYY-MM-DD string
// instead of converting to a JS Date object (which shifts by timezone)
types.setTypeParser(1082, (val) => val);

// ============================================================================
// Enterprise-Grade Connection Pool — Tuned for 1000+ Concurrent Users
// Supabase transaction pooler (port 6543) supports up to 200 connections.
// Running 2–4 Render instances × max:20 = 40–80 total, well within limits.
// ============================================================================
const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },

  // Connection pool sizing
  max: 20,                    // Max simultaneous connections per server instance
  min: 2,                     // Keep 2 warm connections ready at all times

  // Timeout controls (prevent pool starvation under burst traffic)
  idleTimeoutMillis: 30000,   // Release idle connections after 30s
  connectionTimeoutMillis: 5000, // Fail fast if no connection available in 5s
  allowExitOnIdle: false,     // Keep pool alive on Render (prevents cold starts)

  // Labeling for Supabase dashboard visibility
  application_name: "thaksa-lms-backend",
});

if (!process.env.DATABASE_URL) {
  console.warn("⚠️ No DATABASE_URL provided in environment variables.");
} else {
  console.log("⏳ Connecting to Supabase via IPv4 pooler...");
}

// Prevent server crash on unhandled idle database connection errors (Critical for Render + Supabase)
db.on("error", (err, client) => {
  console.error("Unexpected database pool error on idle client:", err);
});

db.connect((err, client, release) => {
  if (err) {
    console.error("Database connection error:", err.message);
  } else {
    console.log("Connected to database");
    if (release) release(); // Release client back to the pool to prevent connection leaks
  }
});

export default db;
