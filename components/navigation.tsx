'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { links } from '@/config';
import { navItems } from '@/data';

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section spy
      const sections = ['about', 'resume', 'skills', 'education', 'projects', 'experience', 'research', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/[0.08] bg-black/80 backdrop-blur-xl shadow-lg'
          : 'border-b border-white/[0.04] bg-black/40 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Branding & Technical Descriptor */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
        >
          <span className="font-sans text-sm font-bold tracking-tight text-white sm:text-base">
            {links.ownerName}
          </span>
          <span className="h-3.5 w-px bg-white/20" />
          <span className="font-mono text-[10px] font-semibold tracking-widest text-sky-400 uppercase">
            AI/ML · DATA SCIENCE
          </span>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.link.replace('#', '');
            return (
              <Link
                key={item.name}
                href={item.link}
                className={`hover-link-glow group relative py-1 text-xs font-medium tracking-wide transition-colors duration-200 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                  isActive
                    ? 'text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[9px] text-sky-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.9)] animate-pulse"
                  >
                    ✦
                  </span>
                )}
                <span>{item.name}</span>
                {isActive ? (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.7)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        {/* Right: Social Icons & Rectangular Contact CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href={links.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub Profile"
            className="interactive-circle flex size-8 items-center justify-center rounded border border-white/[0.1] bg-black-200/60 text-neutral-400 hover:border-sky-500/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <FaGithub className="text-sm" />
          </Link>

          <Link
            href={links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn Profile"
            className="interactive-circle flex size-8 items-center justify-center rounded border border-white/[0.1] bg-black-200/60 text-neutral-400 hover:border-sky-500/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <FaLinkedinIn className="text-sm" />
          </Link>

          <Link
            href="#contact"
            className="btn-glow rounded border border-sky-500/40 bg-sky-500/10 px-3.5 py-1.5 font-sans text-xs font-semibold tracking-wide text-sky-300 hover:border-sky-500/70 hover:bg-sky-500/20 hover:text-white hover:shadow-[0_0_16px_rgba(56,189,248,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          className="flex size-9 items-center justify-center rounded border border-white/[0.1] bg-black-200/60 text-neutral-300 md:hidden"
        >
          {mobileMenuOpen ? <HiX className="text-lg" /> : <HiOutlineMenuAlt3 className="text-lg" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-white/[0.08] bg-black/95 px-5 py-6 backdrop-blur-2xl md:hidden">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-wide text-neutral-300 hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-5">
            <div className="flex items-center gap-3">
              <Link
                href={links.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub Profile"
                className="flex size-8 items-center justify-center rounded border border-white/[0.1] bg-black-200 text-neutral-400 hover:text-white"
              >
                <FaGithub className="text-sm" />
              </Link>
              <Link
                href={links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn Profile"
                className="flex size-8 items-center justify-center rounded border border-white/[0.1] bg-black-200 text-neutral-400 hover:text-white"
              >
                <FaLinkedinIn className="text-sm" />
              </Link>
            </div>

            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded border border-sky-500/40 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold text-sky-300"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
