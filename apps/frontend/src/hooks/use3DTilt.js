import { useCallback, useEffect, useRef } from "react";
import useReducedMotion from "./useReducedMotion";

/**
 * Zero-React-rerender 3D pointer tilt hook using requestAnimationFrame.
 * Max rotation capped at <= 6 degrees on X and Y axes.
 * Automatically disabled on touch pointers and prefers-reduced-motion.
 */
export default function use3DTilt(maxDegrees = 5) {
  const ref = useRef(null);
  const frameRef = useRef(null);
  const reducedMotion = useReducedMotion();

  const handlePointerMove = useCallback(
    (e) => {
      if (reducedMotion || e.pointerType === "touch") return;
      const el = ref.current;
      if (!el) return;

      if (frameRef.current) cancelAnimationFrame(frameRef.current);

      frameRef.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const normX = (e.clientX - rect.left) / rect.width - 0.5;
        const normY = (e.clientY - rect.top) / rect.height - 0.5;
        const rotY = normX * maxDegrees * 2;
        const rotX = -normY * maxDegrees * 2;

        el.style.willChange = "transform";
        el.style.transform = `perspective(1200px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(8px)`;
      });
    },
    [maxDegrees, reducedMotion]
  );

  const handlePointerLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    el.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    el.style.willChange = "auto";
  }, []);

  useEffect(() => {
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return {
    ref,
    onPointerMove: handlePointerMove,
    onPointerLeave: handlePointerLeave,
  };
}
