import React from "react";

/**
 * RouteSkeleton — Accessible, Zero-CLS Suspense Fallback Skeleton
 */
export default function RouteSkeleton({ label = "Loading module..." }) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="w-full min-h-[70vh] bg-[#F7F8F4] pt-28 pb-16 px-4 sm:px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <span className="sr-only">{label}</span>
        <div className="w-32 h-4 bg-[#E3E5DE] rounded animate-pulse mb-4" />
        <div className="w-3/4 max-w-xl h-10 bg-[#E3E5DE] rounded-lg animate-pulse mb-4" />
        <div className="w-2/3 max-w-md h-5 bg-[#E3E5DE]/80 rounded animate-pulse mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="h-64 rounded-2xl bg-white border border-[#E3E5DE] p-6 flex flex-col justify-between"
            >
              <div>
                <div className="w-20 h-3 bg-[#E3E5DE] rounded animate-pulse mb-4" />
                <div className="w-3/4 h-6 bg-[#E3E5DE] rounded animate-pulse mb-3" />
                <div className="w-full h-4 bg-[#E3E5DE]/70 rounded animate-pulse mb-2" />
                <div className="w-5/6 h-4 bg-[#E3E5DE]/70 rounded animate-pulse" />
              </div>
              <div className="w-32 h-9 bg-[#E3E5DE] rounded-lg animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
