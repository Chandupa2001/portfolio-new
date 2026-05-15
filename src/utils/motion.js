import { useReducedMotion } from "framer-motion";

export function useMotionPrefs() {
  const reduced = useReducedMotion();
  return {
    reduced,
    fadeUp: (delay = 0) => ({
      initial: reduced ? false : { opacity: 0, y: 10 },
      whileInView: reduced ? {} : { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.5, ease: "easeOut", delay },
    }),
    fadeIn: (delay = 0) => ({
      initial: reduced ? false : { opacity: 0 },
      animate: reduced ? {} : { opacity: 1 },
      transition: { duration: 0.55, ease: "easeOut", delay },
    }),
    hoverLift: reduced
      ? {}
      : {
          whileHover: { y: -4 },
          transition: { type: "spring", stiffness: 240, damping: 18 },
        },
  };
}