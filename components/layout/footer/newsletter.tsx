// components/layout/footer/newsletter.tsx
"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-bold text-text font-display">Newsletter</p>
      <p className="text-sm text-text-3 leading-relaxed">
        Get exclusive deals and updates delivered to your inbox
      </p>
      {submitted ? (
        <div className="flex items-center gap-2 text-sm font-medium text-green-brand">
          <span>✅</span> Subscribed! Welcome to Zenvy 🎉
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className={cn(
              "w-full px-4 py-2.5 rounded-xl text-sm",
              "bg-surface border border-border",
              "text-text placeholder:text-text-3",
              "outline-none focus:border-brand focus:shadow-focus",
              "transition-all duration-200"
            )}
          />
          <button
            type="submit"
            className={cn(
              "flex items-center justify-center gap-2 w-full px-4 py-2.5",
              "bg-[linear-gradient(135deg,#0B2E33,#93B1B5)] from-brand to-mid",
              "text-white text-sm font-semibold rounded-xl",
              "hover:-translate-y-0.5 hover:shadow-brand",
              "transition-all duration-200"
            )}
          >
            <Send size={14} />
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}