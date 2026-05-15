import React from "react";
import { motion } from "framer-motion";
import { Section } from "../components/Section.jsx";
import { Card } from "../components/Card.jsx";
import { Tag } from "../components/Tag.jsx";
import { useMotionPrefs } from "../utils/motion.js";

const skillGroups = [
  {
    group: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "Python", "SQL"],
  },
  {
    group: "Frontend",
    items: ["React", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    group: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "REST APIs"],
  },
  {
    group: "Database",
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "Docker", "Figma", "Postman"],
  },
];

export function Skills() {
  const m = useMotionPrefs();

  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="A focused stack for building modern, scalable web and mobile applications."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, idx) => (
          <motion.div key={group.group} {...m.fadeUp(0.04 + idx * 0.04)}>
            <Card className="p-5 h-full">
              {/* Header */}
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />
                <h3 className="text-xs font-semibold uppercase tracking-widest text-black/50 dark:text-white/50">
                  {group.group}
                </h3>
              </div>

              {/* Divider */}
              <div className="mb-4 border-t border-black/10 dark:border-white/10" />

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}