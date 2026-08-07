import React from "react";
import { Link } from "react-router-dom";
import { BRAND_ASSETS, BRAND_METADATA } from "../../theme/brandIdentity";

/**
 * Enterprise BrandLogo Component
 * Guarantees zero cumulative layout shift (CLS), strict accessibility (role="img", aria-label),
 * and generous prominent sizing across Navbars, Footers, Dashboards, and Auth screens.
 */
export default function BrandLogo({ variant = "navbar", customSub = "", className = "", disableLink = false }) {
  const isDark = variant === "dark" || variant === "footer" || variant === "auth-dark";

  // Configure prominent enlarged dimensions and clean typography without period
  const config = {
    navbar: {
      imgSize: "w-11 h-11 sm:w-[50px] sm:h-[50px]",
      textSize: "text-2xl sm:text-[1.8rem] md:text-[2rem]",
      containerClass: "gap-3 sm:gap-3.5",
      textColor: "text-[#1a1a1a]",
    },
    footer: {
      imgSize: "w-12 h-12 sm:w-[56px] sm:h-[56px]",
      textSize: "text-2xl sm:text-3xl",
      containerClass: "gap-3.5",
      textColor: "text-[#1a1a1a]",
    },
    dashboard: {
      imgSize: "w-10 h-10 sm:w-11 sm:h-11",
      textSize: "text-xl sm:text-2xl",
      containerClass: "gap-2.5 sm:gap-3",
      textColor: "text-[#0f172a]",
    },
    auth: {
      imgSize: "w-16 h-16 sm:w-[80px] sm:h-[80px]",
      textSize: "text-3xl sm:text-[2.6rem]",
      containerClass: "gap-4 sm:gap-5 flex-col sm:flex-row justify-center",
      textColor: "text-[#1a1a1a]",
    },
    default: {
      imgSize: "w-11 h-11 sm:w-[48px] sm:h-[48px]",
      textSize: "text-2xl sm:text-[1.8rem]",
      containerClass: "gap-3",
      textColor: "text-[#1a1a1a]",
    }
  };

  const current = config[variant] || config.default;

  const content = (
    <div
      className={`inline-flex items-center select-none group ${current.containerClass} ${className}`}
      aria-label={`${BRAND_METADATA.name} Official Brand Emblem`}
    >
      <img
        src={BRAND_ASSETS.logoPng}
        alt={`${BRAND_METADATA.name} - Neural Intelligence & Robotics Emblem`}
        width="1024"
        height="1024"
        className={`${current.imgSize} object-contain rounded-md shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-2xs`}
      />
      <span className={`font-display ${current.textSize} font-extrabold tracking-tight ${current.textColor} flex items-center`}>
        THAKSAAI
        {customSub && (
          <span className="ml-2.5 px-2 py-0.5 bg-[#1a1a1a] text-[#9fff00] text-2xs sm:text-xs uppercase font-sans font-black tracking-wider rounded-sm shadow-2xs">
            {customSub}
          </span>
        )}
      </span>
    </div>
  );

  if (disableLink) {
    return content;
  }

  return (
    <Link
      to="/"
      aria-label="Navigate to THAKSAAI homepage"
      className="text-decoration-none focus:outline-none focus:ring-2 focus:ring-[#9fff00] rounded-sm shrink-0 inline-block"
    >
      {content}
    </Link>
  );
}
