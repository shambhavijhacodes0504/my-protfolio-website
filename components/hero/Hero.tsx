'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { FaGithub, FaArrowRight } from 'react-icons/fa6';
import { links, assetConfig } from '@/config';

import { StaticOrbitalFallback } from './AiOrbitalCenterpiece';

// Dynamically load 3D orbital centerpiece with SSR disabled
const AiOrbitalCenterpiece = dynamic(
  () => import('./AiOrbitalCenterpiece'),
  {
    ssr: false,
    loading: () => <StaticOrbitalFallback />,
  }
);

const CAPABILITIES = [
  {
    num: '01',
    title: 'SEMANTIC SYSTEMS',
    desc: 'Embeddings, retrieval and cross-domain recommendations',
  },
  {
    num: '02',
    title: 'COMPUTER VISION',
    desc: 'Object detection and visual intelligence',
  },
  {
    num: '03',
    title: 'DATA SCIENCE',
    desc: 'Exploratory analysis, feature engineering and predictive modeling',
  },
  {
    num: '04',
    title: 'APPLIED AI RESEARCH',
    desc: 'Explainable models and experimental intelligent systems',
  },
];

export const Hero = () => {
  return (
    <section className="relative w-full pt-28 pb-16 md:pt-36 md:pb-20">
      {/* Subtle background ambient gradient */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-sky-950/20 blur-[130px]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Left Column: Editorial typography and capabilities */}
        <div className="flex flex-col lg:col-span-7">
          {/* Authentic Identity Chip with Shambhavi's Portrait */}
          <div className="mb-6 flex items-center gap-3.5">
            <div className="relative size-12 shrink-0 overflow-hidden rounded-full border border-sky-500/40 shadow-[0_0_16px_rgba(56,189,248,0.3)]">
              <Image
                src={assetConfig.portrait}
                alt="Shambhavi Jha portrait"
                width={48}
                height={48}
                className="h-full w-full object-cover object-top"
                priority
              />
            </div>
            <div>
              <p className="font-mono text-xs font-semibold tracking-widest text-sky-400">
                SHAMBHAVI JHA · RANCHI, INDIA
              </p>
              <p className="text-[11px] font-medium tracking-wide text-neutral-400">
                Birla Institute of Technology, Mesra · BCA (CGPA 8.7)
              </p>
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-sans text-4xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.05]">
            INTELLIGENCE, <br />
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
              ENGINEERED.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            I build and explore intelligent systems through machine learning, data science, semantic search, and computer vision.
          </p>

          {/* Four Capability Rows */}
          <div className="mt-8 divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.num}
                className="group flex flex-col py-3.5 transition-colors hover:bg-white/[0.02] sm:flex-row sm:items-baseline sm:gap-6"
              >
                <div className="flex items-center gap-3 sm:w-56 shrink-0">
                  <span className="font-mono text-xs font-semibold text-sky-400/80">
                    {cap.num} —
                  </span>
                  <span className="font-mono text-xs font-bold tracking-wider text-white">
                    {cap.title}
                  </span>
                </div>
                <p className="mt-1 text-xs text-neutral-400 sm:mt-0 sm:text-sm">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-200 hover:shadow-[0_0_24px_rgba(255,255,255,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 active:translate-y-0 active:scale-[0.98]"
            >
              <span>Explore Projects</span>
              <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              href={links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center justify-center gap-2.5 rounded-md border border-white/[0.15] bg-black-200/60 px-5 py-3 text-sm font-medium text-neutral-200 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-500/50 hover:bg-black-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 active:translate-y-0 active:scale-[0.98]"
            >
              <FaGithub className="text-base text-neutral-300 transition-colors group-hover:text-white" />
              <span>View GitHub</span>
            </Link>
          </div>
        </div>

        {/* Right Column: 3D AI Orbital Visualization centerpiece */}
        <div className="relative flex flex-col items-center justify-center lg:col-span-5">
          <div className="relative flex w-full flex-col items-center justify-center rounded-2xl border border-white/[0.08] bg-black/40 p-2 shadow-2xl backdrop-blur-xl sm:p-4">
            {/* Top technical badge */}
            <div className="mb-2 flex w-full items-center justify-between border-b border-white/[0.06] pb-2.5 px-3">
              <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                SYSTEM ARCHITECTURE
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-sky-400">
                <span className="size-1.5 rounded-full bg-sky-400 animate-pulse" />
                ACTIVE ORBITS
              </span>
            </div>

            {/* 3D Canvas */}
            <div className="relative h-[340px] w-full sm:h-[400px] lg:h-[420px]">
              <AiOrbitalCenterpiece />
            </div>

            {/* Bottom Caption Card */}
            <div className="mt-2 flex w-full items-center justify-between border-t border-white/[0.06] pt-2.5 px-3">
              <p className="font-mono text-[10px] text-neutral-400">
                LATENT VECTORS · HIGH-DIM EMBEDDINGS
              </p>
              <p className="font-mono text-[10px] text-neutral-500">
                BIT MESRA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
