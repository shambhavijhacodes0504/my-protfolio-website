'use client';

import React from 'react';
import Image from 'next/image';
import { assetConfig } from '@/config';
import { RevealHeading, RevealSubheading, RevealContent } from '@/components/ui/scroll-reveal';

export const AboutMe = () => {
  return (
    <section id="about" className="relative w-full scroll-mt-24 py-16 md:py-24">
      {/* Subtle section label */}
      <div className="mb-4 flex items-center gap-2">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-sky-400">
          01 / BACKGROUND & PERSPECTIVE
        </span>
        <span className="h-px flex-1 bg-white/[0.08]" />
      </div>

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Left Column: Authentic Portrait */}
        <div className="lg:col-span-5">
          <RevealContent delay={0.1}>
            <div className="group relative mx-auto max-w-[380px] lg:max-w-none">
              {/* Ambient border and backdrop */}
              <div className="spotlight-card media-zoom-container relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0c1222] shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
                <Image
                  src={assetConfig.portrait}
                  alt="Shambhavi in the workshop holding a model aircraft"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-top"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Captioned note */}
              <div className="mt-3 flex items-center justify-between px-1">
                <span className="font-mono text-[11px] text-neutral-400">
                  AEROMODELING &amp; SYSTEMS WORKSHOP
                </span>
                <span className="font-mono text-[11px] text-sky-400/80">
                  AUTHENTIC
                </span>
              </div>
            </div>
          </RevealContent>
        </div>

        {/* Right Column: Conversational, Human Copy */}
        <div className="flex flex-col justify-center lg:col-span-7">
          <RevealHeading as="h2">
            <h2 className="font-sans text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
              Understanding systems from first principles.
            </h2>
          </RevealHeading>

          <RevealSubheading delay={0.12}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-300 sm:text-lg">
              <p>
                I&apos;m Shambhavi, a BCA student at Birla Institute of Technology, Mesra. I&apos;m interested in how machine learning and data science can help solve practical problems. My projects have taken me into areas such as computer vision, semantic search, and predictive analytics. I enjoy exploring how these systems work, understanding their limitations, and turning what I learn into useful applications.
              </p>
              <p className="text-sm text-neutral-400 sm:text-base">
                When developing an idea, I prioritize the link between data quality, feature representations, and reproducible evaluation. Rather than treating models as opaque black boxes, I like examining embeddings, tracking error distributions, and building interactive tools to evaluate predictions in real scenarios.
              </p>
              <p className="text-sm text-neutral-400 sm:text-base">
                Outside of coursework, I spend time exploring multimodal retrieval, explainable AI heuristics, and clean API design with FastAPI and PostgreSQL.
              </p>
            </div>
          </RevealSubheading>

          {/* Quick Pillars Grid */}
          <RevealContent delay={0.24}>
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/[0.08] pt-6 sm:grid-cols-4">
              <div className="spotlight-card interactive-hover rounded-xl border border-white/[0.08] bg-[#080d19]/80 p-3.5 backdrop-blur-sm">
                <p className="font-mono text-[10px] uppercase tracking-wider text-sky-400/80">
                  INSTITUTION
                </p>
                <p className="mt-1 font-sans text-xs font-semibold text-white sm:text-sm">
                  BIT Mesra
                </p>
              </div>
              <div className="spotlight-card interactive-hover rounded-xl border border-white/[0.08] bg-[#080d19]/80 p-3.5 backdrop-blur-sm">
                <p className="font-mono text-[10px] uppercase tracking-wider text-sky-400/80">
                  PROGRAM
                </p>
                <p className="mt-1 font-sans text-xs font-semibold text-white sm:text-sm">
                  BCA (CGPA 8.7)
                </p>
              </div>
              <div className="spotlight-card interactive-hover rounded-xl border border-white/[0.08] bg-[#080d19]/80 p-3.5 backdrop-blur-sm">
                <p className="font-mono text-[10px] uppercase tracking-wider text-sky-400/80">
                  FOCUS
                </p>
                <p className="mt-1 font-sans text-xs font-semibold text-white sm:text-sm">
                  AI/ML &amp; Data
                </p>
              </div>
              <div className="spotlight-card interactive-hover rounded-xl border border-white/[0.08] bg-[#080d19]/80 p-3.5 backdrop-blur-sm">
                <p className="font-mono text-[10px] uppercase tracking-wider text-sky-400/80">
                  LOCATION
                </p>
                <p className="mt-1 font-sans text-xs font-semibold text-white sm:text-sm">
                  Ranchi, India
                </p>
              </div>
            </div>
          </RevealContent>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
