import React, { useEffect, useRef, useState } from 'react';
import { ArchitectureSceneController } from './ArchitectureScene';
import { useReducedMotion } from '../hooks/useReducedMotion';

/**
 * SceneCanvas
 * Lazy-loaded WebGL canvas host for the Capability Reactor.
 * Pauses rendering when scrolled out of view or when tab visibility is hidden.
 * Cross-fades smoothly over SceneFallback once the first WebGL frame renders.
 */
export const SceneCanvas = ({
  modules = [],
  selectedId,
  onSelect,
  tier = 'mid',
  onReady,
}) => {
  const canvasRef = useRef(null);
  const controllerRef = useRef(null);
  const onSelectRef = useRef(onSelect);
  useEffect(() => { onSelectRef.current = onSelect; }, [onSelect]);
  const reducedMotion = useReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    let controller;
    let readyFrame = null;
    let isIntersecting = false;
    try {
      controller = new ArchitectureSceneController({
        canvas,
        modules,
        selectedId,
        onSelect: (id) => onSelectRef.current?.(id),
        tier,
        reducedMotion,
        reducedMotion,
      });
      controllerRef.current = controller;
      readyFrame = window.requestAnimationFrame(() => {
        readyFrame = null;
        setReady(true);
        onReady?.();
      });
    } catch {
      // Fallback remains visible if WebGL context creation fails
      return undefined;
    }

    const handleResize = () => controller.resize();
    const handleVisibility = () => {
      controller.setVisibility(isIntersecting && document.visibilityState === 'visible');
    };

    const observer = typeof IntersectionObserver !== 'undefined'
      ? new IntersectionObserver(
          ([entry]) => {
            isIntersecting = entry.isIntersecting;
            controller.setVisibility(isIntersecting && document.visibilityState === 'visible');
          },
          { threshold: 0.05 }
        )
      : null;

    if (observer) {
      observer.observe(canvas);
    } else {
      isIntersecting = true;
      controller.setVisibility(document.visibilityState === 'visible');
    }
    window.addEventListener('resize', handleResize, { passive: true });
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      observer?.disconnect();
      if (readyFrame !== null) window.cancelAnimationFrame(readyFrame);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      controller.dispose();
      controllerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tier, reducedMotion]);

  useEffect(() => {
    if (controllerRef.current) {
      controllerRef.current.setSelectedId(selectedId);
    }
  }, [selectedId]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      tabIndex={-1}
      onPointerMove={(e) => controllerRef.current?.handlePointerMove(e.clientX, e.clientY)}
      onPointerLeave={() => controllerRef.current?.handlePointerLeave()}
      onClick={() => controllerRef.current?.handleClick()}
      className={`absolute inset-0 w-full h-full block transition-opacity duration-400 ${
        ready ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    />
  );
};

export default SceneCanvas;
