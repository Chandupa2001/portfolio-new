import React from "react";
import { cn } from "../utils/cn";

export function Tag({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-3 py-1 text-xs text-black/80 dark:text-white/80 " +
          "transition hover:border-accent/30 hover:text-accent hover:bg-accent/5",
        className
      )}
    >
      {children}
    </span>
  );
}