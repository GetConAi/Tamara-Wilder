"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import EmailSignup from "@/components/EmailSignup";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function BooksPage() {
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
            The Books
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
            Written by Faith
          </h1>
          <p className="font-serif italic text-navy/60">
            Stories and tools for the journey of becoming whole.
          </p>
        </motion.div>
      </section>

      {/* Becoming */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex justify-center">
            <Image
              src="/becoming.png"
              alt="Becoming: A Journey of Faith and Restoration — book cover"
              width={240}
              height={360}
              className="rounded shadow-md"
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <p className="text-xs tracking-[0.25em] uppercase text-navy/50 font-sans mb-3">
              Novel
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-2">
              Becoming
            </h2>
            <p className="font-serif text-lg italic text-navy/60 mb-6">
              A Journey of Faith and Restoration
            </p>
            <div className="w-10 h-0.5 bg-pink mb-6" />
            <p className="font-sans text-navy/70 leading-relaxed mb-4">
              <em>Becoming</em> is a faith-centered novel that follows one
              woman&apos;s courageous journey through loss, surrender, and
              unexpected grace. When everything she thought defined her is
              stripped away, she discovers that obedience is the doorway to
              restoration — and that the life God has planned is far greater
              than the one she had mapped out.
            </p>
            <p className="font-sans text-navy/70 leading-relaxed mb-8">
              Rooted in themes of identity, purpose, and the redemptive power
              of faith, this novel is for anyone who has ever had to let go of
              who they were in order to become who God created them to be.
            </p>
            <a
              href="https://www.amazon.com/dp/B0GH9YD8G7?ref_=cm_sw_r_ffobk_cp_ud_dp_1B93KC3WS80BK1YXSGSA&bestFormat=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 bg-navy text-white text-sm tracking-widest uppercase font-sans rounded hover:bg-navy-light transition-colors"
            >
              Buy on Amazon
            </a>
          </motion.div>
        </motion.div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-pink/50" />
      </div>

      {/* Becoming: The Workbook */}
      <section className="py-20 px-6 bg-pink/15">
        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex justify-center md:order-2">
            <Image
              src="/workbook.png"
              alt="Becoming: The Workbook — A Journey of Faith and Restoration — book cover"
              width={240}
              height={360}
              className="rounded shadow-md"
            />
          </motion.div>
          <motion.div variants={fadeUp} className="md:order-1">
            <p className="text-xs tracking-[0.25em] uppercase text-navy/50 font-sans mb-3">
              Companion Workbook
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-2">
              Becoming: The Workbook
            </h2>
            <p className="font-serif text-lg italic text-navy/60 mb-2">
              A Journey of Faith and Restoration
            </p>
            <span className="inline-block px-3 py-1 bg-pink/60 text-navy/80 text-xs tracking-widest uppercase font-sans rounded mb-6">
              Available Now
            </span>
            <div className="w-10 h-0.5 bg-pink mb-6" />
            <p className="font-sans text-navy/70 leading-relaxed mb-8">
              A companion workbook to the novel <em>Becoming</em> — guided
              reflection, scripture, and prompts to help readers walk through
              their own journey of faith, identity, and restoration.
            </p>
            <a
              href="mailto:Tamara@tamarawilder.com?subject=Becoming%20Workbook%20Order&body=Hi%20Tamara%2C%20I'd%20like%20to%20order%20a%20copy%20of%20the%20Becoming%20Workbook."
              className="inline-block px-8 py-3.5 bg-pink text-navy font-semibold text-sm tracking-widest uppercase font-sans rounded hover:bg-pink/80 transition-colors"
            >
              Order the Workbook
            </a>
          </motion.div>
        </motion.div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-pink/50" />
      </div>

      {/* Letters to My Father */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex justify-center md:order-2">
            <Image
              src="/letters.png"
              alt="Letters to My Father: From the Daughter of the King of Kings — book cover"
              width={240}
              height={360}
              className="rounded shadow-md"
            />
          </motion.div>
          <motion.div variants={fadeUp} className="md:order-1">
            <p className="text-xs tracking-[0.25em] uppercase text-navy/50 font-sans mb-3">
              Poetry Collection
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-2">
              Letters to My Father
            </h2>
            <p className="font-serif text-lg italic text-navy/60 mb-2">
              From the Daughter of the King of Kings
            </p>
            <span className="inline-block px-3 py-1 bg-pink/50 text-navy/80 text-xs tracking-widest uppercase font-sans rounded mb-6">
              Coming Soon
            </span>
            <div className="w-10 h-0.5 bg-pink mb-6" />
            <p className="font-sans text-navy/70 leading-relaxed mb-4">
              <em>Letters to My Father</em> is an intimate collection of poetry
              written as correspondence from a daughter to her Heavenly Father.
              Each poem is a prayer, a confession, or a celebration — exploring
              the full arc of the believer&apos;s journey through healing,
              worship, grief, grace, and belonging.
            </p>
            <p className="font-sans text-navy/70 leading-relaxed mb-8">
              With themes of identity, restoration, and the tender mercy of God,
              this collection speaks to the heart that longs to be known,
              named, and loved by its Maker.
            </p>

            {/* Email signup for launch notification */}
            <div className="bg-pink/15 border border-pink/50 rounded-lg p-6">
              <p className="font-serif text-navy font-semibold mb-2">
                Be the first to know when it launches
              </p>
              <EmailSignup
                label="Join the list and get notified when Letters to My Father is available."
                buttonText="Notify Me"
                placeholder="Your email address"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Pull-quote */}
      <section className="py-14 px-6 bg-pink/40">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-serif text-xl md:text-2xl italic text-navy leading-relaxed">
            &ldquo;Every story of restoration starts with a single brave
            step.&rdquo;
          </p>
        </motion.div>
      </section>

      {/* Faith Focus Flow: 365 Day Devotional */}
      <section className="py-20 px-6 bg-pink/15">
        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex justify-center">
            <Image
              src="/devotional.png"
              alt="Faith Focus Flow: 365 Day Devotional — book cover"
              width={240}
              height={360}
              className="rounded shadow-md"
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <p className="text-xs tracking-[0.25em] uppercase text-navy/50 font-sans mb-3">
              Devotional
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-2">
              Faith Focus Flow: 365 Day Devotional
            </h2>
            <span className="inline-block px-3 py-1 bg-pink/50 text-navy/80 text-xs tracking-widest uppercase font-sans rounded mb-6">
              Coming July 31, 2025
            </span>
            <div className="w-10 h-0.5 bg-pink mb-6" />
            <p className="font-sans text-navy/70 leading-relaxed mb-8">
              A 365-day devotional designed to help you live aligned, grounded,
              and whole — one intentional day at a time. Through scripture,
              reflection, and prayer, it invites you into a gentle rhythm of
              faith, clarity, restoration, and growth. A devotional journey of
              grace, growth, and becoming whole.
            </p>

            {/* Email signup for launch notification */}
            <div className="bg-pink/15 border border-pink/50 rounded-lg p-6">
              <p className="font-serif text-navy font-semibold mb-2">
                Be the first to know when it launches
              </p>
              <EmailSignup
                label="Join the list and get notified when Faith Focus Flow: 365 Day Devotional is available."
                buttonText="Notify Me"
                placeholder="Your email address"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-pink/50" />
      </div>

      {/* Faith Focus Flow Journal */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex justify-center md:order-2">
            <Image
              src="/journal.png"
              alt="Faith Focus Flow Journal — book cover"
              width={240}
              height={360}
              className="rounded shadow-md"
            />
          </motion.div>
          <motion.div variants={fadeUp} className="md:order-1">
            <p className="text-xs tracking-[0.25em] uppercase text-navy/50 font-sans mb-3">
              Journal
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-2">
              Faith Focus Flow Journal
            </h2>
            <span className="inline-block px-3 py-1 bg-pink/50 text-navy/80 text-xs tracking-widest uppercase font-sans rounded mb-6">
              Coming July 31, 2025
            </span>
            <div className="w-10 h-0.5 bg-pink mb-6" />
            <p className="font-sans text-navy/70 leading-relaxed mb-8">
              A companion scripture journal to the Faith Focus Flow devotional
              — space for reflection, prayer, and writing alongside your daily
              reading.
            </p>

            {/* Email signup for launch notification */}
            <div className="bg-pink/15 border border-pink/50 rounded-lg p-6">
              <p className="font-serif text-navy font-semibold mb-2">
                Be the first to know when it launches
              </p>
              <EmailSignup
                label="Join the list and get notified when Faith Focus Flow Journal is available."
                buttonText="Notify Me"
                placeholder="Your email address"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
