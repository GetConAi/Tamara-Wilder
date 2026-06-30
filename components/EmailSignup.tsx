"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface EmailSignupProps {
  label?: string;
  buttonText?: string;
  placeholder?: string;
}

export default function EmailSignup({
  label = "Join the list — be the first to know about new releases, essays, and events.",
  buttonText = "Subscribe",
  placeholder = "Your email address",
}: EmailSignupProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire to email service (Mailchimp, ConvertKit, etc.)
    console.log("[EmailSignup] Submitted:", email);
    setSubmitted(true);
    setEmail("");
  }

  return (
    <div className="w-full">
      {label && (
        <p className="text-sm text-navy/70 mb-3 font-sans">{label}</p>
      )}
      {submitted ? (
        <motion.p
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-navy font-semibold font-sans"
        >
          Thank you! You&apos;re on the list.
        </motion.p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className="flex-1 px-4 py-3 border border-navy/30 rounded text-sm font-sans text-navy placeholder-navy/40 focus:outline-none focus:border-navy transition-colors"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-navy text-white text-sm tracking-widest uppercase font-sans rounded hover:bg-navy-light transition-colors"
          >
            {buttonText}
          </button>
        </form>
      )}
    </div>
  );
}
