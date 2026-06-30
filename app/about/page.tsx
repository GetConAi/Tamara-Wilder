"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-cream py-16 px-6 text-center border-b border-navy/10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-navy/50 font-sans mb-4">
            About
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy">
            Meet the Author
          </h1>
        </motion.div>
      </section>

      {/* Bio section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Author photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-[320px] aspect-square rounded-full overflow-hidden shadow-md border border-navy/10">
              <Image
                src="/author.jpg"
                alt="Tamara Wilder, author"
                width={320}
                height={320}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-10 h-0.5 bg-navy/20 mb-8" />
            <h2 className="font-serif text-3xl font-bold text-navy mb-6">
              Tamara Wilder
            </h2>
            <p className="font-sans text-navy/70 text-lg leading-relaxed mb-6">
              Tamara Wilder is a writer, mentor, and faith-driven leader with a
              passion for restoration and spiritual growth. Her work is shaped
              by years of leadership, lived experience, and a deep belief in
              God&apos;s ability to heal, restore, and transform.
            </p>
            <p className="font-sans text-navy/70 leading-relaxed mb-6">
              Through her writing — both fiction and poetry — Tamara creates
              space for readers to encounter the living God in the ordinary
              moments of life: in the grief, the surrender, the quiet mornings,
              and the unexpected breakthroughs. Her voice is honest, warm, and
              deeply rooted in Scripture.
            </p>
            <p className="font-sans text-navy/70 leading-relaxed mb-10">
              When she is not writing, Tamara is pouring into the lives of
              those around her, leading with compassion, and championing others
              toward the fullness of who God has called them to be.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/books"
                className="px-6 py-3 bg-navy text-white text-sm tracking-widest uppercase font-sans rounded hover:bg-navy-light transition-colors"
              >
                Read the Books
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-navy text-navy text-sm tracking-widest uppercase font-sans rounded hover:bg-navy/5 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values / themes banner */}
      <section className="py-16 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {["Faith", "Identity", "Healing", "Restoration"].map((theme) => (
              <div key={theme}>
                <div className="w-8 h-0.5 bg-navy/20 mx-auto mb-4" />
                <p className="font-serif text-navy font-semibold text-lg">
                  {theme}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
