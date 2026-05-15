import React from "react";
import { motion } from "framer-motion";
import { Section } from "../components/Section.jsx";
import { Card } from "../components/Card.jsx";
import { useMotionPrefs } from "../utils/motion.js";

export function Experience() {
  const m = useMotionPrefs();

  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Internship impact + hands-on teamwork through university projects."
    >
      <motion.div className="grid gap-6 lg:grid-cols-2" {...m.fadeUp(0.05)}>
        <Card className="p-6">
          <h3 className="text-base font-semibold">Internship</h3>
          <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-semibold">Galaxors (PVT) LTD</p>
            <p className="mt-1 text-sm text-white/70">Software Engineering Intern • 1 year</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>• Built and shipped UI features with React + Tailwind, improving usability and responsiveness.</li>
              <li>• Implemented REST APIs / integrated endpoints; improved error handling and edge-case coverage.</li>
              <li>• Collaborated with the team using GitHub, PR reviews, and clear documentation.</li>
              <li>• Optimized performance (bundle hygiene, lazy loading, UI state management) for smoother UX.</li>
            </ul>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-base font-semibold">University projects / leadership</h3>
          <div className="mt-3 space-y-3 text-sm text-white/70 leading-relaxed">
            <p>
              Worked in small teams to plan, build, and deliver end-to-end systems — from requirements to deployment-ready
              prototypes.
            </p>
            <ul className="space-y-2">
              <li>• Owned features end-to-end (UI, API integration, testing).</li>
              <li>• Led task breakdown and sprint-style coordination in group projects.</li>
              <li>• Presented results and demos with clear technical communication.</li>
            </ul>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
}