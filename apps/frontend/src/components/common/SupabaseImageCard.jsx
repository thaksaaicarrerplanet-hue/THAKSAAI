import React, { useState } from "react";
import { getSupabaseImageUrl, getSupabaseImageSrcSet } from "../../services/supabaseImages";
import SpatialCard from "../ui/SpatialCard";

/**
 * Institutional Pathway & Program Card Component
 * Uses SpatialCard depth surface, AVIF/WebP <picture> negotiation,
 * responsive srcSet (480w, 768w, 1200w, 1600w), and 44px touch targets.
 */
export default function SupabaseImageCard({
  imageKey,
  title,
  subtitle,
  badgeText,
  description,
  actionText = "Explore Details",
  onActionClick,
  aspectRatio = "aspect-[16/10]",
  className = "",
  children,
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const fallbackUrl = getSupabaseImageUrl(imageKey, 900, "webp");
  const avifSrcSet = getSupabaseImageSrcSet(imageKey, "avif");
  const webpSrcSet = getSupabaseImageSrcSet(imageKey, "webp");

  return (
    <SpatialCard
      as="article"
      tilt={true}
      className={`group flex flex-col justify-between overflow-hidden ${className}`}
    >
      <div className="flex flex-col">
        {/* Media Container */}
        <div className={`relative w-full ${aspectRatio} bg-[#E3E5DE]/50 overflow-hidden border-b border-[#E3E5DE]`}>
          {!loaded && !error && (
            <div className="absolute inset-0 animate-pulse bg-[#E3E5DE] z-0" />
          )}

          <picture>
            <source type="image/avif" srcSet={avifSrcSet} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" />
            <source type="image/webp" srcSet={webpSrcSet} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" />
            <img
              src={fallbackUrl}
              alt={title ? `${title} — THAKSAAI Program` : "THAKSAAI training program"}
              width="800"
              height="500"
              loading="lazy"
              decoding="async"
              onLoad={() => setLoaded(true)}
              onError={() => {
                setError(true);
                setLoaded(true);
              }}
              className={`w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-103 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </picture>

          <div className="absolute inset-0 bg-gradient-to-t from-[#101828]/40 via-transparent to-transparent pointer-events-none" />

          {badgeText && (
            <div className="absolute top-3.5 left-3.5 z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-[#101828]/95 text-[#F7F8F4] border border-white/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7F36B] block" />
                {badgeText}
              </span>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 flex flex-col gap-2 flex-grow">
          {subtitle && (
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#3659D9]">
              {subtitle}
            </span>
          )}

          <h3 className="text-xl sm:text-2xl font-display font-bold text-[#101828] leading-tight tracking-tight">
            {title}
          </h3>

          {description && (
            <p className="text-sm font-sans text-[#5B6475] leading-relaxed mt-1">
              {description}
            </p>
          )}

          {children && <div className="mt-4">{children}</div>}
        </div>
      </div>

      {/* Touch-Optimized Action Footer */}
      <div className="px-6 pb-5 pt-3 mt-auto border-t border-[#E3E5DE] bg-[#F7F8F4]/60 group-hover:bg-[#F7F8F4] transition-colors flex items-center justify-between">
        <button
          type="button"
          onClick={onActionClick}
          aria-label={`${actionText} for ${title}`}
          className="w-full min-h-[44px] flex items-center justify-between text-sm font-semibold tracking-tight text-[#101828] group-hover:text-[#3659D9] rounded-lg transition-colors cursor-pointer"
        >
          <span className="underline decoration-[#C7F36B] decoration-2 underline-offset-4">
            {actionText}
          </span>

          <span className="w-8 h-8 rounded-lg bg-[#101828] text-[#C7F36B] flex items-center justify-center group-hover:bg-[#3659D9] group-hover:text-white transition-colors shrink-0">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </span>
        </button>
      </div>
    </SpatialCard>
  );
}
