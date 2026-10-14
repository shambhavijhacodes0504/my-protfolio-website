'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const SmoothCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring configuration for fluid cursor ring
  const springConfig = { damping: 28, stiffness: 320, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Ambient spotlight spring (slightly lazier for soft atmospheric drag)
  const ambientSpringConfig = { damping: 35, stiffness: 180, mass: 0.8 };
  const ambientX = useSpring(mouseX, ambientSpringConfig);
  const ambientY = useSpring(mouseY, ambientSpringConfig);

  const activeCardRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse/trackpad), not touchscreens
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hasFinePointer || prefersReducedMotion) {
      return;
    }

    setIsSupported(true);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);

      if (!isVisible) setIsVisible(true);

      // Advanced CSS spotlight tracker: update CSS custom properties on hovered spotlight card
      const target = e.target as HTMLElement | null;
      if (target) {
        const card = target.closest('.spotlight-card') as HTMLElement | null;
        if (card) {
          const rect = card.getBoundingClientRect();
          const x = clientX - rect.left;
          const y = clientY - rect.top;
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
          activeCardRef.current = card;
        } else if (activeCardRef.current) {
          activeCardRef.current = null;
        }

        // Detect hover over interactive elements
        const isInteractive = Boolean(
          target.closest(
            'a, button, [role="button"], input, textarea, select, .interactive-hover, .spotlight-card, [tabindex="0"], label'
          )
        );
        setIsHovered(isInteractive);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovered(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isSupported) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* 1. Ethereal Ambient Glow Follower (Gentle Flashlight) */}
      <motion.div
        className="pointer-events-none absolute -left-48 -top-48 size-96 rounded-full opacity-35 blur-[70px]"
        style={{
          x: ambientX,
          y: ambientY,
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, rgba(14, 165, 233, 0.06) 45%, transparent 70%)',
        }}
      />

      {/* 2. Fluid Magnetic Outer Halo / Ring */}
      <motion.div
        className="pointer-events-none absolute -left-5 -top-5 rounded-full border border-sky-400/50 transition-[border-color,background-color,box-shadow] duration-200"
        style={{
          x: smoothX,
          y: smoothY,
          width: isHovered ? 52 : 36,
          height: isHovered ? 52 : 36,
          marginLeft: isHovered ? -6 : 2,
          marginTop: isHovered ? -6 : 2,
          scale: isClicking ? 0.85 : 1,
          backgroundColor: isHovered ? 'rgba(56, 189, 248, 0.08)' : 'transparent',
          borderColor: isHovered ? 'rgba(56, 189, 248, 0.75)' : 'rgba(56, 189, 248, 0.35)',
          boxShadow: isHovered
            ? '0 0 24px rgba(56, 189, 248, 0.45), inset 0 0 12px rgba(56, 189, 248, 0.2)'
            : '0 0 10px rgba(56, 189, 248, 0.15)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
      />

      {/* 3. Precision High-Tech Center Dot */}
      <motion.div
        className="pointer-events-none absolute -left-1 -top-1 size-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]"
        style={{
          x: mouseX,
          y: mouseY,
          scale: isClicking ? 0.6 : isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? '#38bdf8' : '#ffffff',
        }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
};

export default SmoothCursor;
