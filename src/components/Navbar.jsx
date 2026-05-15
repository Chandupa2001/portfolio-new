import React, { useMemo, useState } from "react";
import { Button } from "./Button.jsx";
import { ThemeToggle } from "./ThemeToggle.jsx";
import { cn } from "../utils/cn";

export function Navbar({ activeId, onNav, theme, setTheme }) {
  const links = useMemo(
    () => [
      { id: "hero", label: "Home" },
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      // { id: "experience", label: "Experience" },
      { id: "education", label: "Education" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const [open, setOpen] = useState(false);

  function handleNav(id) {
    onNav(id);
    setOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => handleNav("hero")}
            className="group inline-flex items-center gap-2 rounded-xl px-2 py-2 text-sm font-semibold text-white/90 hover:text-white focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="Go to top"
          >
            <span className="h-2 w-2 rounded-full bg-accent shadow-glow" />
            <span className="tracking-tight">{`Chandupa Ranawaka`}</span>
            <span className="hidden sm:inline text-white/50 group-hover:text-white/70 transition">
              • Portfolio
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            {links.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => handleNav(l.id)}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm transition focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                  activeId === l.id
                    ? "text-white bg-white/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                )}
                aria-current={activeId === l.id ? "page" : undefined}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} setTheme={setTheme} />
            <Button
              as="button"
              variant="secondary"
              className="md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              Menu
            </Button>
          </div>
        </div>

        {/* mobile menu */}
        {open ? (
          <div className="md:hidden pb-4">
            <div className="grid gap-1 rounded-2xl border border-white/10 bg-white/5 p-2">
              {links.map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => handleNav(l.id)}
                  className={cn(
                    "rounded-xl px-3 py-3 text-left text-sm transition focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                    activeId === l.id
                      ? "text-white bg-white/10"
                      : "text-white/75 hover:text-white hover:bg-white/5"
                  )}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}