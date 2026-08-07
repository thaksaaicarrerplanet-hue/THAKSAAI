import { createClient } from "@supabase/supabase-js";
import multer from "multer";
import path from "path";

// ============================================================================
// Lazy Supabase Admin Client
// Initialized on first use (after dotenv has loaded) to prevent
// "supabaseUrl is required" errors during module import resolution.
// ============================================================================
let _supabaseAdmin = null;
const getSupabaseAdmin = () => {
  if (!_supabaseAdmin) {
    _supabaseAdmin = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_KEY
    );
  }
  return _supabaseAdmin;
};

// ============================================================================
// Multer Config — store in memory buffer (streams directly to Supabase)
// Max file size: 5 MB. For videos in future: raise this limit.
// ============================================================================
const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB

const storage = multer.memoryStorage();

export const upload = multer({
  storage,
  limits: { fileSize: MAX_FILE_SIZE_BYTES },
  fileFilter: (req, file, cb) => {
    if (ALLOWED_MIME_TYPES.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        new Error(
          `Invalid file type: ${file.mimetype}. Only JPEG, PNG, WebP, and GIF images are accepted.`
        ),
        false
      );
    }
  },
});

// ============================================================================
// Upload Handler
// POST /api/upload
// Body: multipart/form-data with field "file"
// Query: ?bucket=media|profiles (defaults to "media")
// Returns: { url: "https://....supabase.co/storage/.../filename.jpg" }
// ============================================================================
export const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file provided in the request." });
    }

    const bucket = req.query.bucket === "profiles" ? "profiles" : "media";
    const fileExt = path.extname(req.file.originalname).toLowerCase() || ".jpg";

    // Generate a unique, collision-free filename using timestamp + random suffix
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e6)}`;
    const safeOriginalName = req.file.originalname
      .replace(/[^a-zA-Z0-9._-]/g, "_")
      .replace(fileExt, "");
    const fileName = `${safeOriginalName}_${uniqueSuffix}${fileExt}`;

    const supabaseAdmin = getSupabaseAdmin();

    // Upload to Supabase Storage bucket
    const { data, error } = await supabaseAdmin.storage
      .from(bucket)
      .upload(fileName, req.file.buffer, {
        contentType: req.file.mimetype,
        upsert: false, // Never overwrite — always create new file
      });

    if (error) {
      console.error("Supabase Storage upload error:", error.message);
      return res.status(500).json({ message: "Storage upload failed: " + error.message });
    }

    // Build the permanent public CDN URL
    const { data: publicUrlData } = getSupabaseAdmin().storage
      .from(bucket)
      .getPublicUrl(data.path);

    return res.status(201).json({
      message: "File uploaded successfully.",
      url: publicUrlData.publicUrl,
      path: data.path,
      bucket,
    });
  } catch (err) {
    // Handle multer file size / type errors
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(413).json({ message: "File exceeds the 5 MB size limit." });
    }
    console.error("Upload controller error:", err.message);
    return res.status(500).json({ message: "Upload failed: " + err.message });
  }
};

// ============================================================================
// List Files Handler (Public access for marketing pages)
// GET /api/upload?bucket=media
// ============================================================================
export const listFiles = async (req, res) => {
  try {
    const bucket = req.query.bucket === "profiles" ? "profiles" : "media";
    const supabaseAdmin = getSupabaseAdmin();

    const { data, error } = await supabaseAdmin.storage.from(bucket).list("", {
      limit: 100,
      offset: 0,
      sortBy: { column: "created_at", order: "desc" },
    });

    if (error) {
      console.error("Supabase Storage list error:", error.message);
      return res.status(500).json({ message: "Storage list failed: " + error.message });
    }

    const filesWithUrls = data
      .filter((file) => file.name !== ".emptyFolderPlaceholder")
      .map((file) => {
        const { data: publicUrlData } = supabaseAdmin.storage.from(bucket).getPublicUrl(file.name);
        return {
          name: file.name,
          url: publicUrlData.publicUrl,
          created_at: file.created_at,
        };
      });

    return res.status(200).json({ files: filesWithUrls });
  } catch (err) {
    console.error("List files controller error:", err.message);
    return res.status(500).json({ message: "List files failed: " + err.message });
  }
};

// ============================================================================
// Delete Handler (Admin only — for removing media assets from the dashboard)
// DELETE /api/upload
// Body: { path: "filename.jpg", bucket: "media" }
// ============================================================================
export const deleteFile = async (req, res) => {
  try {
    const { filePath, bucket = "media" } = req.body;

    if (!filePath) {
      return res.status(400).json({ message: "filePath is required." });
    }

    const { error } = await getSupabaseAdmin().storage.from(bucket).remove([filePath]);

    if (error) {
      return res.status(500).json({ message: "Delete failed: " + error.message });
    }

    return res.json({ message: "File deleted successfully.", path: filePath });
  } catch (err) {
    return res.status(500).json({ message: "Delete failed: " + err.message });
  }
};
