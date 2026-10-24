import React from 'react';

/**
 * LiquidScrollContainer
 * Uses native hardware-accelerated compositor scrolling for zero lag on 60Hz/120Hz screens,
 * while child sections use lightweight Framer Motion spring physics over the stationary canvas.
 */
export default function LiquidScrollContainer({ children }) {
  return <div className="relative z-10 w-full">{children}</div>;
}
