'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUpRightFromSquare, FaFileLines } from 'react-icons/fa6';
import { links } from '@/config';
import CinematicSmokeCanvas from './CinematicSmokeCanvas';
import TechStackStrip from './TechStackStrip';

const HangingIdCard = dynamic(() => import('@/components/band/App'), {
  ssr: false,
  loading: () => (
    <div className="relative flex h-[620px] w-full items-center justify-center">
      <div className="size-8 animate-spin rounded-full border-2 border-sky-400 border-t-transparent opacity-40" />
    </div>
  ),
});

const ROTATING_ROLES = [
  'ARTIFICIAL INTELLIGENCE',
  'MACHINE LEARNING',
  'DATA SCIENCE',
  'COMPUTER VISION',
  'RESEARCH & ENGINEERING',
];

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROTATING_ROLES.length);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-28 lg:pb-12"
    >
      {/* Volumetric Interactive Smoke & Atmospheric Fog Canvas */}
      <CinematicSmokeCanvas />

      {/* Dark Lunar / Cosmic Horizon Silhouette at base */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 h-44 bg-gradient-to-t from-black via-black/80 to-transparent"
      />

      {/* Subtle Specular Ambient Backlight Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-sky-950/20 blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Refined Editorial Typography & Controls */}
          <div className="flex flex-col lg:col-span-7">
            {/* 1. Eyebrow with dynamic technical role transition */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 flex flex-wrap items-center gap-2.5"
            >
              <span className="font-mono text-xs font-bold tracking-[0.22em] text-sky-400 uppercase">
                COMPUTER SCIENCE ·
              </span>

              {/* Changing Technical Role */}
              <div className="relative inline-block h-5 min-w-[200px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ROTATING_ROLES[roleIndex]}
                    initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="absolute left-0 top-0 font-mono text-xs font-bold tracking-[0.22em] text-neutral-300 uppercase"
                  >
                    {ROTATING_ROLES[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Horizontal decorative rule line */}
              <span className="hidden sm:inline-block h-px w-12 bg-white/20" />
            </motion.div>

            {/* 2. Main High-Luxury Headline with Serif Typographic Polish */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <h1 className="font-display font-medium tracking-tight text-white leading-[1.08] text-4xl sm:text-6xl md:text-7xl lg:text-[5.1rem]">
                {/* Line 1: Building */}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
                    Building
                  </span>
                  {/* Subtle specular sparkle star on 'B' */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-2.5 top-1 inline-flex text-white/90 drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"
                  >
                    <svg className="size-4 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0L14 9.5L24 12L14 14.5L12 24L10 14.5L0 12L10 9.5L12 0Z" />
                    </svg>
                  </span>
                </span>
                <br />

                {/* Line 2: intelligent systems */}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(56,189,248,0.45)]">
                    intelligent
                  </span>
                  {/* Stellar sparkle on the 'i' */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-2 top-0 inline-flex text-sky-200 drop-shadow-[0_0_10px_rgba(56,189,248,0.9)]"
                  >
                    <svg className="size-3.5 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0L14 9.5L24 12L14 14.5L12 24L10 9.5L12 0Z" />
                    </svg>
                  </span>
                </span>{' '}
                <span className="bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
                  systems
                </span>
                <br />

                {/* Line 3: for a better tomorrow. */}
                <span className="bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
                  for a better{' '}
                </span>
                <span className="italic font-normal text-white/95 transition-colors">
                  tomorrow.
                </span>
              </h1>
            </motion.div>

            {/* 3. Supporting Editorial Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-neutral-300"
            >
              Exploring machine learning, data science, and practical AI through engineering, research, and real-world impact.
            </motion.p>

            {/* 4. Action Buttons (Explore My Work & View Resume) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              {/* Primary Glowing Button */}
              <Link
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-xl border border-sky-400/50 bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(14,165,233,0.38)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_36px_rgba(14,165,233,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 active:scale-[0.98]"
              >
                <span>Explore My Work</span>
                <FaArrowUpRightFromSquare className="text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              {/* Secondary Dark Frosted Glass Button */}
              <Link
                href={links.resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-black/60 px-6 py-3.5 text-sm font-medium text-neutral-200 backdrop-blur-md transition-all duration-300 hover:border-white/35 hover:bg-black/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 active:scale-[0.98]"
              >
                <FaFileLines className="text-sm text-neutral-400 transition-colors group-hover:text-white" />
                <span>View R&eacute;sum&eacute;</span>
              </Link>
            </motion.div>

            {/* 5. Redesigned Tech Stack Strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <TechStackStrip />
            </motion.div>
          </div>

          {/* Right Column: Suspended Original Hanging ID Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center lg:col-span-5 w-full -mt-2 sm:-mt-4 lg:-mt-6"
          >
            <div className="relative w-full h-[480px] sm:h-[520px] lg:h-[560px] flex items-center justify-center">
              <HangingIdCard />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
