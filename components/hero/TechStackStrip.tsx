'use client';

import React, { useState } from 'react';
import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiPandas,
  SiReact,
  SiScikitlearn,
  SiFastapi,
  SiPostgresql,
  SiOpencv,
} from 'react-icons/si';
import { HiDotsHorizontal } from 'react-icons/hi';

interface TechItem {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  glow: string;
  category: string;
}

const PRIMARY_TECH_STACK: TechItem[] = [
  {
    id: 'python',
    name: 'Python',
    icon: SiPython,
    color: '#38bdf8',
    glow: 'rgba(56, 189, 248, 0.4)',
    category: 'Core Language',
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    icon: SiPytorch,
    color: '#f97316',
    glow: 'rgba(249, 115, 22, 0.4)',
    category: 'Deep Learning',
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    icon: SiTensorflow,
    color: '#fbbf24',
    glow: 'rgba(251, 191, 36, 0.4)',
    category: 'ML Framework',
  },
  {
    id: 'pandas',
    name: 'Pandas',
    icon: SiPandas,
    color: '#818cf8',
    glow: 'rgba(129, 140, 248, 0.4)',
    category: 'Data Analysis',
  },
  {
    id: 'react',
    name: 'React',
    icon: SiReact,
    color: '#38bdf8',
    glow: 'rgba(56, 189, 248, 0.4)',
    category: 'Interactive UI',
  },
];

const EXTENDED_TECH_STACK: TechItem[] = [
  {
    id: 'scikit-learn',
    name: 'Scikit-Learn',
    icon: SiScikitlearn,
    color: '#f59e0b',
    glow: 'rgba(245, 158, 11, 0.4)',
    category: 'Machine Learning',
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    icon: SiFastapi,
    color: '#06b6d4',
    glow: 'rgba(6, 182, 212, 0.4)',
    category: 'API Engine',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    icon: SiPostgresql,
    color: '#60a5fa',
    glow: 'rgba(96, 165, 250, 0.4)',
    category: 'Vector & Relational DB',
  },
  {
    id: 'opencv',
    name: 'OpenCV',
    icon: SiOpencv,
    color: '#ef4444',
    glow: 'rgba(239, 68, 68, 0.4)',
    category: 'Computer Vision',
  },
];

export const TechStackStrip: React.FC = () => {
  const [showExtended, setShowExtended] = useState(false);

  return (
    <div className="mt-8 sm:mt-10 w-full">
      {/* Strip Header */}
      <div className="flex items-center gap-3">
        <span className="font-mono text-[11px] font-bold tracking-[0.25em] text-sky-400 uppercase">
          TECH STACK
        </span>
        <span className="h-px w-10 bg-white/20" />
      </div>

      {/* Interactive Circular Badges Grid */}
      <div className="mt-4 flex flex-wrap items-center gap-4 sm:gap-6">
        {PRIMARY_TECH_STACK.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="group flex flex-col items-center gap-2"
              tabIndex={0}
              role="button"
              aria-label={`${item.name} - ${item.category}`}
            >
              <div
                className="relative flex size-12 sm:size-14 items-center justify-center rounded-full border border-white/10 bg-black/60 backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:border-white/30 group-focus-visible:ring-2 group-focus-visible:ring-sky-400"
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
                }}
              >
                {/* Ambient glow on hover */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle, ${item.glow} 0%, transparent 70%)`,
                  }}
                />

                <Icon
                  className="text-lg sm:text-xl transition-transform duration-300 group-hover:scale-110"
                  style={{ color: item.color }}
                />
              </div>

              <span className="font-mono text-[11px] font-medium tracking-wide text-neutral-400 transition-colors duration-200 group-hover:text-white">
                {item.name}
              </span>
            </div>
          );
        })}

        {/* Extended items when toggled */}
        {showExtended &&
          EXTENDED_TECH_STACK.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group flex flex-col items-center gap-2 animate-in fade-in zoom-in-95 duration-200"
                tabIndex={0}
                role="button"
                aria-label={`${item.name} - ${item.category}`}
              >
                <div
                  className="relative flex size-12 sm:size-14 items-center justify-center rounded-full border border-white/10 bg-black/60 backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:border-white/30 group-focus-visible:ring-2 group-focus-visible:ring-sky-400"
                  style={{
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
                  }}
                >
                  <div
                    className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle, ${item.glow} 0%, transparent 70%)`,
                    }}
                  />

                  <Icon
                    className="text-lg sm:text-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ color: item.color }}
                  />
                </div>

                <span className="font-mono text-[11px] font-medium tracking-wide text-neutral-400 transition-colors duration-200 group-hover:text-white">
                  {item.name}
                </span>
              </div>
            );
          })}

        {/* Toggle "More" / "Less" Pill Badge */}
        <button
          type="button"
          onClick={() => setShowExtended(!showExtended)}
          className="group flex flex-col items-center gap-2 focus-visible:outline-none"
          aria-expanded={showExtended}
          aria-label={showExtended ? 'Show fewer technical tools' : 'Show more technical tools'}
        >
          <div className="relative flex size-12 sm:size-14 items-center justify-center rounded-full border border-white/10 bg-black/60 text-neutral-400 backdrop-blur-md transition-all duration-300 group-hover:border-sky-400/50 group-hover:text-white group-hover:scale-105 group-hover:shadow-[0_0_16px_rgba(56,189,248,0.25)]">
            <HiDotsHorizontal className="text-xl transition-transform duration-200 group-hover:scale-110" />
          </div>

          <span className="font-mono text-[11px] font-medium tracking-wide text-neutral-400 transition-colors duration-200 group-hover:text-sky-300">
            {showExtended ? 'Less' : 'More'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default TechStackStrip;
