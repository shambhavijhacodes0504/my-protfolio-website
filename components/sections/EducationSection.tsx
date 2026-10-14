'use client';

import React from 'react';
import { FaGraduationCap, FaBuildingColumns, FaAward } from 'react-icons/fa6';
import {
  RevealHeading,
  RevealSubheading,
  RevealContent,
} from '@/components/ui/scroll-reveal';

export const EducationSection = () => {
  return (
    <section id="education" className="relative w-full scroll-mt-24 py-16 md:py-24">
      {/* Section Label */}
      <RevealHeading>
        <div className="mb-4 flex items-center gap-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-sky-400">
            04 / ACADEMIC FOUNDATIONS
          </span>
          <span className="h-px flex-1 bg-white/[0.08]" />
        </div>

        <div className="max-w-2xl">
          <h2 className="font-sans text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
            Education &amp; theoretical training.
          </h2>
        </div>
      </RevealHeading>

      <RevealSubheading>
        <p className="mt-4 max-w-2xl text-base text-neutral-400 leading-relaxed sm:text-lg">
          Rigorous undergraduate studies establishing core algorithmic principles, mathematical foundations, and software engineering discipline.
        </p>
      </RevealSubheading>

      {/* Education Card */}
      <RevealContent delay={0.2} className="mt-10">
        <div className="spotlight-card rounded-2xl border border-white/[0.1] bg-[#080d19] p-6 shadow-xl backdrop-blur-xl sm:p-8">
          <div className="flex flex-col justify-between gap-4 border-b border-white/[0.08] pb-6 sm:flex-row sm:items-center">
            <div className="flex items-start gap-4">
              <div className="interactive-circle flex size-12 shrink-0 items-center justify-center rounded-xl border border-sky-500/30 bg-sky-500/10 text-sky-400">
                <FaGraduationCap className="text-xl" />
              </div>
              <div>
                <h3 className="font-sans text-xl font-bold text-white sm:text-2xl">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <p className="mt-1 flex items-center gap-2 text-sm font-medium text-neutral-300">
                  <FaBuildingColumns className="text-xs text-sky-400" />
                  Birla Institute of Technology, Mesra · Ranchi, India
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start sm:items-end">
              <span className="font-mono text-xs font-semibold text-neutral-400">
                2025 – Present
              </span>
              <span className="interactive-pill mt-1 inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-0.5 font-mono text-xs font-bold text-sky-300">
                <FaAward className="text-xs" />
                CGPA: 8.7 / 10.0
              </span>
            </div>
          </div>

          {/* Curriculum Pillars */}
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="spotlight-card interactive-hover rounded-xl border border-white/[0.08] bg-black/40 p-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-400">
                COMPUTER SCIENCE CORE
              </p>
              <ul className="mt-3 space-y-1.5 text-xs text-neutral-300">
                <li className="transition-colors hover:text-white">• Data Structures &amp; Algorithms</li>
                <li className="transition-colors hover:text-white">• Object-Oriented Programming (C++, Java)</li>
                <li className="transition-colors hover:text-white">• Computer System Architecture</li>
                <li className="transition-colors hover:text-white">• Operating Systems &amp; Process Scheduling</li>
              </ul>
            </div>

            <div className="spotlight-card interactive-hover rounded-xl border border-white/[0.08] bg-black/40 p-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-400">
                MATHEMATICAL FOUNDATIONS
              </p>
              <ul className="mt-3 space-y-1.5 text-xs text-neutral-300">
                <li className="transition-colors hover:text-white">• Discrete Mathematics &amp; Logic</li>
                <li className="transition-colors hover:text-white">• Linear Algebra for Machine Learning</li>
                <li className="transition-colors hover:text-white">• Probability &amp; Applied Statistics</li>
                <li className="transition-colors hover:text-white">• Numerical Methods &amp; Optimization</li>
              </ul>
            </div>

            <div className="spotlight-card interactive-hover rounded-xl border border-white/[0.08] bg-black/40 p-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-400">
                APPLIED SYSTEMS &amp; LABS
              </p>
              <ul className="mt-3 space-y-1.5 text-xs text-neutral-300">
                <li className="transition-colors hover:text-white">• Database Management Systems (SQL)</li>
                <li className="transition-colors hover:text-white">• Software Engineering Methodologies</li>
                <li className="transition-colors hover:text-white">• Python Programming Laboratory</li>
                <li className="transition-colors hover:text-white">• Aeromodeling &amp; Engineering Workshop</li>
              </ul>
            </div>
          </div>
        </div>
      </RevealContent>
    </section>
  );
};

export default EducationSection;
