import React, { useState } from "react";
import { motion } from "framer-motion";
import { getSupabaseImageUrl } from "../../services/supabaseImages";

/**
 * Enterprise Institutional Card Component.
 * Optimized for hardware rendering: eliminates expensive GPU Gaussian blur computations,
 * ensures zero layout shift with skeleton states, and conforms to ergonomic touch targets.
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
  const imageUrl = getSupabaseImageUrl(imageKey);

  return (
    <motion.article
      whileHover={{ y: -4, transition: { duration: 0.18, ease: "easeOut" } }}
      whileTap={{ scale: 0.99 }}
      className={`group relative flex flex-col justify-between bg-white/95 rounded-2xl border border-black/[0.07] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.09)] hover:border-[#1a1a1a]/30 transition-all duration-200 overflow-hidden ${className}`}
    >
      <div className="flex flex-col">
        {/* Media Container */}
        <div className={`relative w-full ${aspectRatio} bg-zinc-100 overflow-hidden`}>
          {!loaded && !error && (
            <div className="absolute inset-0 animate-pulse bg-zinc-200 z-0" />
          )}
          
          <img
            src={imageUrl}
            alt={title ? `${title} system view` : "THAKSAAI training program"}
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            onError={() => {
              setError(true);
              setLoaded(true);
            }}
            className={`w-full h-full object-cover transition-transform duration-500 ease-out transform group-hover:scale-103 ${
              loaded ? "opacity-100 scale-100" : "opacity-0 scale-103"
            }`}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 pointer-events-none"></div>

          {/* Institutional Badge */}
          {badgeText && (
            <div className="absolute top-3.5 left-3.5 z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1a1a1a]/95 text-white shadow-sm border border-white/15">
                <span className="w-2 h-2 rounded-full bg-[#9fff00] block"></span>
                {badgeText}
              </span>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 flex flex-col gap-2 flex-grow">
          {subtitle && (
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-sans">
              {subtitle}
            </span>
          )}
          
          <h3 className="text-xl sm:text-2xl font-display font-bold text-[#1a1a1a] leading-tight tracking-tight group-hover:text-black transition-colors">
            {title}
          </h3>

          {description && (
            <p className="text-sm font-sans text-zinc-600 leading-relaxed font-normal mt-0.5">
              {description}
            </p>
          )}

          {children && (
            <div className="mt-4">
              {children}
            </div>
          )}
        </div>
      </div>

      {/* Touch-Optimized Action Footer */}
      <div className="px-6 pb-6 pt-3 mt-auto border-t border-black/[0.04] bg-[#EDEEF5]/40 group-hover:bg-[#EDEEF5]/70 transition-colors flex items-center justify-between">
        <button
          type="button"
          onClick={onActionClick}
          aria-label={`Explore details for ${title}`}
          className="w-full min-h-[44px] flex items-center justify-between text-sm font-bold tracking-wide text-[#1a1a1a] group-hover:text-black focus:outline-none focus:ring-2 focus:ring-[#9fff00] rounded-lg transition-all"
        >
          <span className="underline decoration-[#9fff00] decoration-2 underline-offset-4 group-hover:decoration-3 transition-all">
            {actionText}
          </span>
          
          <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1a1a1a] text-[#9fff00] flex items-center justify-center shadow-xs group-hover:bg-black group-hover:scale-105 transition-all shrink-0">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </span>
        </button>
      </div>

      <div className="w-full h-1 bg-transparent group-hover:bg-[#9fff00] transition-colors duration-200"></div>
    </motion.article>
  );
}
