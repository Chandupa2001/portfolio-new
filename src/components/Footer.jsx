import React from "react";
import { socials, profile } from "../data/socials.js";

const navLinks = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left — brand */}
          <div className="flex flex-col gap-3 max-w-xs">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent shadow-glow" />
              <p className="text-sm font-bold text-black dark:text-white">
                {profile.name}
              </p>
            </div>
            {/* Social icon circles */}
            <div className="flex gap-2 mt-1">
              {/* GitHub */}
              <a
                href={socials.find((s) => s.label === "GitHub")?.href}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={socials.find((s) => s.label === "LinkedIn")?.href}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href={socials.find((s) => s.label === "Email")?.href}
                aria-label="Email"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — nav links */}
          <div className="flex flex-col gap-3 items-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-black/40 dark:text-white/40">
              Navigation
            </p>
            <ul className="flex flex-row gap-2">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-black/10 dark:border-white/10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-black/30 dark:text-white/30">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
