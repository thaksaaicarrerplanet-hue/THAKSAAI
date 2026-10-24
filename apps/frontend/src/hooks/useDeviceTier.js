import { useEffect, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

function probeWebGL2() {
  if (typeof document === 'undefined') return true;
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    return Boolean(gl);
  } catch {
    return false;
  }
}

export function useDeviceTier() {
  const reducedMotion = useReducedMotion();
  const [tier, setTier] = useState('high');
  const [canRenderWebGL, setCanRenderWebGL] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const hasWebGL = probeWebGL2();
    setCanRenderWebGL(hasWebGL);

    if (!hasWebGL) {
      setTier('low');
      return;
    }

    const isSmallScreen = window.innerWidth < 768;
    setTier(isSmallScreen ? 'mid' : 'high');
  }, []);

  return {
    tier,
    setTier,
    reducedMotion,
    canRenderWebGL,
  };
}

export default useDeviceTier;
