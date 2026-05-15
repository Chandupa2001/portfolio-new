import React from "react";
import { cn } from "../utils/cn";

export function Section({ id, title, subtitle, children, className }) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-16 sm:py-20", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-2 max-w-2xl text-sm sm:text-base text-black/70 dark:text-white/70">
              {subtitle}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}