"use client";

import Link from "next/link";
import Image from "next/image";
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
  src,
  comingSoon,
}: {
  title: string;
  tagline: string;
  href: string;
  src: string;
  comingSoon?: boolean;
}) {
  return (
    <motion.div variants={fadeUp}>
      <Link
        href={href}
        className="group block bg-white border-2 border-pink/50 rounded-lg overflow-hidden hover:border-pink hover:shadow-[0_12px_30px_-12px_rgba(246,210,216,0.9)] transition-all duration-300"
      >
        <div className="h-1.5 w-full bg-pink/70 group-hover:bg-pink transition-colors" />
        <div className="flex justify-center mt-6">
          <Image
            src={src}
            alt={`${title} book cover`}
            width={200}
            height={300}
            className="rounded shadow-sm"
          />
        </div>
        <div className="p-6 text-center">
          <h3 className="font-serif text-lg font-bold text-navy mb-1">{title}</h3>
          <p className="text-sm text-navy/60 font-sans mb-4 italic">{tagline}</p>
          {comingSoon ? (
            <span className="inline-block px-4 py-1.5 bg-pink/40 border border-pink text-xs tracking-widest uppercase text-navy/70 rounded">
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
      <section
        className="relative w-full min-h-[64vh] sm:min-h-[72vh] md:min-h-[80vh] flex items-center justify-center px-6 py-24 overflow-hidden bg-cream"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "480px 480px",
        }}
      >
        <motion.div
          className="relative z-10 max-w-2xl mx-auto rounded-[28px] border border-pink/50 bg-gradient-to-br from-white via-white to-pink/20 shadow-[0_1px_2px_rgba(26,39,68,0.05),0_10px_28px_-10px_rgba(26,39,68,0.18),0_28px_60px_-28px_rgba(26,39,68,0.28)]"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <div className="m-3 rounded-[20px] border border-navy/10 text-center px-8 py-12 md:px-16 md:py-16">
            <motion.p
              variants={fadeUp}
              className="text-xs tracking-[0.3em] uppercase text-navy/70 font-sans font-semibold mb-6 text-shadow-2xs"
            >
              Faith · Identity · Healing · Restoration
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-5xl md:text-7xl font-black text-navy leading-tight mb-5 text-shadow-sm"
            >
              Tamara Wilder
            </motion.h1>
            <motion.div
              variants={fadeUp}
              aria-hidden="true"
              className="flex items-center justify-center gap-3 mb-5"
            >
              <span className="h-px w-10 bg-pink/70" />
              <span className="block w-2 h-2 rotate-45 bg-pink" />
              <span className="h-px w-10 bg-pink/70" />
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-sm md:text-base tracking-[0.3em] uppercase text-navy font-sans font-bold mb-8 text-shadow-2xs"
            >
              Speaker · Coach · Teacher
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="font-serif text-xl md:text-2xl text-navy font-semibold italic mb-10 leading-relaxed text-shadow-2xs"
            >
              Writing the stories that faith writes on the heart. Stories of
              restoration, identity, and becoming who God says you are.
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
                className="px-8 py-3.5 border border-navy text-navy text-sm tracking-widest uppercase font-sans rounded hover:bg-pink/30 transition-colors"
              >
                About Tamara
              </Link>
            </motion.div>
            <motion.div
              variants={fadeUp}
              aria-hidden="true"
              className="flex items-center justify-center gap-3 mt-10"
            >
              <span className="h-px w-8 bg-pink/40" />
              <span className="block w-1.5 h-1.5 rotate-45 bg-pink/50" />
              <span className="h-px w-8 bg-pink/40" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 bg-pink/15">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-12 h-0.5 bg-pink mx-auto mb-8" />
          <p className="font-sans text-navy/80 text-lg leading-relaxed">
            Tamara Wilder is a writer, mentor, and faith-driven leader whose
            words invite readers into the sacred space of healing and
            transformation. Through fiction and poetry, she explores what it
            means to walk in obedience, discover your God-given identity, and
            trust the process of becoming.
          </p>
          <p className="font-serif italic text-navy/60 mt-6">
            Grace is already writing your next chapter.
          </p>
          <div className="w-12 h-0.5 bg-pink mx-auto mt-8" />
        </motion.div>
      </section>

      {/* Inspirational pull-quote */}
      <section className="py-16 px-6 bg-pink/40">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-navy/50 font-sans mb-5">
            A Word of Encouragement
          </p>
          <p className="font-serif text-2xl md:text-3xl italic text-navy leading-relaxed">
            &ldquo;Healing isn&apos;t a destination — it&apos;s a daily
            becoming. One day, one prayer, one step of faith at a
            time.&rdquo;
          </p>
          <div className="w-10 h-0.5 bg-navy/30 mx-auto mt-8" />
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <BookPreviewCard
              title="Becoming"
              tagline="A Journey of Faith and Restoration"
              href="/books"
              src="/becoming.png"
            />
            <BookPreviewCard
              title="Becoming: The Workbook"
              tagline="A Journey of Faith and Restoration"
              href="/books"
              src="/workbook.png"
            />
            <BookPreviewCard
              title="Letters to My Father"
              tagline="From the Daughter of the King of Kings"
              href="/books"
              src="/letters.png"
              comingSoon
            />
            <BookPreviewCard
              title="Faith Focus Flow: 365 Day Devotional"
              tagline="Coming July 31, 2025"
              href="/books"
              src="/devotional.png"
              comingSoon
            />
            <BookPreviewCard
              title="Faith Focus Flow Journal"
              tagline="Coming July 31, 2025"
              href="/books"
              src="/journal.png"
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

      {/* Uplifting tagline strip */}
      <section className="py-14 px-6 bg-navy">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-serif text-xl md:text-2xl italic text-pink leading-relaxed">
            You are not behind. You are exactly where grace is meeting you.
          </p>
        </motion.div>
      </section>

      {/* Email CTA */}
      <section className="relative py-20 px-6 bg-pink/30">
        <motion.div
          className="max-w-xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-12 h-0.5 bg-pink mx-auto mb-6" />
          <p className="text-xs tracking-[0.25em] uppercase text-navy/50 font-sans mb-4">
            Stay Connected
          </p>
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">
            You&apos;re Invited to Keep Becoming
          </h2>
          <p className="text-navy/60 font-sans mb-8 leading-relaxed">
            Receive updates on new releases, behind-the-scenes reflections, and
            encouragement delivered straight to your inbox — a little light
            for the journey, every time we write.
          </p>
          <EmailSignup label="" placeholder="Enter your email address" />
        </motion.div>
      </section>
    </>
  );
}
