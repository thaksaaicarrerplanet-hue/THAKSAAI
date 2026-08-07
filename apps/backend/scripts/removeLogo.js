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

const targetFile = "Picsart_26-07-26_23-44-13-127.jpg";
const localFilePath = path.resolve(`../frontend/public/images/journey/${targetFile}`);

async function removeStrayLogo() {
  console.log(`Attempting to remove stray logo: ${targetFile}`);

  // 1. Remove from Supabase
  const { error } = await supabase.storage.from(bucket).remove([targetFile]);
  if (error) {
    console.error("Failed to delete from Supabase:", error.message);
  } else {
    console.log("Successfully deleted from Supabase cloud bucket.");
  }

  // 2. Remove from Local Directory
  try {
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
      console.log("Successfully deleted from local images/journey folder.");
    } else {
      console.log("Local file already removed or not found.");
    }
  } catch (err) {
    console.error("Failed to delete local file:", err.message);
  }
}

removeStrayLogo();
