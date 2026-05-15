import React from "react";
import { socials, profile } from "../data/socials.js";

export function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

          {/* Left — name + tagline */}
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-accent shadow-glow" />
            <div>
              <p className="text-sm font-bold text-black dark:text-white">{profile.name}</p>
              <p className="text-xs text-black/50 dark:text-white/50">
                Software Engineer · {profile.location}
              </p>
            </div>
          </div>

          {/* Center — social links */}
          <div className="flex flex-wrap gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-3 py-1.5 text-xs font-medium text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 hover:bg-black/10 dark:hover:bg-white/10 transition"
              >
                {s.label}
              </a>
            ))}
          </div>

          {/* Right — copyright */}
          <p className="text-xs text-black/40 dark:text-white/40">
            © {new Date().getFullYear()} All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}