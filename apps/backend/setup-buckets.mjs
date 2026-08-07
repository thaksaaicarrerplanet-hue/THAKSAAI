// Setup: creates Supabase Storage buckets (run once before upload-images.mjs)
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const { data: buckets, error: listErr } = await sb.storage.listBuckets();
if (listErr) { console.error("Cannot list buckets:", listErr.message); process.exit(1); }

const names = buckets.map(b => b.name);
console.log("Existing buckets:", names.join(", ") || "none");

for (const bucket of ["media", "profiles"]) {
  if (names.includes(bucket)) {
    console.log(`✅ Bucket "${bucket}" already exists`);
  } else {
    const { error } = await sb.storage.createBucket(bucket, { public: true });
    if (error) console.error(`❌ Failed to create "${bucket}": ${error.message}`);
    else console.log(`✅ Created bucket "${bucket}" (public)`);
  }
}
console.log("\nDone. Run: node upload-images.mjs");
