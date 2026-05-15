import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "../components/Section.jsx";
import { Tag } from "../components/Tag.jsx";
import { Button } from "../components/Button.jsx";
import { useMotionPrefs } from "../utils/motion.js";
import { projects } from "../data/projects.js";

function ProjectCard({ p, onOpen }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative cursor-pointer h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(p)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/[0.03] overflow-hidden h-full flex flex-col shadow-sm dark:shadow-none">

        {/* Image */}
        <div className="relative overflow-hidden aspect-[16/10] bg-black/5 dark:bg-white/5">
          {p.image ? (
            <img
              src={p.image}
              alt={p.imageAlt || `${p.title} screenshot`}
              loading="lazy"
              className="h-full w-full object-cover transition duration-300"
              style={{ opacity: hovered ? 0.75 : 1 }}
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center">
              <span className="text-black/20 dark:text-white/20 text-xs uppercase tracking-widest">No Preview</span>
            </div>
          )}

          {/* Hover overlay */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"
              >
                <span className="flex items-center gap-2 rounded-xl bg-black/70 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
                  </svg>
                  View Details
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          {/* Category + Year */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-black/40 dark:text-white/40">
              {p.category || "Project"}
            </span>
            <span className="text-xs font-semibold text-black/40 dark:text-white/40">
              {p.year || ""}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-black dark:text-white leading-snug">
            {p.title}
          </h3>

          {/* Description */}
          <p className="mt-2 text-sm text-black/60 dark:text-white/60 leading-relaxed line-clamp-2 flex-1">
            {p.description}
          </p>

          {/* View Project link */}
          <div className="mt-5 pt-4 border-t border-black/10 dark:border-white/10">
            <span className="text-xs font-semibold uppercase tracking-widest text-black/50 dark:text-white/50 group-hover:text-accent transition flex items-center gap-2">
              View Project
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ p, onClose }) {
  const hasGithub = Boolean(p.github);
  const hasLinkedin = Boolean(p.linkedin);

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/60 dark:bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        key="modal"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
      >
        <div
          className="pointer-events-auto w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0e0e0e] shadow-2xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image */}
          {p.image && (
            <div className="relative overflow-hidden rounded-t-2xl aspect-[16/9]">
              <img
                src={p.image}
                alt={p.imageAlt || "Project screenshot"}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          )}

          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-semibold uppercase tracking-widest text-black/40 dark:text-white/40">
                    {p.category || "Project"}
                  </span>
                  {p.year && (
                    <span className="text-xs text-black/30 dark:text-white/30">{p.year}</span>
                  )}
                </div>
                <h2 className="text-lg font-bold text-black dark:text-white leading-snug">
                  {p.title}
                </h2>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="my-4 border-t border-black/10 dark:border-white/10" />

            {/* Full description */}
            <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed">
              {p.description}
            </p>

            {/* Tech stack */}
            {p.stack?.length > 0 && (
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-black/40 dark:text-white/40 mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            )}

            {/* Buttons */}
            {(hasGithub || hasLinkedin) && (
              <div className="mt-6 flex flex-wrap gap-3">
                {hasGithub && (
                  <Button href={p.github} target="_blank" rel="noreferrer" variant="primary">
                    GitHub
                  </Button>
                )}
                {hasLinkedin && (
                  <Button href={p.linkedin} target="_blank" rel="noreferrer" variant="secondary">
                    LinkedIn Video
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export function Projects() {
  const m = useMotionPrefs();
  const [selected, setSelected] = useState(null);

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A collection of work built across web and mobile."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <motion.div key={p.id} {...m.fadeUp(0.05 + idx * 0.04)}>
            <ProjectCard p={p} onOpen={setSelected} />
          </motion.div>
        ))}
      </div>

      {selected && (
        <ProjectModal p={selected} onClose={() => setSelected(null)} />
      )}
    </Section>
  );
}