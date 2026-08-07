import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error("Missing Supabase credentials in .env");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);
const bucket = "media";

async function countMedia() {
  const { data, error } = await supabase.storage.from(bucket).list("");
  
  if (error) {
    console.error("Error fetching files from Supabase:", error);
    return;
  }
  
  // Filter out the placeholder if it exists
  const validFiles = data.filter(f => f.name !== ".emptyFolderPlaceholder");
  
  console.log(`\n=== SUPABASE BUCKET: [${bucket}] ===`);
  console.log(`Total Images Found: ${validFiles.length}\n`);
  
  validFiles.forEach((file, idx) => {
    console.log(`${idx + 1}. ${file.name}`);
  });
  console.log("===================================\n");
}

countMedia();
