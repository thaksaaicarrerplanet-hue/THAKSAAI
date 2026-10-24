import { useState, useEffect, useRef } from 'react';

const GLYPHS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ//::--';

/**
 * Active Theory–inspired cryptographic text decode hook.
 * Resolves a string character-by-character over `duration` ms when `trigger` is true.
 */
export function useTextScramble(targetText = '', { duration = 520, trigger = true } = {}) {
  const [displayText, setDisplayText] = useState(targetText);
  const rafRef = useRef(null);

  useEffect(() => {
    const str = String(targetText ?? '');
    if (!trigger || !str) {
      setDisplayText(str);
      return undefined;
    }

    let startTime = null;
    const length = str.length;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const resolvedCount = Math.floor(progress * length);

      let output = '';
      for (let i = 0; i < length; i += 1) {
        const char = str[i];
        if (char === ' ' || i < resolvedCount) {
          output += char;
        } else {
          const glyphIndex = (i * 7 + Math.floor(elapsed * 0.08)) % GLYPHS.length;
          output += GLYPHS[glyphIndex];
        }
      }

      setDisplayText(output);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setDisplayText(str);
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [targetText, duration, trigger]);

  return displayText;
}

export default useTextScramble;
