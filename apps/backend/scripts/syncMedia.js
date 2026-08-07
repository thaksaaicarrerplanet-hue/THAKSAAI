import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
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
const sourceDir = path.resolve("../frontend/public/images/journey");

async function syncSupabaseMedia() {
  console.log("Connecting to Supabase Storage...");
  
  // 1. List existing files
  const { data: existingFiles, error: listError } = await supabase.storage.from(bucket).list("");
  if (listError) {
    console.error("Error listing files:", listError);
    return;
  }
  
  // 2. Delete ALL existing files in the 'media' bucket
  const filesToDelete = existingFiles.filter(f => f.name !== ".emptyFolderPlaceholder").map(f => f.name);
  if (filesToDelete.length > 0) {
    console.log(`Deleting ${filesToDelete.length} existing files from Supabase to wipe the bucket...`);
    const { error: deleteError } = await supabase.storage.from(bucket).remove(filesToDelete);
    if (deleteError) {
      console.error("Error deleting files:", deleteError);
    } else {
      console.log("Successfully purged old files.");
    }
  }

  // 3. Upload all real photos from the repo
  console.log("Locating real repository photos (IMG-* / Picsart_*)...");
  
  const allFiles = fs.readdirSync(sourceDir);
  const filesToUpload = allFiles.filter(f => f.match(/^(IMG|Picsart).*?\.(jpg|jpeg|png|webp)$/i));
  
  console.log(`Found ${filesToUpload.length} valid real-world photos in the repository. Initiating upload to Supabase...`);
  
  for (const file of filesToUpload) {
    const filePath = path.join(sourceDir, file);
    const fileBuffer = fs.readFileSync(filePath);
    let contentType = "image/jpeg";
    if (file.toLowerCase().endsWith(".png")) contentType = "image/png";
    if (file.toLowerCase().endsWith(".webp")) contentType = "image/webp";

    const { error: uploadError } = await supabase.storage.from(bucket).upload(file, fileBuffer, {
      contentType,
      upsert: true
    });

    if (uploadError) {
      console.error(`Failed to upload ${file}:`, uploadError.message);
    } else {
      console.log(`Successfully synced: ${file}`);
    }
  }

  console.log(`\n================================`);
  console.log(`Supabase Media Sync Complete!`);
  console.log(`Total photos mirrored from Repo: ${filesToUpload.length}`);
  console.log(`================================\n`);
}

syncSupabaseMedia();
