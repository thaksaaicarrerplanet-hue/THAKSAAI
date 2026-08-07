/**
 * Secure Supabase Image Helper
 * Resolves images directly from Supabase Public Storage buckets or reliable CDN fallbacks.
 * Designed to eliminate single-point-of-failure rendering if environmental variables are unassigned.
 */

const SUPABASE_PROJECT_URL = import.meta.env.VITE_SUPABASE_URL || "https://demo-project.supabase.co";
const SUPABASE_BUCKET_NAME = import.meta.env.VITE_SUPABASE_BUCKET || "assets";

/**
 * High-performance fallback asset registry mimicking Supabase public bucket delivery.
 * Each URL is selected for academic, AI telemetry, and campus engineering fidelity.
 */
const FALLBACK_REGISTRY = {
  // Existing Program & CRT Assets
  "crt-tier-a": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
  "crt-tier-b": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  "crt-tier-c": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
  "workshop-genai": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
  "workshop-devops": "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=900&q=80",
  "workshop-microservices": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
  "workshop-data": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  "capstone-git": "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=900&q=80",
  "capstone-cicd": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
  "capstone-defense": "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
  
  // New Official Internship Domain Showcase Assets
  "internship-ai": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
  "internship-fullstack": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
  "internship-devops": "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=900&q=80",
  "internship-marketing": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  "internship-bda": "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=900&q=80",
  "internship-data": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",

  "default": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80"
};

/**
 * Resolves a storage key into an authorized Supabase storage endpoint.
 * @param {string} key - Unique identifier or storage path inside the bucket
 * @returns {string} Fully qualified high-speed image URL
 */
export function getSupabaseImageUrl(key) {
  if (!key) return FALLBACK_REGISTRY["default"];

  // Return mapped fallback if operating without connected live bucket
  if (FALLBACK_REGISTRY[key] && SUPABASE_PROJECT_URL.includes("demo-project")) {
    return FALLBACK_REGISTRY[key];
  }

  // Generate official Supabase public bucket REST storage path
  const sanitizedPath = encodeURI(key.trim());
  return `${SUPABASE_PROJECT_URL}/storage/v1/object/public/${SUPABASE_BUCKET_NAME}/${sanitizedPath}`;
}
