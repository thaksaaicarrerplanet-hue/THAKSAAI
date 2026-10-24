import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * SpotlightCard
 * Lusion & Active Theory–inspired interactive card primitive:
 * - Tracks cursor coordinates (--mouse-x, --mouse-y) to project a dynamic radial border & surface spotlight
 * - Applies smooth 3D perspective tilt on desktop pointer hover
 * - Renders precision Active Theory corner reticles (+)
 */
export function SpotlightCard({
  as: Component = 'div',
  tone = 'paper',
  tilt = true,
  maxTilt = 3.5,
  spotlightColor,
  className = '',
  children,
  ...rest
}) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const reducedMotion = useReducedMotion();

  const isDark = tone === 'midnight' || tone === 'dark';
  const defaultSpotlight = isDark
    ? 'rgba(199, 243, 107, 0.18)'
    : 'rgba(54, 89, 217, 0.12)';
  const glowColor = spotlightColor || defaultSpotlight;

  const handlePointerMove = (e) => {
    if (reducedMotion || e.pointerType !== 'mouse' || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);

    if (!tilt) return;
    const nx = (x / rect.width) * 2 - 1;
    const ny = (y / rect.height) * 2 - 1;
    const rx = (-ny * maxTilt).toFixed(2);
    const ry = (nx * maxTilt).toFixed(2);
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-3px)`;
  };

  const handlePointerEnter = (event) => {
    if (reducedMotion || event.pointerType !== 'mouse') return;
    setHovered(true);
  };

  const handlePointerLeave = () => {
    setHovered(false);
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  useEffect(() => {
    if (!reducedMotion || !cardRef.current) return;
    cardRef.current.style.transform = 'none';
    cardRef.current.style.removeProperty('--mouse-x');
    cardRef.current.style.removeProperty('--mouse-y');
    setHovered(false);
  }, [reducedMotion]);

  const baseToneClasses = isDark
    ? 'bg-[#111A2E]/95 text-[#F7F8F4] border border-white/12 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.65)]'
    : 'bg-white text-[#101828] border border-[#E3E5DE] shadow-[0_12px_32px_-16px_rgba(16,24,40,0.14)]';

  return (
    <Component
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      style={{
        transition: hovered
          ? 'transform 90ms linear, border-color 220ms ease, box-shadow 220ms ease'
          : 'transform 360ms cubic-bezier(0.22, 1, 0.36, 1), border-color 220ms ease, box-shadow 220ms ease',
      }}
      className={`group relative rounded-2xl overflow-hidden ${baseToneClasses} ${className}`}
      {...rest}
    >
      {/* Dynamic Cursor-Following Radial Spotlight Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(460px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${glowColor}, transparent 45%)`,
        }}
      />

      {/* Precision Active Theory Corner Reticles */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute top-2.5 left-3 font-mono text-[10px] leading-none transition-opacity duration-200 ${
          isDark ? 'text-[#C7F36B]/55' : 'text-[#3659D9]/45'
        } opacity-45 group-hover:opacity-100`}
      >
        +
      </span>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute top-2.5 right-3 font-mono text-[10px] leading-none transition-opacity duration-200 ${
          isDark ? 'text-[#C7F36B]/55' : 'text-[#3659D9]/45'
        } opacity-45 group-hover:opacity-100`}
      >
        +
      </span>

      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </Component>
  );
}

export default SpotlightCard;
