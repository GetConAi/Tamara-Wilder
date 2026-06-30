"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import EmailSignup from "@/components/EmailSignup";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

function BookPreviewCard({
  title,
  tagline,
  href,
  comingSoon,
}: {
  title: string;
  tagline: string;
  href: string;
  comingSoon?: boolean;
}) {
  return (
    <motion.div variants={fadeUp}>
      <Link
        href={href}
        className="group block border border-navy/15 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
      >
        <div className="bg-navy/5 flex items-center justify-center aspect-[2/3] w-full max-w-[200px] mx-auto mt-6">
          <div className="text-center px-4">
            <div className="w-16 h-0.5 bg-navy/20 mx-auto mb-3" />
            <p className="font-serif text-navy/40 text-xs italic">Cover Image</p>
            <div className="w-16 h-0.5 bg-navy/20 mx-auto mt-3" />
          </div>
        </div>
        <div className="p-6 text-center">
          <h3 className="font-serif text-lg font-bold text-navy mb-1">{title}</h3>
          <p className="text-sm text-navy/60 font-sans mb-4 italic">{tagline}</p>
          {comingSoon ? (
            <span className="inline-block px-4 py-1.5 border border-navy/30 text-xs tracking-widest uppercase text-navy/60 rounded">
              Coming Soon
            </span>
          ) : (
            <span className="inline-block px-4 py-1.5 bg-navy text-white text-xs tracking-widest uppercase rounded group-hover:bg-navy-light transition-colors">
              Learn More
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-cream min-h-[85vh] flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-cream" />
        <motion.div
          className="relative z-10 max-w-3xl mx-auto text-center"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs tracking-[0.3em] uppercase text-navy/50 font-sans mb-6"
          >
            Faith · Identity · Healing · Restoration
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-serif text-5xl md:text-7xl font-bold text-navy leading-tight mb-6"
          >
            Tamara Wilder
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="font-serif text-xl md:text-2xl text-navy/70 italic mb-10 leading-relaxed"
          >
            Writing the stories that faith writes on the heart — of restoration,
            identity, and becoming who God says you are.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/books"
              className="px-8 py-3.5 bg-navy text-white text-sm tracking-widest uppercase font-sans rounded hover:bg-navy-light transition-colors"
            >
              Explore the Books
            </Link>
            <Link
              href="/about"
              className="px-8 py-3.5 border border-navy text-navy text-sm tracking-widest uppercase font-sans rounded hover:bg-navy/5 transition-colors"
            >
              About Tamara
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-12 h-0.5 bg-navy/30 mx-auto mb-8" />
          <p className="font-sans text-navy/80 text-lg leading-relaxed">
            Tamara Wilder is a writer, mentor, and faith-driven leader whose
            words invite readers into the sacred space of healing and
            transformation. Through fiction and poetry, she explores what it
            means to walk in obedience, discover your God-given identity, and
            trust the process of becoming.
          </p>
          <div className="w-12 h-0.5 bg-navy/30 mx-auto mt-8" />
        </motion.div>
      </section>

      {/* Book previews */}
      <section className="py-16 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs tracking-[0.25em] uppercase text-navy/50 font-sans mb-3">
              The Books
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy">
              Words Born from Faith
            </h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <BookPreviewCard
              title="Becoming"
              tagline="A Journey of Faith and Restoration"
              href="/books"
            />
            <BookPreviewCard
              title="Letters to My Father"
              tagline="From the Daughter of the King of Kings"
              href="/books"
              comingSoon
            />
          </motion.div>
          <div className="text-center mt-10">
            <Link
              href="/books"
              className="text-sm tracking-widest uppercase text-navy/60 hover:text-navy font-sans underline underline-offset-4 transition-colors"
            >
              View all books
            </Link>
          </div>
        </div>
      </section>

      {/* Email CTA */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.25em] uppercase text-navy/50 font-sans mb-4">
            Stay Connected
          </p>
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">
            Join the Community
          </h2>
          <p className="text-navy/60 font-sans mb-8 leading-relaxed">
            Receive updates on new releases, behind-the-scenes reflections, and
            encouragement delivered straight to your inbox.
          </p>
          <EmailSignup label="" placeholder="Enter your email address" />
        </motion.div>
      </section>
    </>
  );
}
