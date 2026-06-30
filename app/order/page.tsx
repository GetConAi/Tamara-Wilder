"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mpqgjvzz";

type Status = "idle" | "submitting" | "success" | "error";

export default function OrderPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    quantity: "1",
    notes: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: "Becoming Workbook Order",
          name: form.name,
          email: form.email,
          address: form.address,
          quantity: form.quantity,
          notes: form.notes,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", address: "", quantity: "1", notes: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-b from-pink/35 via-cream to-cream py-16 px-6 text-center border-b border-pink/40">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-navy/50 font-sans mb-4">
            Becoming: The Workbook
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
            Order the Workbook
          </h1>
          <p className="font-serif italic text-navy/60">
            Shipped privately by Tamara — not sold through Amazon or other
            retailers.
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: book info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center md:justify-start mb-8">
              <Image
                src="/workbook.png"
                alt="Becoming: The Workbook — A Journey of Faith and Restoration — book cover"
                width={240}
                height={360}
                className="rounded shadow-md"
              />
            </div>
            <div className="w-10 h-0.5 bg-pink mb-6" />
            <h2 className="font-serif text-2xl font-bold text-navy mb-2">
              Becoming: The Workbook
            </h2>
            <p className="font-serif italic text-navy/60 mb-6">
              A Journey of Faith and Restoration
            </p>
            <p className="font-sans text-navy/70 leading-relaxed">
              A companion workbook to the novel <em>Becoming</em> — guided
              reflection, scripture, and prompts to help readers walk through
              their own journey of faith, identity, and restoration. Fill out
              the form and Tamara will follow up directly about payment and
              shipping.
            </p>
          </motion.div>

          {/* Right: order form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="h-full flex flex-col items-center justify-center text-center py-12 bg-pink/10 border border-pink/40 rounded-lg px-8"
              >
                <div className="w-10 h-0.5 bg-pink mx-auto mb-6" />
                <h3 className="font-serif text-2xl font-bold text-navy mb-3">
                  Order Received
                </h3>
                <p className="font-sans text-navy/60">
                  Thank you! Your order has been received. Tamara will be in
                  touch soon about payment and shipping.
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
                    htmlFor="address"
                    className="block text-xs tracking-widest uppercase text-navy/50 font-sans mb-1.5"
                  >
                    Shipping Address
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    rows={4}
                    required
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Street address, city, state, ZIP"
                    className="w-full px-4 py-3 border border-navy/20 rounded text-sm font-sans text-navy placeholder-navy/30 focus:outline-none focus:border-navy transition-colors resize-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="quantity"
                    className="block text-xs tracking-widest uppercase text-navy/50 font-sans mb-1.5"
                  >
                    Quantity
                  </label>
                  <input
                    id="quantity"
                    name="quantity"
                    type="number"
                    min={1}
                    required
                    value={form.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-navy/20 rounded text-sm font-sans text-navy placeholder-navy/30 focus:outline-none focus:border-navy transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="notes"
                    className="block text-xs tracking-widest uppercase text-navy/50 font-sans mb-1.5"
                  >
                    Notes <span className="normal-case text-navy/30">(optional)</span>
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    value={form.notes}
                    onChange={handleChange}
                    placeholder="Anything else Tamara should know..."
                    className="w-full px-4 py-3 border border-navy/20 rounded text-sm font-sans text-navy placeholder-navy/30 focus:outline-none focus:border-navy transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm font-sans text-red-700 bg-red-50 border border-red-200 rounded px-4 py-3">
                    Something went wrong submitting your order. Please try
                    again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full px-8 py-3.5 bg-navy text-white text-sm tracking-widest uppercase font-sans rounded hover:bg-navy-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Submitting..." : "Submit Order"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
