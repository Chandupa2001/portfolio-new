import React, { useEffect, useMemo, useState } from "react";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { Hero } from "./sections/Hero.jsx";
import { About } from "./sections/About.jsx";
import { Skills } from "./sections/Skills.jsx";
import { Projects } from "./sections/Projects.jsx";
import { Experience } from "./sections/Experience.jsx";
import { Education } from "./sections/Education.jsx";
import { Contact } from "./sections/Contact.jsx";
import { useActiveSection } from "./utils/useActiveSection.js";
import { profile } from "./data/socials.js";

const THEME_KEY = "portfolio-theme";

export default function App() {
  const sectionIds = useMemo(
    () => ["hero", "about", "skills", "projects", "experience", "education", "contact"],
    []
  );

  const activeId = useActiveSection(sectionIds);

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem(THEME_KEY);
    return saved === "light" || saved === "dark" ? saved : "dark";
  });

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);

    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
      document.body.classList.remove("bg-white", "text-black");
      document.body.classList.add("bg-black", "text-white");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
      document.body.classList.remove("bg-black", "text-white");
      document.body.classList.add("bg-white", "text-black");
    }

    // Simple SEO
    document.title = `${profile.name} — Software Engineer Portfolio`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", `${profile.name} • ${profile.roleTarget} • Portfolio`);
  }, [theme]);

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="min-h-screen bg-premium">
      <div className="noise" aria-hidden="true" />

      <Navbar
        activeId={activeId}
        onNav={scrollToId}
        theme={theme}
        setTheme={setTheme}
      />

      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* <Experience /> */}
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}