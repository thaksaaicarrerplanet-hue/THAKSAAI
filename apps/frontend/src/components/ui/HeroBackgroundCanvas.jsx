import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/**
 * Lightweight ambient canvas. It is decorative only, pauses when the tab is
 * hidden, respects reduced-motion preferences, and uses a capped DPR so the
 * background never becomes a full-resolution GPU tax on mobile.
 */
export default function HeroBackgroundCanvas() {
  const canvasRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return undefined;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrameId = null;
    let isVisible = document.visibilityState === "visible";
    let time = 0;
    const canTrackPointer =
      !reducedMotion && window.matchMedia?.("(pointer: fine)").matches;

    const isMobile = width < 768;
    const rows = isMobile ? 10 : 16;
    const cols = isMobile ? 18 : 28;
    const orbs = Array.from({ length: isMobile ? 10 : 20 }, (_, index) => ({
      x: Math.random(),
      y: Math.random(),
      radius: 0.8 + Math.random() * 1.5,
      speedY: 0.00015 + Math.random() * 0.0002,
      phase: index * 0.8,
      isLime: index % 3 === 0,
    }));

    const pointer = {
      x: width * 0.5,
      y: height * 0.45,
      targetX: width * 0.5,
      targetY: height * 0.45,
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.2 : 1.5);
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      requestFrame();
    };

    const draw = () => {
      animationFrameId = null;
      if (!isVisible) return;

      if (!reducedMotion) {
        time += 0.012;
        pointer.x += (pointer.targetX - pointer.x) * 0.06;
        pointer.y += (pointer.targetY - pointer.y) * 0.06;
      }

      const nx = (pointer.x / Math.max(width, 1) - 0.5) * 2;
      const ny = (pointer.y / Math.max(height, 1) - 0.5) * 2;

      ctx.fillStyle = "#050811";
      ctx.fillRect(0, 0, width, height);

      const glow = ctx.createRadialGradient(
        pointer.x,
        pointer.y,
        8,
        pointer.x,
        pointer.y,
        Math.max(width, height) * 0.46
      );
      glow.addColorStop(0, "rgba(54, 89, 217, 0.18)");
      glow.addColorStop(0.52, "rgba(199, 243, 107, 0.045)");
      glow.addColorStop(1, "rgba(5, 8, 17, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      const cameraY = -110 + ny * (reducedMotion ? 0 : 14);
      const fov = 500;
      const cameraZ = 420;
      const grid = [];

      for (let row = 0; row < rows; row += 1) {
        const points = [];
        const depthRatio = row / (rows - 1);
        const z = (depthRatio - 0.35) * 740;

        for (let col = 0; col < cols; col += 1) {
          const colRatio = col / (cols - 1) - 0.5;
          const x = colRatio * width * 1.45 + nx * (reducedMotion ? 0 : 22) * (1 - depthRatio);
          const waveOne = Math.sin(colRatio * 5.2 + time * 1.2 + row * 0.24) * 30;
          const waveTwo = Math.cos(colRatio * 2.8 - time * 0.85 + row * 0.32) * 18;
          const y = 125 + waveOne + waveTwo;
          const scale = fov / (fov + z + cameraZ);
          points.push({
            x: width * 0.5 + x * scale,
            y: height * 0.56 + (y + cameraY) * scale,
            scale,
          });
        }
        grid.push(points);
      }

      for (let row = 0; row < rows; row += 1) {
        const points = grid[row];
        const alpha = (1 - row / rows) * 0.3 + 0.045;
        ctx.beginPath();
        points.forEach((point, index) => {
          if (index === 0) ctx.moveTo(point.x, point.y);
          else ctx.lineTo(point.x, point.y);
        });
        ctx.strokeStyle =
          row % 4 === 0
            ? `rgba(199, 243, 107, ${alpha * 0.72})`
            : `rgba(82, 126, 255, ${alpha * 0.56})`;
        ctx.lineWidth = row % 4 === 0 ? 1.05 : 0.7;
        ctx.stroke();
      }

      for (let row = 0; row < rows; row += 2) {
        for (let col = 0; col < cols; col += 2) {
          const point = grid[row][col];
          ctx.beginPath();
          ctx.arc(point.x, point.y, Math.max(0.65, point.scale * 1.35), 0, Math.PI * 2);
          ctx.fillStyle =
            (row + col) % 6 === 0
              ? "rgba(199, 243, 107, 0.68)"
              : "rgba(120, 162, 255, 0.4)";
          ctx.fill();
        }
      }

      orbs.forEach((orb) => {
        if (!reducedMotion) {
          orb.y -= orb.speedY;
          if (orb.y < 0) orb.y = 1;
        }
        const x = orb.x * width + Math.sin(time * 0.7 + orb.phase) * (reducedMotion ? 0 : 16);
        const y = orb.y * height;
        const alpha = reducedMotion ? 0.42 : 0.28 + 0.32 * Math.sin(time * 1.4 + orb.phase);
        ctx.beginPath();
        ctx.arc(x, y, orb.radius, 0, Math.PI * 2);
        ctx.fillStyle = orb.isLime
          ? `rgba(199, 243, 107, ${alpha})`
          : `rgba(96, 142, 255, ${alpha})`;
        ctx.fill();
      });

      const vignette = ctx.createLinearGradient(0, 0, 0, height);
      vignette.addColorStop(0, "rgba(5, 8, 17, 0.64)");
      vignette.addColorStop(0.5, "rgba(5, 8, 17, 0.26)");
      vignette.addColorStop(1, "rgba(5, 8, 17, 0.8)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      if (!reducedMotion && isVisible) {
        animationFrameId = window.requestAnimationFrame(draw);
      }
    };

    function requestFrame() {
      if (isVisible && animationFrameId === null) {
        animationFrameId = window.requestAnimationFrame(draw);
      }
    }

    const handlePointerMove = (event) => {
      pointer.targetX = event.clientX;
      pointer.targetY = event.clientY;
    };

    const handleVisibilityChange = () => {
      isVisible = document.visibilityState === "visible";
      if (!isVisible && animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      } else {
        requestFrame();
      }
    };

    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);
    if (canTrackPointer) window.addEventListener("pointermove", handlePointerMove, { passive: true });
    resize();

    return () => {
      if (animationFrameId !== null) window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (canTrackPointer) window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-screen h-screen block pointer-events-none z-0"
    />
  );
}
