import { tokens } from "../theme/masterThemeConfig";

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: tokens.motion.dur.md,
      ease: tokens.motion.ease,
    },
  },
};

export const stagger = (staggerChildren = 0.08) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren,
    },
  },
});

export const reveal = {
  hidden: { opacity: 0, scale: 0.98 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: tokens.motion.dur.md,
      ease: tokens.motion.ease,
    },
  },
};

export const depthHover = {
  rest: { y: 0 },
  hover: {
    y: -4,
    transition: tokens.motion.spring,
  },
};
