import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool, types } = pkg;

// Override DATE type parser (OID 1082) to return raw YYYY-MM-DD string
// instead of converting to a JS Date object (which shifts by timezone)
types.setTypeParser(1082, (val) => val);

const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

if (!process.env.DATABASE_URL) {
  console.log("No DATABASE_URL provided, falling back to individual config params.");
  // optional fallback here if needed, but for render we just use DATABASE_URL
}

db.connect((err) => {
  if (err) {
    console.error("Database connection error", err.stack);
  } else {
    console.log("Connected to database");
  }
});

export default db;
