'use client';

import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const EASING: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

/**
 * Section container that triggers when entering the viewport.
 * Does not re-trigger on repeated scroll.
 */
export const SectionReveal: React.FC<
  RevealProps & { id?: string; amount?: number }
> = ({ children, className = '', id, amount = 0.12 }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      id={id}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 28 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.6, ease: EASING }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Animated Section Heading (500–700ms)
 */
export const RevealHeading: React.FC<RevealProps & { as?: 'h1' | 'h2' | 'h3' }> = ({
  children,
  className = '',
  delay = 0,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: EASING }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Animated Subheading / Description (450–600ms, staggered after heading)
 */
export const RevealSubheading: React.FC<RevealProps> = ({
  children,
  className = '',
  delay = 0.12,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: EASING }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Animated Content block (450–650ms, staggered after subheading)
 */
export const RevealContent: React.FC<RevealProps> = ({
  children,
  className = '',
  delay = 0.22,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: EASING }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Stagger Container for Grids and Child Lists (70–120ms per item)
 */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (staggerVal: number = 0.08) => ({
    opacity: 1,
    transition: {
      staggerChildren: staggerVal,
      delayChildren: 0.1,
    },
  }),
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export const StaggerContainer: React.FC<
  RevealProps & { stagger?: number; staggerChildren?: number }
> = ({ children, className = '', stagger, staggerChildren }) => {
  const shouldReduceMotion = useReducedMotion();
  const effectiveStagger = stagger ?? staggerChildren ?? 0.08;

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={containerVariants}
      custom={effectiveStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<RevealProps> = ({
  children,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};
