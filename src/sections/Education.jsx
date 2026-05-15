import React from "react";
import { motion } from "framer-motion";
import { Section } from "../components/Section.jsx";
import { Card } from "../components/Card.jsx";
import { Tag } from "../components/Tag.jsx";
import { useMotionPrefs } from "../utils/motion.js";
import { profile } from "../data/socials.js";

export function Education() {
  const m = useMotionPrefs();

  const courses = [
    "Data Structures & Algorithms",
    "Database Systems",
    "Software Engineering",
    "Web Application Development",
    "Machine Learning ",
    "Mobile App Development",
  ];

  const certs = [
    "Postman API Fundementals Student Expert",
    "Java Intermediate",
    "Introduction to Java",
  ];

  return (
    <Section
      id="education"
      title="Education + Certifications"
      subtitle="Academic foundation + continuous learning."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div {...m.fadeUp(0.05)}>
          <Card className="p-6">
            <h3 className="text-base font-semibold">Degree</h3>
            <p className="mt-3 text-sm text-white/70">
              BSc (Hons) in Computing & Information Systems —{" "}
              <span className="text-white">{profile.university}</span>
            </p>

            <p className="mt-4 text-sm font-semibold">Relevant courses</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {courses.map((c) => (
                <Tag key={c}>{c}</Tag>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div {...m.fadeUp(0.09)}>
          <Card className="p-6">
            <h3 className="text-base font-semibold">Certifications</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {certs.map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}