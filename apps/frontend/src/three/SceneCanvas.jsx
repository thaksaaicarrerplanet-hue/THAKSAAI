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
  const reducedMotion = useReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    let controller;
    try {
      controller = new ArchitectureSceneController({
        canvas,
        modules,
        selectedId,
        onSelect,
        tier,
        reducedMotion,
      });
      controllerRef.current = controller;
      setReady(true);
      if (onReady) onReady();
    } catch {
      // Fallback remains visible if WebGL context creation fails
      return undefined;
    }

    const handleResize = () => controller.resize();
    const handleVisibility = () => {
      controller.setVisibility(document.visibilityState === 'visible');
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        controller.setVisibility(entry.isIntersecting && document.visibilityState === 'visible');
      },
      { threshold: 0.05 }
    );

    observer.observe(canvas);
    window.addEventListener('resize', handleResize, { passive: true });
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      observer.disconnect();
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
