'use client';

import React from 'react';
import {
  RevealHeading,
  RevealSubheading,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui/scroll-reveal';

const SKILL_GROUPS = [
  {
    category: 'PROGRAMMING LANGUAGES',
    desc: 'Core languages for algorithmic logic, computational modeling, and software engineering.',
    skills: ['Python', 'C', 'C++', 'SQL', 'Java (basic)', 'JavaScript (basic)'],
  },
  {
    category: 'MACHINE LEARNING & DATA SCIENCE',
    desc: 'Data analysis, feature engineering, predictive inference, and model evaluation.',
    skills: [
      'Machine Learning',
      'Data Analysis',
      'Data Preprocessing',
      'Feature Engineering',
      'Model Evaluation',
      'Explainable AI',
      'Predictive Modeling',
    ],
  },
  {
    category: 'LIBRARIES & FRAMEWORKS',
    desc: 'Numerical computing, dense semantic embeddings, web APIs, and inference dashboards.',
    skills: [
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Sentence Transformers',
      'Streamlit',
      'Flask',
      'FastAPI',
    ],
  },
  {
    category: 'WEB DEVELOPMENT & DATABASES',
    desc: 'Production application stacks, interactive interfaces, and relational/document persistence.',
    skills: ['React.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'REST APIs'],
  },
  {
    category: 'TOOLS & CORE CS',
    desc: 'Foundational computer science principles, version control, and system environments.',
    skills: [
      'Git',
      'GitHub',
      'Linux (basics)',
      'Data Structures & Algorithms',
      'Object-Oriented Programming (OOP)',
      'Database Management Systems (DBMS)',
      'Operating Systems',
      'Computer Networks',
      'Computer Architecture',
    ],
  },
];

export const TechnicalSkills = () => {
  return (
    <section id="skills" className="relative w-full scroll-mt-24 py-16 md:py-24">
      {/* Section Label */}
      <RevealHeading>
        <div className="mb-4 flex items-center gap-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-sky-400">
            03 / TECHNICAL TOOLKIT
          </span>
          <span className="h-px flex-1 bg-white/[0.08]" />
        </div>

        <div className="max-w-2xl">
          <h2 className="font-sans text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
            Structured capabilities &amp; engineering stack.
          </h2>
        </div>
      </RevealHeading>

      <RevealSubheading>
        <p className="mt-4 max-w-2xl text-base text-neutral-400 leading-relaxed sm:text-lg">
          Organized across programming foundations, machine learning pipelines, semantic embeddings, and database engineering. Verified against actual project repositories.
        </p>
      </RevealSubheading>

      {/* Skills Grid */}
      <StaggerContainer
        staggerChildren={0.08}
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {SKILL_GROUPS.map((group, idx) => (
          <StaggerItem
            key={group.category}
            className={`spotlight-card flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#080d19]/80 p-6 backdrop-blur-sm group ${
              idx === 6 ? 'sm:col-span-2 lg:col-span-3' : ''
            }`}
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 transition-colors group-hover:border-white/[0.12]">
                <h3 className="font-mono text-xs font-bold tracking-wider text-sky-400 transition-colors group-hover:text-sky-300">
                  {group.category}
                </h3>
                <span className="font-mono text-[10px] text-neutral-500">
                  0{idx + 1}
                </span>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-neutral-400">
                {group.desc}
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="interactive-pill rounded border border-white/[0.08] bg-black/60 px-2.5 py-1 font-mono text-xs font-medium text-neutral-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
};

export default TechnicalSkills;
