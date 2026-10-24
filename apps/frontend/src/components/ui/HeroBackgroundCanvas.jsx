import React, { useEffect, useRef } from 'react';

/**
 * HeroBackgroundCanvas
 * Fixed full-viewport (100vw x 100vh) stationary background animation.
 * Stays completely still in the viewport while page content scrolls over it,
 * creating the depth illusion that only the foreground content is moving.
 * Optimized for locked 60fps on mobile and desktop with zero scroll lag.
 */
export default function HeroBackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return undefined;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const pointer = {
      x: width * 0.5,
      y: height * 0.45,
      tx: width * 0.5,
      ty: height * 0.45,
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handlePointerMove = (e) => {
      pointer.tx = e.clientX;
      pointer.ty = e.clientY;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    // Lightweight grid for locked 60fps on all devices
    const isMobile = window.innerWidth < 768;
    const rows = isMobile ? 14 : 20;
    const cols = isMobile ? 24 : 36;
    let time = 0;

    const orbs = Array.from({ length: isMobile ? 18 : 30 }, (_, i) => ({
      x: Math.random(),
      y: Math.random(),
      r: 1 + Math.random() * 2,
      speedY: 0.0002 + Math.random() * 0.0003,
      phase: i * 0.8,
      isLime: i % 3 === 0,
    }));

    const render = () => {
      time += 0.014;
      pointer.x += (pointer.tx - pointer.x) * 0.06;
      pointer.y += (pointer.ty - pointer.y) * 0.06;

      const nx = (pointer.x / width - 0.5) * 2;
      const ny = (pointer.y / height - 0.5) * 2;

      // 1. Stationary Deep Space Canvas
      ctx.fillStyle = '#050811';
      ctx.fillRect(0, 0, width, height);

      // 2. Soft Ambient Glows
      const glow = ctx.createRadialGradient(
        pointer.x,
        pointer.y,
        10,
        pointer.x,
        pointer.y,
        Math.max(width, height) * 0.45
      );
      glow.addColorStop(0, 'rgba(54, 89, 217, 0.20)');
      glow.addColorStop(0.5, 'rgba(199, 243, 107, 0.05)');
      glow.addColorStop(1, 'rgba(5, 8, 17, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // 3. 3D Perspective Wave Ribbon Field (Stationary Horizon)
      const fov = 500;
      const cameraY = -110 + ny * 18;
      const cameraZ = 420;
      const projectedGrid = [];

      for (let r = 0; r < rows; r += 1) {
        const rowPoints = [];
        const depthRatio = r / (rows - 1);
        const z = (depthRatio - 0.35) * 740;

        for (let c = 0; c < cols; c += 1) {
          const colRatio = c / (cols - 1) - 0.5;
          const x = colRatio * width * 1.45 + nx * 30 * (1 - depthRatio);

          const wave1 = Math.sin(colRatio * 5.2 + time * 1.2 + r * 0.24) * 34;
          const wave2 = Math.cos(colRatio * 2.8 - time * 0.85 + r * 0.32) * 22;
          const y = 125 + wave1 + wave2;

          const scale = fov / (fov + z + cameraZ);
          const px = width * 0.5 + x * scale;
          const py = height * 0.56 + (y + cameraY) * scale;

          rowPoints.push({ px, py, scale });
        }
        projectedGrid.push(rowPoints);
      }

      for (let r = 0; r < rows; r += 1) {
        const pts = projectedGrid[r];
        const alpha = (1 - r / rows) * 0.36 + 0.05;
        ctx.beginPath();
        for (let c = 0; c < cols; c += 1) {
          const p = pts[c];
          if (c === 0) ctx.moveTo(p.px, p.py);
          else ctx.lineTo(p.px, p.py);
        }
        ctx.strokeStyle =
          r % 5 === 0
            ? `rgba(199, 243, 107, ${alpha * 0.8})`
            : `rgba(82, 126, 255, ${alpha * 0.6})`;
        ctx.lineWidth = r % 5 === 0 ? 1.25 : 0.75;
        ctx.stroke();
      }

      for (let r = 0; r < rows; r += 2) {
        const pts = projectedGrid[r];
        for (let c = 0; c < cols; c += 2) {
          const p = pts[c];
          const radius = Math.max(0.8, p.scale * 1.6);
          ctx.beginPath();
          ctx.arc(p.px, p.py, radius, 0, Math.PI * 2);
          ctx.fillStyle =
            (r + c) % 6 === 0
              ? 'rgba(199, 243, 107, 0.75)'
              : 'rgba(120, 162, 255, 0.45)';
          ctx.fill();
        }
      }

      // 4. Floating Particles
      for (let i = 0; i < orbs.length; i += 1) {
        const orb = orbs[i];
        orb.y -= orb.speedY;
        if (orb.y < 0) orb.y = 1;

        const ox = orb.x * width + Math.sin(time * 0.7 + orb.phase) * 20;
        const oy = orb.y * height;
        const pulse = 0.3 + 0.4 * Math.sin(time * 1.6 + orb.phase);

        ctx.beginPath();
        ctx.arc(ox, oy, orb.r, 0, Math.PI * 2);
        ctx.fillStyle = orb.isLime
          ? `rgba(199, 243, 107, ${pulse})`
          : `rgba(96, 142, 255, ${pulse})`;
        ctx.fill();
      }

      // 5. Soft Vignette for High Readability
      const vignette = ctx.createLinearGradient(0, 0, 0, height);
      vignette.addColorStop(0, 'rgba(5, 8, 17, 0.65)');
      vignette.addColorStop(0.5, 'rgba(5, 8, 17, 0.30)');
      vignette.addColorStop(1, 'rgba(5, 8, 17, 0.82)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-screen h-screen block pointer-events-none z-0"
    />
  );
}
