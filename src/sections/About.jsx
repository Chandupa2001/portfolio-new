import React from "react";
import { motion } from "framer-motion";
import { Section } from "../components/Section.jsx";
import { Card } from "../components/Card.jsx";
import { useMotionPrefs } from "../utils/motion.js";
import { profile } from "../data/socials.js";

const stats = [
  { value: "1+", label: "Year Internship" },
  { value: "4–6", label: "Projects Shipped" },
  { value: "4th", label: "Year Undergrad" },
  { value: "MERN", label: "Core Stack" },
];

const timeline = [
  {
    year: "2020",
    title: "G.C.E. Advanced Level",
    description: `Rahula College - Matara `,
  },
  {
    year: "2022",
    title: "People's Bank Internship",
    description: "People's Bank - Matara",
  },
  {
    year: "2022",
    title: "Started Undergraduate Degree",
    description: `Began Bsc (hons) in Computing & Information Systems degree at ${profile.university}. Built a strong foundation in software engineering, algorithms, and web development.`,
  },
  {
    year: "2025",
    title: "Software Engineer Internship",
    description: `Software Engineer Intern at Galaxors (PVT) LTD. Contributed to building and maintaining web applications, gaining hands-on experience in full-stack development.`,
  },
  {
    year: "Now",
    title: "Open to Opportunities",
    description: "Actively seeking Software Engineer roles where I can contribute from day one, grow fast, and work on meaningful products with great teams.",
    active: true,
  },
];

const lookingFor = [
  { icon: "💼", text: "Software Engineer / Full-stack roles" },
  { icon: "🌐", text: "Web apps, Mobile apps, APIs, and clean UI engineering" },
  { icon: "📱", text: "Mobile apps, APIs, and clean UI engineering" },
  { icon: "🚀", text: "Teams that value code quality, ownership, and learning" },
];

export function About() {
  const m = useMotionPrefs();

  return (
    <Section
      id="about"
      title="About"
      subtitle="A little context — who I am, what I've done, and what I'm looking for."
    >
      <div className="space-y-6">

        <div className="grid gap-6 lg:grid-cols-12">

          {/* Timeline — 7 cols */}
          <motion.div className="lg:col-span-7" {...m.fadeUp(0.08)}>
            <Card className="p-6 h-full">
              <div className="flex items-center gap-2 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />
                <h3 className="text-sm font-semibold uppercase tracking-widest text-black/50 dark:text-white/50">
                  Journey
                </h3>
              </div>

              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-[3.25rem] top-0 bottom-0 w-px bg-black/10 dark:bg-white/10" />

                <div className="space-y-6">
                  {timeline.map((item, i) => (
                    <div key={i} className="relative flex gap-4 items-start">
                      {/* Year badge */}
                      <div className={`relative z-10 flex-shrink-0 w-[3.75rem] text-right`}>
                        <span className={`text-xs font-bold ${item.active ? "text-accent" : "text-black/40 dark:text-white/40"}`}>
                          {item.year}
                        </span>
                      </div>

                      {/* Dot */}
                      <div className="relative z-10 flex-shrink-0 mt-0.5">
                        <div className={`h-3 w-3 rounded-full border-2 ${
                          item.active
                            ? "bg-accent border-accent shadow-glow"
                            : "bg-black/10 dark:bg-white/10 border-black/20 dark:border-white/20"
                        }`} />
                      </div>

                      {/* Content */}
                      <div className="pb-2">
                        <p className={`text-sm font-semibold ${item.active ? "text-accent" : "text-black dark:text-white"}`}>
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs text-black/60 dark:text-white/60 leading-relaxed text-justify">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right column — Bio + Looking for */}
          <motion.div className="lg:col-span-5 flex flex-col gap-6" {...m.fadeUp(0.11)}>

            {/* Bio */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />
                <h3 className="text-sm font-semibold uppercase tracking-widest text-black/50 dark:text-white/50">
                  Bio
                </h3>
              </div>
              <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed text-justify">
                I'm a final-year{" "}
                <span className="font-semibold text-black dark:text-white">
                  Computing & Information Systems
                </span>{" "}
                undergraduate at{" "}
                <span className="font-semibold text-black dark:text-white">
                  {profile.university}
                </span>
                . I care deeply about writing clean, maintainable code and building
                interfaces that feel great to use from backend APIs to polished
                front-end experiences.
              </p>
            </Card>

            {/* What I'm looking for */}
            <Card className="p-6 flex-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />
                <h3 className="text-sm font-semibold uppercase tracking-widest text-black/50 dark:text-white/50">
                  What I'm Looking For
                </h3>
              </div>
              <ul className="space-y-3">
                {lookingFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-base leading-none mt-0.5">{item.icon}</span>
                    <span className="text-sm text-black/70 dark:text-white/70">{item.text}</span>
                  </li>
                ))}
              </ul>
            </Card>

          </motion.div>
        </div>
      </div>
    </Section>
  );
}