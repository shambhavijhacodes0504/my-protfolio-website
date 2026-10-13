'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaFilePdf, FaDownload, FaArrowUpRightFromSquare, FaGraduationCap } from 'react-icons/fa6';
import { links } from '@/config';
import { RevealHeading, RevealSubheading, RevealContent } from '@/components/ui/scroll-reveal';

export const ResumeSection = () => {
  const [resumeAvailable, setResumeAvailable] = useState<boolean>(true);
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  React.useEffect(() => {
    fetch(links.resumeUrl, { method: 'HEAD' })
      .then((res) => setResumeAvailable(res.ok))
      .catch(() => setResumeAvailable(true));
  }, []);

  const handleResumeAction = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!resumeAvailable) {
      e.preventDefault();
      setDownloadNotice(
        'Resume document not yet uploaded. Please place Shambhavi_Jha_Resume.pdf inside the public/resume/ directory.'
      );
      setTimeout(() => setDownloadNotice(null), 6000);
    }
  };

  return (
    <section id="resume" className="relative w-full scroll-mt-24 py-16 md:py-24">
      {/* Section Label */}
      <div className="mb-4 flex items-center gap-2">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-sky-400">
          02 / CURRICULUM VITAE
        </span>
        <span className="h-px flex-1 bg-white/[0.08]" />
      </div>

      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left: Section Header & CTAs */}
        <div className="flex flex-col lg:col-span-5">
          <RevealHeading as="h2">
            <h2 className="font-sans text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
              Academic profile &amp; technical background.
            </h2>
          </RevealHeading>

          <RevealSubheading delay={0.12}>
            <p className="mt-5 text-base leading-relaxed text-neutral-300">
              A comprehensive summary of academic milestones at Birla Institute of Technology, Mesra, foundational coursework, technical competencies, and verified machine learning projects.
            </p>
          </RevealSubheading>

          {/* Action Buttons */}
          <RevealContent delay={0.22}>
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
              <Link
                href={links.resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
                onClick={handleResumeAction}
                className="inline-flex items-center justify-center gap-2.5 rounded-md border border-sky-500/40 bg-sky-500/10 px-6 py-3 font-sans text-xs font-semibold tracking-wide text-sky-300 transition-all duration-200 hover:border-sky-500/70 hover:bg-sky-500/20 hover:text-white hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 active:scale-[0.99]"
              >
                <FaFilePdf className="text-sm" />
                <span>View Resume</span>
                <FaArrowUpRightFromSquare className="text-[10px]" />
              </Link>

              <a
                href={links.resumeUrl}
                download="Shambhavi_Jha_Resume.pdf"
                onClick={handleResumeAction}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/[0.12] bg-black-200/60 px-5 py-3 font-sans text-xs font-semibold text-neutral-200 backdrop-blur-sm transition-all duration-200 hover:border-white/30 hover:bg-black-300 hover:text-white hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 active:scale-[0.99]"
              >
                <FaDownload className="text-xs" />
                <span>Download PDF</span>
              </a>
            </div>

            {/* Configurable Status Notice */}
            {downloadNotice && (
              <div className="mt-4 rounded-md border border-amber-500/30 bg-amber-500/10 p-3 font-mono text-xs text-amber-200">
                {downloadNotice}
              </div>
            )}

            <div className="mt-4 flex items-center gap-2 font-mono text-[11px] text-emerald-400">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Official Resume PDF active · Direct 1-click view and download enabled.</span>
            </div>
          </RevealContent>
        </div>

        {/* Right: Refined Document Overview Card */}
        <div className="lg:col-span-7">
          <RevealContent delay={0.18}>
            <div className="rounded-2xl border border-white/[0.1] bg-[#080d19] p-6 shadow-2xl backdrop-blur-xl sm:p-8 transition-all duration-300 hover:border-sky-500/30 hover:shadow-[0_12px_40px_rgba(56,189,248,0.1)]">
            {/* Document Header Strip */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-400">
                  <FaFilePdf className="text-base" />
                </div>
                <div>
                  <h3 className="font-sans text-sm font-bold text-white">
                    SHAMBHAVI — RESUME OVERVIEW
                  </h3>
                  <p className="font-mono text-[10px] text-neutral-400">
                    BCA STUDENT · APPLIED AI &amp; MACHINE LEARNING · CGPA 8.7/10
                  </p>
                </div>
              </div>
              <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] font-medium text-emerald-300">
                VERIFIED DOCUMENT
              </span>
            </div>

            {/* Document Content Sections */}
            <div className="mt-6 space-y-6">
              {/* Education Block */}
              <div className="flex items-start gap-3.5">
                <FaGraduationCap className="mt-1 text-base text-sky-400" />
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-sans text-sm font-bold text-white">
                      Birla Institute of Technology (BIT), Mesra
                    </p>
                    <span className="font-mono text-xs text-neutral-400">
                      2025 – Present
                    </span>
                  </div>
                  <p className="text-xs font-medium text-sky-300">
                    Bachelor of Computer Applications (BCA) · Cumulative CGPA: 8.7 / 10.0
                  </p>
                  <p className="mt-1.5 text-xs text-neutral-400 leading-relaxed">
                    Relevant Coursework: Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Computer Architecture.
                  </p>
                </div>
              </div>

              {/* Core Strengths */}
              <div className="border-t border-white/[0.06] pt-4">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                  Technical Competencies (From Resume)
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {[
                    'Python, C, C++, SQL',
                    'Machine Learning & Scikit-learn',
                    'Data Analysis & Preprocessing',
                    'Feature Engineering',
                    'Model Evaluation & Explainable AI',
                    'Pandas, NumPy, Matplotlib',
                    'Sentence Transformers',
                    'Streamlit, Flask, FastAPI',
                    'React.js, Node.js',
                    'MongoDB, PostgreSQL',
                    'Git, GitHub, Linux',
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded border border-white/[0.08] bg-black/50 px-2.5 py-1 font-mono text-xs text-neutral-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Featured Implementations */}
              <div className="border-t border-white/[0.06] pt-4">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                  Key Projects Documented in Resume
                </p>
                <div className="mt-2 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  <div className="rounded border border-white/[0.06] bg-black/30 p-2.5">
                    <p className="text-xs font-semibold text-white">Loan Approval: ML vs. LLM</p>
                    <p className="font-mono text-[10px] text-neutral-400">Scikit-learn · Flask · OpenAI API</p>
                  </div>
                  <div className="rounded border border-white/[0.06] bg-black/30 p-2.5">
                    <p className="text-xs font-semibold text-white">Artificial Wisdom System</p>
                    <p className="font-mono text-[10px] text-neutral-400">Explainable AI · Streamlit</p>
                  </div>
                  <div className="rounded border border-white/[0.06] bg-black/30 p-2.5">
                    <p className="text-xs font-semibold text-white">AI-Driven CRM Analytics</p>
                    <p className="font-mono text-[10px] text-neutral-400">React.js · Node.js · MongoDB</p>
                  </div>
                  <div className="rounded border border-white/[0.06] bg-black/30 p-2.5">
                    <p className="text-xs font-semibold text-white">Cross-Domain Recommendation</p>
                    <p className="font-mono text-[10px] text-neutral-400">Sentence Transformers · FastAPI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealContent>
      </div>
    </div>
  </section>
  );
};

export default ResumeSection;
