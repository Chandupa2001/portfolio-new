import React, { useState } from "react";
import { Icon } from "./Icon.jsx";

export function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // If clipboard blocked, do nothing silently (still accessible via selecting)
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      aria-label="Copy email to clipboard"
    >
      <Icon name={copied ? "check" : "copy"} className="h-5 w-5" />
      <span>{copied ? "Copied" : "Copy email"}</span>
    </button>
  );
}