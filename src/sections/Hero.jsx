import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/Button.jsx";
import { Icon } from "../components/Icon.jsx";
import { profile, socials } from "../data/socials.js";
import { useMotionPrefs } from "../utils/motion.js";
import avatarImg from "../assets/me.jpeg";
import { Card } from "../components/Card.jsx";

export function Hero() {
  const m = useMotionPrefs();

  return (
    <section id="hero" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-16 sm:pt-20 pb-14 sm:pb-16">
        <div className="relative">
          {/* floating orb */}
          <div
            className="pointer-events-none absolute -top-12 right-0 h-44 w-44 sm:h-56 sm:w-56 rounded-full bg-accent/20 blur-3xl animate-floaty"
            aria-hidden="true"
          />

          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left */}
            <div className="lg:col-span-7">
              <motion.div {...m.fadeIn(0.05)}>
                <p className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-3 py-1 text-xs text-black/70 dark:text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />
                  Available for {profile.roleTarget}
                </p>
              </motion.div>

              <motion.h1
                className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-black dark:text-white"
                initial={m.reduced ? false : { opacity: 0, y: 10 }}
                animate={m.reduced ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
              >
                Hi, I'm {profile.name}
              </motion.h1>

              <motion.p
                className="mt-4 max-w-2xl text-sm sm:text-base text-black/70 dark:text-white/70"
                initial={m.reduced ? false : { opacity: 0, y: 10 }}
                animate={m.reduced ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
              >
                Final-year Computing & Information Systems undergraduate |
                Software Engineer
              </motion.p>

              <motion.p
                className="mt-3 max-w-2xl text-xs sm:text-sm text-black/60 dark:text-white/70"
                initial={m.reduced ? false : { opacity: 0, y: 10 }}
                animate={m.reduced ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
              >
                Passionate about crafting scalable, high-quality web and mobile
                solutions that solve real-world problems.
              </motion.p>

              <motion.div
                className="mt-7 flex flex-wrap items-center gap-3"
                initial={m.reduced ? false : { opacity: 0, y: 10 }}
                animate={m.reduced ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.24 }}
              >
                <Button
                  href={profile.cvPath}
                  variant="primary"
                  aria-label="Download CV"
                  download
                >
                  Download CV <Icon name="arrow" className="h-5 w-5" />
                </Button>
                <Button
                  href="#contact"
                  variant="secondary"
                  aria-label="Go to contact section"
                >
                  Contact
                </Button>
              </motion.div>

              {/* Social icons */}
              <motion.div
                className="mt-6 flex items-center gap-3"
                initial={m.reduced ? false : { opacity: 0, y: 10 }}
                animate={m.reduced ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              >
                <a
                  href={socials.find((s) => s.label === "GitHub")?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/20 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>

                <a
                  href={socials.find((s) => s.label === "LinkedIn")?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/20 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="mt-10 grid grid-cols-3 gap-3"
                {...m.fadeUp(0.1)}
              >
                <Card className="p-4">
                  <p className="text-xs text-black/60 dark:text-white/60">
                    Internship
                  </p>
                  <p className="mt-1 text-sm font-semibold text-black dark:text-white">
                    1 Year Completed
                  </p>
                </Card>
                <Card className="p-4">
                  <p className="text-xs text-black/60 dark:text-white/60">
                    Projects
                  </p>
                  <p className="mt-1 text-sm font-semibold text-black dark:text-white">
                    4–6
                  </p>
                </Card>
                <Card className="p-4">
                  <p className="text-xs text-black/60 dark:text-white/60">
                    Tech stack
                  </p>
                  <p className="mt-1 text-sm font-semibold text-black dark:text-white">
                    MERN + React Native
                  </p>
                </Card>
              </motion.div>
            </div>

            {/* Right — circle image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <motion.div {...m.fadeUp(0.15)}>
                <div className="relative flex items-center justify-center">
                  <div className="absolute h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-accent/20 blur-2xl" />
                  <div className="absolute h-76 w-76 sm:h-88 sm:w-88 rounded-full border border-dashed border-black/20 dark:border-white/20" />
                  <div className="relative h-68 w-68 sm:h-80 sm:w-80 rounded-full overflow-hidden border-2 border-black/10 dark:border-white/10 shadow-xl">
                    <img
                      src={avatarImg}
                      alt={`${profile.name} profile photo`}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
