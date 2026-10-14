'use client';

import React from 'react';
import {
  FaBriefcase,
  FaCalendarDays,
  FaLocationDot,
  FaCircleCheck,
  FaBuilding,
  FaFileContract,
} from 'react-icons/fa6';
import {
  RevealHeading,
  RevealSubheading,
  RevealContent,
} from '@/components/ui/scroll-reveal';
import { experiences, type ExperienceItem } from '@/data';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="relative w-full scroll-mt-24 py-16 md:py-24">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-950/15 blur-[130px]" />

      {/* Eyebrow Label */}
      <RevealHeading>
        <div className="mb-4 flex items-center gap-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-sky-400">
            06 / INDUSTRY EXPERIENCE
          </span>
          <span className="h-px flex-1 bg-white/[0.08]" />
        </div>

        {/* Section Heading */}
        <h2 className="font-sans text-3xl font-black uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
          EXPERIENCE
        </h2>
      </RevealHeading>

      {/* Subtitle */}
      <RevealSubheading>
        <p className="mt-4 max-w-2xl text-base text-neutral-400 leading-relaxed sm:text-lg">
          Internships, engineering projects, and practical experience building data-driven applications and AI systems.
        </p>
      </RevealSubheading>

      {/* Vertical Timeline Container */}
      <div className="relative mt-14 md:mt-20">
        {/* Continuous Connecting Line - Desktop (Centered) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-4 bottom-4 hidden w-[2px] -translate-x-1/2 bg-gradient-to-b from-sky-400 via-sky-500/40 to-indigo-500/20 md:block"
        />

        {/* Continuous Connecting Line - Mobile (Left-aligned) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-5 top-4 bottom-4 w-[2px] bg-gradient-to-b from-sky-400 via-sky-500/40 to-indigo-500/20 md:hidden"
        />

        {/* Timeline Items */}
        <div className="space-y-12 md:space-y-16">
          {experiences.map((exp: ExperienceItem, index: number) => {
            const isEven = index % 2 === 0;

            return (
              <div key={exp.id} className="relative">
                {/* Desktop Alternating Layout */}
                <div className="hidden md:grid md:grid-cols-2 md:gap-x-16 md:items-start">
                  {/* Left Column */}
                  <div className={`${isEven ? 'text-left' : 'flex flex-col items-end text-right'}`}>
                    {isEven ? (
                      /* Card on Left for Even (Be11) */
                      <RevealContent delay={0.15}>
                        <TimelineCard experience={exp} />
                      </RevealContent>
                    ) : (
                      /* Milestone / Metadata indicator on Left for Odd */
                      <RevealContent delay={0.15} className="w-full pt-4 pr-2">
                        <div className="flex flex-col items-end space-y-2">
                          {exp.dates && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.1] bg-white/[0.04] px-3.5 py-1 font-mono text-xs font-semibold text-neutral-300">
                              <FaCalendarDays className="text-[11px] text-sky-400" />
                              {exp.dates}
                            </span>
                          )}
                          <div className="flex items-center gap-2">
                            {exp.location && (
                              <span className="inline-flex items-center gap-1 font-mono text-xs text-neutral-400">
                                <FaLocationDot className="text-[10px] text-sky-400" />
                                {exp.location}
                              </span>
                            )}
                            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-emerald-300">
                              <FaCircleCheck className="text-[10px]" />
                              {exp.status}
                            </span>
                          </div>
                          <span className="font-mono text-[11px] text-neutral-400">
                            Engineering Internship · Production Delivery
                          </span>
                        </div>
                      </RevealContent>
                    )}
                  </div>

                  {/* Right Column */}
                  <div className={`${isEven ? 'flex flex-col items-start' : 'text-left'}`}>
                    {isEven ? (
                      /* Milestone / Metadata indicator on Right for Even */
                      <RevealContent delay={0.15} className="w-full pt-4 pl-2">
                        <div className="flex flex-col items-start space-y-2">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/40 bg-sky-500/10 px-3.5 py-1 font-mono text-xs font-semibold text-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
                            <FaFileContract className="text-[11px]" />
                            {exp.status}
                          </span>
                          <span className="font-mono text-xs text-neutral-400">
                            Formal Internship Offer · Technical Initiatives
                          </span>
                          <span className="inline-flex items-center gap-1 font-mono text-[11px] text-sky-400/80">
                            <FaBuilding className="text-[10px]" />
                            {exp.organization}
                          </span>
                        </div>
                      </RevealContent>
                    ) : (
                      /* Card on Right for Odd (Vacation Mantra) */
                      <RevealContent delay={0.15}>
                        <TimelineCard experience={exp} />
                      </RevealContent>
                    )}
                  </div>
                </div>

                {/* Desktop Central Node Marker */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-6 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center md:flex"
                >
                  <div className="relative flex size-5 items-center justify-center rounded-full border-2 border-sky-400 bg-[#080d19] shadow-[0_0_14px_rgba(56,189,248,0.5)]">
                    <span className="size-1.5 rounded-full bg-sky-400" />
                  </div>
                </div>

                {/* Mobile View: Single Column aligned with Left Marker */}
                <div className="relative pl-12 md:hidden">
                  {/* Left Node Marker on Mobile */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-5 top-6 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="flex size-5 items-center justify-center rounded-full border-2 border-sky-400 bg-[#080d19] shadow-[0_0_12px_rgba(56,189,248,0.4)]">
                      <span className="size-1.5 rounded-full bg-sky-400" />
                    </div>
                  </div>

                  <RevealContent delay={0.1}>
                    <TimelineCard experience={exp} isMobile />
                  </RevealContent>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

interface TimelineCardProps {
  experience: ExperienceItem;
  isMobile?: boolean;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ experience, isMobile = false }) => {
  const isOffer = experience.status === 'Internship Offer';

  return (
    <div className="spotlight-card group relative rounded-2xl border border-white/[0.08] bg-[#080d19]/90 p-6 shadow-xl backdrop-blur-xl sm:p-7">
      {/* Top Header Row: Icon & Status / Date Badges */}
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/[0.06] pb-4">
        <div className="flex items-center gap-3">
          <div className="interactive-circle flex size-10 shrink-0 items-center justify-center rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-400">
            <FaBriefcase className="text-sm" />
          </div>
          <div>
            <span className="font-mono text-xs font-semibold tracking-wider text-sky-400 uppercase">
              {experience.employmentType}
            </span>
            <p className="font-mono text-[11px] text-neutral-400">
              {experience.organization}
            </p>
          </div>
        </div>

        {/* Status / Dates Badges */}
        <div className="flex flex-wrap items-center gap-2">
          {experience.dates && (
            <span className="interactive-pill inline-flex items-center gap-1.5 rounded-full border border-white/[0.1] bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] font-medium text-neutral-300">
              <FaCalendarDays className="text-[10px] text-sky-400" />
              {experience.dates}
            </span>
          )}

          {isOffer ? (
            <span className="interactive-pill inline-flex items-center gap-1.5 rounded-full border border-sky-400/40 bg-sky-500/10 px-2.5 py-1 font-mono text-[11px] font-bold text-sky-300 shadow-[0_0_10px_rgba(56,189,248,0.15)]">
              <FaFileContract className="text-[10px]" />
              {experience.status}
            </span>
          ) : (
            <span className="interactive-pill inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] font-bold text-emerald-300">
              <FaCircleCheck className="text-[10px]" />
              {experience.status}
            </span>
          )}

          {experience.location && (
            <span className="interactive-pill inline-flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-neutral-400">
              <FaLocationDot className="text-[10px] text-neutral-400" />
              {experience.location}
            </span>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="mt-4 space-y-3">
        {/* Role Title */}
        <h3 className="font-sans text-xl font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-sky-200 sm:text-2xl">
          {experience.role}
        </h3>

        {/* Short Description */}
        <p className="text-sm leading-relaxed text-neutral-300 sm:text-[15px]">
          {experience.description}
        </p>

        {/* Verified Contributions (if any) */}
        {experience.contributions && experience.contributions.length > 0 && (
          <div className="pt-2">
            <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Key Contributions:
            </p>
            <ul className="space-y-2">
              {experience.contributions.map((contribution: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.6)]" />
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technology Tags (if verified) */}
        {experience.technologies && experience.technologies.length > 0 && (
          <div className="pt-3">
            <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
              Technologies &amp; Architecture:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {experience.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="interactive-pill inline-flex items-center rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Verified Source / Offer Note for Be11 */}
        {isOffer && (
          <div className="mt-3 flex items-center gap-2 rounded-lg border border-sky-500/20 bg-sky-500/5 px-3 py-2 text-[11px] text-sky-300/90 font-mono">
            <FaCircleCheck className="shrink-0 text-sky-400 text-xs" />
            <span>Formal internship offer confirmed via official offer communication.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceSection;
