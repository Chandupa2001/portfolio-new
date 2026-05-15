import React, { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Section } from "../components/Section.jsx";
import { Card } from "../components/Card.jsx";
import { Button } from "../components/Button.jsx";
import { CopyButton } from "../components/CopyButton.jsx";
import { useMotionPrefs } from "../utils/motion.js";
import { profile, socials } from "../data/socials.js";

const EMAILJS_SERVICE_ID  = "service_19i742b";
const EMAILJS_TEMPLATE_ID = "template_8onxnlo";
const EMAILJS_PUBLIC_KEY  = "p_KvgMqcQhF-Jcdge";

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Please enter a valid email.";
  if (!values.message.trim()) errors.message = "Please enter a message.";
  if (values.message.trim().length < 10) errors.message = "Message should be at least 10 characters.";
  return errors;
}

const inputClass =
  "mt-2 w-full rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 " +
  "text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/40 " +
  "px-4 py-2.5 text-sm outline-none transition " +
  "focus:border-accent/50 focus:ring-2 focus:ring-accent/20";

export function Contact() {
  const m = useMotionPrefs();
  const formRef = useRef(null);

  const [values, setValues]   = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({});
  const [status, setStatus]   = useState("idle"); // idle | sending | success | error

  const errors    = useMemo(() => validate(values), [values]);
  const canSubmit = Object.keys(errors).length === 0 && status !== "sending";

  function onChange(e) {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  }

  function onBlur(e) {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!canSubmit) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setValues({ name: "", email: "", message: "" });
      setTouched({});
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  }

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Let's build something clean, fast, and valuable."
    >
      <div className="grid gap-6 lg:grid-cols-12">

        {/* Left — reach me */}
        <motion.div className="lg:col-span-5" {...m.fadeUp(0.05)}>
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />
              <h3 className="text-xs font-semibold uppercase tracking-widest text-black/50 dark:text-white/50">
                Reach Me
              </h3>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black/50 dark:text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-black/40 dark:text-white/40 uppercase tracking-wider mb-0.5">Email</p>
                  <a href={`mailto:${profile.email}`} className="text-sm text-black/80 dark:text-white/80 hover:text-accent dark:hover:text-accent transition">
                    {profile.email}
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black/50 dark:text-white/50" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-black/40 dark:text-white/40 uppercase tracking-wider mb-0.5">LinkedIn</p>
                  <a href={socials.find(s => s.label === "LinkedIn")?.href} target="_blank" rel="noreferrer" className="text-sm text-black/80 dark:text-white/80 hover:text-accent dark:hover:text-accent transition">
                    {profile.linkedin}
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black/50 dark:text-white/50" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-black/40 dark:text-white/40 uppercase tracking-wider mb-0.5">GitHub</p>
                  <a href={socials.find(s => s.label === "GitHub")?.href} target="_blank" rel="noreferrer" className="text-sm text-black/80 dark:text-white/80 hover:text-accent dark:hover:text-accent transition">
                    {profile.github}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black/50 dark:text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-black/40 dark:text-white/40 uppercase tracking-wider mb-0.5">Location</p>
                  <p className="text-sm text-black/80 dark:text-white/80">{profile.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-black/10 dark:border-white/10 pt-5">
              <CopyButton text={profile.email} />
            </div>
          </Card>
        </motion.div>

        {/* Right — form */}
        <motion.div className="lg:col-span-7" {...m.fadeUp(0.09)}>
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />
              <h3 className="text-xs font-semibold uppercase tracking-widest text-black/50 dark:text-white/50">
                Send a Message
              </h3>
            </div>

            {/* Success banner */}
            {status === "success" && (
              <div className="mb-5 rounded-xl border border-green-500/20 bg-green-500/10 p-4" role="status">
                <p className="text-sm font-semibold text-green-600 dark:text-green-400">Message sent successfully!</p>
                <p className="mt-0.5 text-xs text-green-600/70 dark:text-green-400/70">
                  Thanks for reaching out — I'll get back to you soon.
                </p>
              </div>
            )}

            {/* Error banner */}
            {status === "error" && (
              <div className="mb-5 rounded-xl border border-red-500/20 bg-red-500/10 p-4" role="alert">
                <p className="text-sm font-semibold text-red-600 dark:text-red-400">Something went wrong.</p>
                <p className="mt-0.5 text-xs text-red-600/70 dark:text-red-400/70">
                  Please try again or email me directly.
                </p>
              </div>
            )}

            <form ref={formRef} className="grid gap-4" onSubmit={onSubmit} noValidate>
              {/* Name */}
              <div>
                <label className="text-sm font-semibold text-black dark:text-white" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  className={inputClass}
                  placeholder="Your name"
                  value={values.name}
                  onChange={onChange}
                  onBlur={onBlur}
                  aria-invalid={Boolean(touched.name && errors.name)}
                />
                {touched.name && errors.name && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-semibold text-black dark:text-white" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={inputClass}
                  placeholder="you@email.com"
                  value={values.email}
                  onChange={onChange}
                  onBlur={onBlur}
                  aria-invalid={Boolean(touched.email && errors.email)}
                />
                {touched.email && errors.email && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-semibold text-black dark:text-white" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={inputClass}
                  placeholder="Tell me about the role or project..."
                  value={values.message}
                  onChange={onChange}
                  onBlur={onBlur}
                  aria-invalid={Boolean(touched.message && errors.message)}
                />
                {touched.message && errors.message && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Button
                  as="button"
                  type="submit"
                  variant="primary"
                  disabled={!canSubmit}
                  aria-label="Send message"
                >
                  {status === "sending" ? (
                    <span className="flex items-center gap-2">
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                      Sending…
                    </span>
                  ) : "Send Message"}
                </Button>
                <Button
                  as="a"
                  href={`mailto:${profile.email}?subject=Portfolio%20Contact&body=${encodeURIComponent(
                    `Hi ${profile.name},\n\n${values.message}\n\nFrom,\n${values.name}\n${values.email}`
                  )}`}
                  variant="secondary"
                  aria-label="Open email client"
                >
                  Open in Email
                </Button>
              </div>
            </form>
          </Card>
        </motion.div>

      </div>
    </Section>
  );
}