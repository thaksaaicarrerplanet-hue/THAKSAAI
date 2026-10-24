import { useEffect, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

function probeWebGL() {
  if (typeof document === "undefined") return false;
  let context;
  try {
    const canvas = document.createElement("canvas");
    context = canvas.getContext("webgl2") || canvas.getContext("webgl");
    return Boolean(context);
  } catch {
    return false;
  } finally {
    try {
      context?.getExtension("WEBGL_lose_context")?.loseContext();
    } catch {
      // Capability probing should never break rendering.
    }
  }
}

function getPerformanceTier(hasWebGL) {
  if (!hasWebGL) return "low";
  if (typeof window === "undefined") return "mid";

  const cores = Number(navigator.hardwareConcurrency || 8);
  const memory = Number(navigator.deviceMemory || 0);
  if (cores <= 4 || (memory > 0 && memory <= 3)) return "low";
  if (window.innerWidth < 900 || (memory > 0 && memory <= 4)) return "mid";
  return "high";
}

export function useDeviceTier() {
  const reducedMotion = useReducedMotion();
  const [tier, setTier] = useState("mid");
  const [canRenderWebGL, setCanRenderWebGL] = useState(false);

  useEffect(() => {
    let active = true;
    const hasWebGL = probeWebGL();

    if (active) {
      setCanRenderWebGL(hasWebGL);
      setTier(getPerformanceTier(hasWebGL));
    }

    const handleResize = () => {
      if (active) setTier(getPerformanceTier(hasWebGL));
    };
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      active = false;
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { tier, setTier, reducedMotion, canRenderWebGL };
}

export default useDeviceTier;
