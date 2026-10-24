import React from 'react';
import use3DTilt from '../../hooks/use3DTilt';

export function SpatialCard({
  as: Component = 'div',
  variant,
  tone = 'paper',
  elevation = 'e1',
  tilt = false,
  maxTilt = 4.5,
  className = '',
  children,
  ...rest
}) {
  const { ref, onPointerMove, onPointerLeave } = use3DTilt(maxTilt);
  const isDark = variant === 'dark' || tone === 'midnight' || tone === 'dark';

  const elevationClass =
    elevation === 'e3'
      ? 'shadow-[0_24px_48px_-24px_rgba(16,24,40,0.28)]'
      : elevation === 'e2'
      ? 'shadow-[0_8px_24px_-12px_rgba(16,24,40,0.18)]'
      : 'shadow-[0_1px_2px_rgba(16,24,40,0.06)]';

  return (
    <Component
      ref={tilt ? ref : undefined}
      onPointerMove={tilt ? onPointerMove : undefined}
      onPointerLeave={tilt ? onPointerLeave : undefined}
      style={{
        transition:
          'transform 220ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 220ms cubic-bezier(0.22, 1, 0.36, 1), border-color 220ms ease',
      }}
      className={`spatial-card-sheen relative rounded-2xl border ${
        isDark
          ? 'bg-[#1A2335] border-white/10 text-[#F7F8F4] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.45)] hover:border-[#C7F36B]/40 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.65)]'
          : `bg-white border-[#E3E5DE] text-[#101828] ${elevationClass} hover:border-[#101828]/25 hover:shadow-[0_24px_48px_-24px_rgba(16,24,40,0.22)]`
      } focus-visible:outline-2 focus-visible:outline-[#3659D9] focus-visible:outline-offset-3 ${className}`}
      {...rest}
    >
      <div className="relative z-10 h-full">{children}</div>
    </Component>
  );
}

export default SpatialCard;
