// ============================================================================
// Supabase Storage Bulk Image Upload Script
// Uploads all 25 project images to the "media" bucket in Supabase Storage
// Run: node upload-images.mjs  (from the /apps/backend directory)
// ============================================================================

import { createClient } from "@supabase/supabase-js";
import { readFileSync, existsSync } from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
const BUCKET = "media";

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error("❌ Missing SUPABASE_URL or SUPABASE_SERVICE_KEY in .env");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

// All 25 images to upload (paths relative to this script's directory)
const FRONTEND_ROOT = "../frontend";
const IMAGES = [
  // Public gallery & event photos (21 files)
  "public/IMG-20260619-WA0004.jpg",
  "public/IMG-20260619-WA0005.jpg",
  "public/IMG-20260619-WA0006.jpg",
  "public/IMG-20260619-WA0007.jpg",
  "public/IMG-20260619-WA0009.jpg",
  "public/IMG-20260619-WA0011.jpg",
  "public/IMG-20260619-WA0012.jpg",
  "public/IMG-20260619-WA0021.jpg",
  "public/IMG-20260619-WA0022.jpg",
  "public/IMG-20260619-WA0023.jpg",
  "public/IMG-20260619-WA0026.jpg",
  "public/IMG-20260619-WA0037.jpg",
  "public/IMG-20260619-WA0038.jpg",
  "public/IMG-20260619-WA0039.jpg",
  "public/IMG-20260717-WA0023.jpg",
  "public/IMG-20260717-WA0024.jpg",
  "public/IMG-20260717-WA0025.jpg",
  "public/IMG-20260717-WA0026.jpg",
  "public/IMG-20260717-WA0027.jpg",
  "public/IMG-20260717-WA0028.jpg",
  "public/Picsart_26-07-26_23-44-13-127.jpg",
  // HomePage section assets (4 files)
  "src/pages/HomePage/sections/3.png",
  "src/pages/HomePage/sections/cofounder.jpg",
  "src/pages/HomePage/sections/IMG-20260619-WA0036.jpg",
  "src/pages/HomePage/sections/profile.jpeg",
];

const getMimeType = (filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  const map = {
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".webp": "image/webp",
    ".gif": "image/gif",
  };
  return map[ext] || "application/octet-stream";
};

// Build a clean, flat storage path: "gallery/filename.jpg"
const getStoragePath = (relativePath) => {
  const fileName = path.basename(relativePath);
  const isSection = relativePath.includes("sections");
  const folder = isSection ? "sections" : "gallery";
  return `${folder}/${fileName}`;
};

const uploadAll = async () => {
  console.log(`\n🚀 Starting bulk upload of ${IMAGES.length} images to Supabase Storage...\n`);

  const results = { success: [], failed: [] };

  for (const imgRelPath of IMAGES) {
    const fullPath = path.resolve(FRONTEND_ROOT, imgRelPath);
    const storagePath = getStoragePath(imgRelPath);

    if (!existsSync(fullPath)) {
      console.warn(`⚠️  SKIP (not found): ${imgRelPath}`);
      results.failed.push({ path: imgRelPath, error: "File not found" });
      continue;
    }

    try {
      const fileBuffer = readFileSync(fullPath);
      const mimeType = getMimeType(fullPath);

      const { data, error } = await supabase.storage
        .from(BUCKET)
        .upload(storagePath, fileBuffer, {
          contentType: mimeType,
          upsert: true, // Overwrite if already exists (safe for re-runs)
        });

      if (error) {
        console.error(`❌ FAILED: ${storagePath} — ${error.message}`);
        results.failed.push({ path: storagePath, error: error.message });
      } else {
        const { data: urlData } = supabase.storage
          .from(BUCKET)
          .getPublicUrl(storagePath);
        console.log(`✅ ${storagePath}`);
        console.log(`   → ${urlData.publicUrl}\n`);
        results.success.push({ path: storagePath, url: urlData.publicUrl });
      }
    } catch (err) {
      console.error(`❌ ERROR: ${imgRelPath} — ${err.message}`);
      results.failed.push({ path: imgRelPath, error: err.message });
    }
  }

  console.log("\n" + "=".repeat(60));
  console.log(`✅ Uploaded: ${results.success.length} / ${IMAGES.length} images`);
  if (results.failed.length > 0) {
    console.log(`❌ Failed:   ${results.failed.length} images`);
    results.failed.forEach((f) => console.log(`   - ${f.path}: ${f.error}`));
  }
  console.log("=".repeat(60));

  // Print all CDN URLs for copy-pasting into components
  console.log("\n📋 CDN URLs (use in your components via getMediaUrl()):");
  results.success.forEach((r) => {
    const key = r.path.split("/").pop().replace(/[^a-z0-9.]/gi, "_");
    console.log(`   ${key}: "${r.url}"`);
  });
};

uploadAll().catch(console.error);
