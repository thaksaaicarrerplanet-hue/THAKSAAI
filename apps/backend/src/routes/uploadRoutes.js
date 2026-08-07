import express from "express";
import authUser from "../middlewares/authMiddleware.js";
import allowRoles from "../middlewares/roleMiddleware.js";
import { upload, uploadFile, deleteFile, listFiles } from "../controller/uploadController.js";

const uploadRouter = express.Router();

// Query param: ?bucket=media (default) or ?bucket=profiles
// ============================================================================
uploadRouter.get("/", listFiles);

// ============================================================================
// POST /api/upload
// Any authenticated user can upload (e.g., student updating profile photo)
// Query param: ?bucket=media (default) or ?bucket=profiles
// ============================================================================
uploadRouter.post(
  "/",
  authUser,
  upload.single("file"),
  uploadFile
);

// ============================================================================
// DELETE /api/upload
// Admin only — removing media assets from the Supabase Storage bucket
// Body: { filePath: "filename.jpg", bucket: "media" }
// ============================================================================
uploadRouter.delete(
  "/",
  authUser,
  allowRoles("admin"),
  deleteFile
);

export default uploadRouter;
