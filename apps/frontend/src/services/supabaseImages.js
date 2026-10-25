/**
 * Secure Supabase Image Helper with Responsive SrcSet & Format Negotiation
 * Resolves images from Supabase Public Storage or high-reliability CDN fallbacks.
 * Returns srcset widths of 480, 768, 1200 and 1600.
 */

const SUPABASE_PROJECT_URL = import.meta.env.VITE_SUPABASE_URL || "https://demo-project.supabase.co";
const SUPABASE_BUCKET_NAME = import.meta.env.VITE_SUPABASE_BUCKET || "assets";

const FALLBACK_REGISTRY = {
  "crt-tier-a": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
  "crt-tier-b": "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  "crt-tier-c": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
  "workshop-genai": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
  "workshop-devops": "https://images.unsplash.com/photo-1607799279861-4dd421887fb3",
  "workshop-microservices": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
  "workshop-data": "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  "capstone-git": "https://images.unsplash.com/photo-1556075798-4825dfaaf498",
  "capstone-cicd": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  "capstone-defense": "https://images.unsplash.com/photo-1531482615713-2afd69097998",
  "internship-ai": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
  "internship-fullstack": "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  "internship-devops": "https://images.unsplash.com/photo-1607799279861-4dd421887fb3",
  "internship-marketing": "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  "internship-bda": "https://images.unsplash.com/photo-1552581234-26160f608093",
  "internship-data": "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  "default": "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
};

const WIDTHS = [480, 768, 1200, 1600];

export function getSupabaseImageUrl(key, width = 900, format = "webp") {
  const baseKey = key && FALLBACK_REGISTRY[key] ? key : "default";

  if (FALLBACK_REGISTRY[key] && SUPABASE_PROJECT_URL.includes("demo-project")) {
    return `${FALLBACK_REGISTRY[baseKey]}?auto=format&fit=crop&w=${width}&q=80&fm=${format}`;
  }

  if (!key) {
    return `${FALLBACK_REGISTRY["default"]}?auto=format&fit=crop&w=${width}&q=80&fm=${format}`;
  }

  const sanitizedPath = encodeURI(key.trim());
  return `${SUPABASE_PROJECT_URL}/storage/v1/object/public/${SUPABASE_BUCKET_NAME}/${sanitizedPath}?width=${width}&format=${format}`;
}

export function getSupabaseImageSrcSet(key, format = "webp") {
  return WIDTHS.map((w) => `${getSupabaseImageUrl(key, w, format)} ${w}w`).join(", ");
}
