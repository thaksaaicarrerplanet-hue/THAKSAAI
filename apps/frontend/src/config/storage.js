// ============================================================================
// Supabase Storage CDN Helpers
// src/config/storage.js
//
// Single source of truth for all media asset URLs.
// Switch CDN provider in the future (e.g., Bunny.net for video) by updating
// only this file — no component-level changes needed.
// ============================================================================

const SUPABASE_URL = "https://qxbhfhqantodddmcfbme.supabase.co";
const STORAGE_BASE = `${SUPABASE_URL}/storage/v1/object/public`;

// ============================================================================
// Bucket names
// ============================================================================
export const BUCKETS = {
  MEDIA: "media",       // Public marketing images, gallery, team photos, banners
  PROFILES: "profiles", // Student and instructor profile pictures
};

// ============================================================================
// getMediaUrl(fileName)
// Build a CDN URL for any file in the "media" (public marketing) bucket.
//
// Usage:
//   import { getMediaUrl } from "@/config/storage";
//   <img src={getMediaUrl("gallery/team-photo.jpg")} alt="Team" />
// ============================================================================
export const getMediaUrl = (fileName) => {
  if (!fileName) return "";
  // If it's already an absolute URL (e.g., a migrated Supabase URL), return as-is
  if (fileName.startsWith("http")) return fileName;
  return `${STORAGE_BASE}/${BUCKETS.MEDIA}/${fileName}`;
};

// ============================================================================
// getProfileUrl(fileName)
// Build a CDN URL for a user profile photo from the "profiles" bucket.
//
// Usage:
//   import { getProfileUrl } from "@/config/storage";
//   <img src={getProfileUrl(user.profile_image)} alt="Profile" />
// ============================================================================
export const getProfileUrl = (fileName) => {
  if (!fileName) return "/default-avatar.png"; // fallback to a local placeholder
  if (fileName.startsWith("http")) return fileName;
  return `${STORAGE_BASE}/${BUCKETS.PROFILES}/${fileName}`;
};

// ============================================================================
// FUTURE: Bunny.net video stream URLs
// When video content is added, extend this file:
//
// const BUNNY_STREAM_BASE = "https://iframe.mediadelivery.net/embed";
// export const getVideoUrl = (libraryId, videoId) =>
//   `${BUNNY_STREAM_BASE}/${libraryId}/${videoId}`;
// ============================================================================
