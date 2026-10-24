import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function getPreference() {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") return false;
  try {
    return window.matchMedia(QUERY).matches;
  } catch {
    return false;
  }
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(getPreference);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return undefined;

    let mediaQuery;
    try {
      mediaQuery = window.matchMedia(QUERY);
    } catch {
      return undefined;
    }

    const handler = (event) => setReduced(Boolean(event.matches));
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }

    // Safari versions before MediaQueryList.addEventListener use addListener.
    mediaQuery.addListener?.(handler);
    return () => mediaQuery.removeListener?.(handler);
  }, []);

  return reduced;
}

export default useReducedMotion;
