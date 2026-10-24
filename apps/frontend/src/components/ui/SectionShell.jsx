import React from 'react';

export function SectionShell({
  id,
  ariaLabel,
  variant,
  tone = 'porcelain',
  eyebrow,
  code,
  title,
  subtitle,
  rightSlot,
  children,
  className = '',
  gridMotif = false,
}) {
  const isDark = variant === 'dark' || tone === 'midnight' || tone === 'dark';

  return (
    <section
      id={id}
      aria-label={ariaLabel || title || eyebrow}
      className={`w-full relative overflow-x-clip border-b transition-colors ${
        isDark
          ? 'bg-[#101828] text-[#F7F8F4] border-white/[0.08]'
          : 'bg-[#F7F8F4] text-[#101828] border-[#E3E5DE]'
      } ${gridMotif ? (isDark ? 'iso-grid-dark' : 'iso-grid-light') : ''} py-16 sm:py-24 ${className}`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        {(eyebrow || title || subtitle || rightSlot) && (
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-14">
            <div className="max-w-3xl">
              {(eyebrow || code) && (
                <div className="inline-flex items-center gap-2.5 mb-3.5">
                  <span
                    aria-hidden="true"
                    className={`w-2 h-2 rounded-full ${
                      isDark ? 'bg-[#C7F36B]' : 'bg-[#3659D9]'
                    }`}
                  />
                  {code && (
                    <span
                      className={`text-xs font-mono font-semibold uppercase tracking-[0.14em] ${
                        isDark ? 'text-[#C7F36B]' : 'text-[#3659D9]'
                      }`}
                    >
                      {code}
                    </span>
                  )}
                  {eyebrow && (
                    <span
                      className={`text-xs font-mono font-semibold uppercase tracking-[0.14em] ${
                        isDark ? 'text-[#C7F36B]' : 'text-[#3659D9]'
                      }`}
                    >
                      {eyebrow}
                    </span>
                  )}
                </div>
              )}

              {title && (
                <h2
                  className={`font-display font-bold tracking-[-0.02em] leading-[1.12] ${
                    isDark ? 'text-white' : 'text-[#101828]'
                  }`}
                  style={{ fontSize: 'clamp(1.75rem, 2.5vw + 1rem, 2.75rem)' }}
                >
                  {title}
                </h2>
              )}

              {subtitle && (
                <p
                  className={`mt-3.5 text-base sm:text-lg leading-relaxed max-w-[65ch] ${
                    isDark ? 'text-slate-300' : 'text-[#5B6475]'
                  }`}
                >
                  {subtitle}
                </p>
              )}
            </div>

            {rightSlot && <div className="shrink-0">{rightSlot}</div>}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}

export default SectionShell;
