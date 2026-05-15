import React from "react";
import { cn } from "../utils/cn";

export function Button({
  as: Comp = "a",
  variant = "primary",
  className,
  children,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black " +
    "disabled:opacity-60 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-accent text-black hover:brightness-110 shadow-glow",
    secondary:
      "bg-black/5 dark:bg-white/5 text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10",
    ghost:
      "text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5",
  };

  return (
    <Comp className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Comp>
  );
}