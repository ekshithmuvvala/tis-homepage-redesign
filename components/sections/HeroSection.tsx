'use client';

import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Play,
} from 'lucide-react';

import Link from 'next/link';

import ScrollReveal from '../animation/ScrollReveal';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#f6f3eb] px-5 pb-16 pt-32 text-ink dark:bg-[#101715] dark:text-white sm:px-8 lg:px-12"
    >
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-brand-200/50 blur-3xl dark:bg-brand-900/20"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute bottom-20 -left-40 h-[400px] w-[400px] rounded-full bg-brand-100/60 blur-3xl dark:bg-brand-800/20"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Small top label */}
        <ScrollReveal>
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-brand-500" />

            <p className="text-xs font-bold uppercase tracking-[0.24em] text-ink/60 dark:text-white/60">
              Tulas International School
            </p>
          </div>
        </ScrollReveal>

        <div className="grid items-end gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* Left content */}
          <div>

            <ScrollReveal delay={0.05}>
              <h1 className="max-w-5xl font-display text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.055em]">
                Learning
                <br />

                <span className="text-brand-600 dark:text-brand-400">
                  beyond
                </span>

                <br />

                boundaries.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="mt-8 max-w-xl text-base leading-7 text-ink/60 dark:text-white/60 sm:text-lg">
                A forward-thinking learning environment
                where curiosity, confidence and character
                come together to prepare students for a
                changing world.
              </p>
            </ScrollReveal>

            {/* CTA buttons */}
            <ScrollReveal delay={0.25}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <Link
                  href="#admissions"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-brand-700 dark:bg-white dark:text-ink dark:hover:bg-brand-100"
                  data-cursor="interactive"
                >
                  Explore Admissions

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <Link
                  href="#about"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/50 px-6 py-4 text-sm font-bold transition duration-300 hover:-translate-y-1 hover:border-brand-500 dark:border-white/15 dark:bg-white/5"
                  data-cursor="interactive"
                >
                  Discover TIS
                </Link>

              </div>
            </ScrollReveal>

            {/* Mini information row */}
            <ScrollReveal delay={0.35}>
              <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-ink/10 py-5 dark:border-white/10">

                <div>
                  <p className="font-display text-2xl font-semibold">
                    22
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-ink/45 dark:text-white/45">
                    Acre campus
                  </p>
                </div>

                <div className="border-l border-ink/10 pl-5 dark:border-white/10">
                  <p className="font-display text-2xl font-semibold">
                    16+
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-ink/45 dark:text-white/45">
                    Activities
                  </p>
                </div>

                <div className="border-l border-ink/10 pl-5 dark:border-white/10">
                  <p className="font-display text-2xl font-semibold">
                    6:1
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-ink/45 dark:text-white/45">
                    Learning ratio
                  </p>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Right visual */}
          <ScrollReveal
            delay={0.2}
            className="relative"
          >
            <div className="relative mx-auto max-w-xl">

              {/* Image */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.94,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-ink shadow-2xl sm:rounded-[2.5rem]"
              >
                <img
  src="/images/hero-campus.png"
  alt="Students learning together at Tulas International School"
  className="h-full w-full object-cover transition duration-700 hover:scale-105"
/>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-300">
                    A place to grow
                  </p>

                  <p className="mt-2 max-w-sm font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">
                    Curiosity today.
                    <br />
                    Confidence tomorrow.
                  </p>
                </div>
              </motion.div>

              {/* Floating card */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 30,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.5,
                }}
                className="absolute -bottom-5 -left-5 max-w-[220px] rounded-3xl border border-white/30 bg-white/90 p-4 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-ink/90 sm:-left-8 sm:p-5"
              >
                <div className="mb-3 grid h-9 w-9 place-items-center rounded-full bg-brand-500 text-white">
                  <Play
                    size={14}
                    fill="currentColor"
                  />
                </div>

                <p className="text-sm font-bold text-ink dark:text-white">
                  Experience TIS
                </p>

                <p className="mt-1 text-xs leading-5 text-ink/55 dark:text-white/55">
                  Discover a learning journey
                  built around every student.
                </p>
              </motion.div>

              {/* Rotating badge */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -right-5 -top-5 grid h-24 w-24 rounded-full border border-brand-500/40 bg-brand-500 p-2 text-white shadow-lg sm:-right-8 sm:-top-8 sm:h-28 sm:w-28"
              >
                <div className="grid place-items-center rounded-full border border-white/30 text-center">
                  <span className="text-[9px] font-bold uppercase tracking-[0.14em]">
                    Learn
                    <br />
                    Grow
                    <br />
                    Lead
                  </span>
                </div>
              </motion.div>

            </div>
          </ScrollReveal>

        </div>

        {/* Scroll prompt */}
        <ScrollReveal delay={0.45}>
          <div className="mt-16 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-ink/40 dark:text-white/40">
            <span>Scroll to explore</span>

            <motion.span
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <ArrowDown size={15} />
            </motion.span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}