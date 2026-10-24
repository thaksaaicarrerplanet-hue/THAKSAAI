import React from 'react';
import { SpatialCard } from './SpatialCard';

export function MetricLedger({ items = [], variant, tone = 'porcelain' }) {
  const verifiedItems = (items || []).filter(
    (item) => item && item.verified === true && Boolean(item.source)
  );

  if (verifiedItems.length === 0) {
    return null;
  }

  const isDark = variant === 'dark' || tone === 'midnight' || tone === 'dark';

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
      {verifiedItems.map((item) => (
        <SpatialCard
          key={item.id || item.label}
          tone={isDark ? 'midnight' : 'paper'}
          elevation="e1"
          tilt={true}
          className="p-6 sm:p-7 flex flex-col justify-between h-full"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#E3E5DE]">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.14em] text-[#3659D9]">
                {item.code || 'VERIFIED'}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-[#C7F36B]/30 text-[#101828]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#101828]" aria-hidden="true" />
                {item.unit || 'Audited'}
              </span>
            </div>

            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl sm:text-5xl font-mono font-bold tracking-tight text-[#101828]">
                {item.value}
              </span>
            </div>

            <h3 className="text-base font-display font-bold text-[#101828] mb-2">
              {item.label}
            </h3>

            <p className="text-xs sm:text-sm font-sans text-[#5B6475] leading-relaxed">
              {item.detail}
            </p>
          </div>

          <div className="mt-6 pt-3 border-t border-[#E3E5DE]/70 flex items-center justify-between text-[11px] font-mono text-[#5B6475]">
            <span className="truncate" title={item.source}>
              SRC: {item.source}
            </span>
          </div>
        </SpatialCard>
      ))}
    </div>
  );
}

export default MetricLedger;
