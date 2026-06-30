"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire to a backend or form service
    console.log("[ContactForm] Submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-b from-pink/25 via-cream to-cream py-16 px-6 text-center border-b border-pink/30">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-navy/50 font-sans mb-4">
            Contact
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy">
            Get in Touch
          </h1>
        </motion.div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-10 h-0.5 bg-pink mb-8" />
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">
              Let&apos;s Connect
            </h2>
            <p className="font-sans text-navy/70 leading-relaxed mb-8">
              Whether you&apos;d like to share how a book impacted your life,
              explore speaking opportunities, or simply reach out — Tamara
              would love to hear from you.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-navy/40 font-sans mb-1">
                  Social
                </p>
                <ul className="space-y-1">
                  {[
                    { label: "Instagram", href: "#" },
                    { label: "Facebook", href: "#" },
                  ].map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        className="font-sans text-navy/70 hover:text-navy transition-colors underline underline-offset-4"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-navy/40 font-sans mb-1">
                  For Inquiries
                </p>
                <p className="font-sans text-navy/70">
                  Use the form to reach out directly.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-10 h-0.5 bg-pink mx-auto mb-6" />
                <h3 className="font-serif text-2xl font-bold text-navy mb-3">
                  Message Received
                </h3>
                <p className="font-sans text-navy/60">
                  Thank you for reaching out. Tamara will be in touch soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs tracking-widest uppercase text-navy/50 font-sans mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-navy/20 rounded text-sm font-sans text-navy placeholder-navy/30 focus:outline-none focus:border-navy transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs tracking-widest uppercase text-navy/50 font-sans mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-navy/20 rounded text-sm font-sans text-navy placeholder-navy/30 focus:outline-none focus:border-navy transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs tracking-widest uppercase text-navy/50 font-sans mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    className="w-full px-4 py-3 border border-navy/20 rounded text-sm font-sans text-navy placeholder-navy/30 focus:outline-none focus:border-navy transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3.5 bg-navy text-white text-sm tracking-widest uppercase font-sans rounded hover:bg-navy-light transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
