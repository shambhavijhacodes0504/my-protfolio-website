"use client"; // Wajib untuk menggunakan useEffect
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Image from 'next/image'; // Gunakan <Image /> untuk optimasi gambar
import Link from 'next/link';
import styles from './CardSection.module.css'; // Impor CSS Module
import './global.css'; // Impor CSS global

import { RevealHeading, RevealSubheading } from '@/components/ui/scroll-reveal';

// Data untuk marquee items
const marqueeItems = [
  { text: " MACHINE LEARNING & EMBEDDINGS ", img: "/c.svg" },
  { text: " COMPUTER VISION & SEMANTIC RETRIEVAL ", img: "/ts.svg" },
  { text: " PREDICTIVE ANALYTICS & RESEARCH ", img: "/re.svg" }
];

const CardSection: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Inisialisasi GSAP dan ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);

      // Smooth scroll dengan Lenis
      const lenis = new Lenis();
      lenis.on('scroll', ScrollTrigger.update);
      const updateTicker = (time: number) => {
        lenis.raf(time * 1000);
      };
      gsap.ticker.add(updateTicker);
      gsap.ticker.lagSmoothing(0);

      const cards = cardsRef.current;
      const totalScrollHeight = window.innerHeight * 3;
      const positions = [14, 38, 62, 86];
      const rotations = [-15, -7.5, 7.5, 15];

      // Pin cards section
      ScrollTrigger.create({
        trigger: `.${styles.cards}`,
        start: 'top top',
        end: () => `+=${totalScrollHeight}`,
        pin: true,
        pinSpacing: true,
      });

      // Spread cards
      cards.forEach((card, index) => {
        gsap.to(card, {
          left: `${positions[index]}%`,
          rotation: `${rotations[index]}`,
          ease: 'none',
          scrollTrigger: {
            trigger: `.${styles.cards}`,
            start: 'top top',
            end: () => `+=${window.innerHeight}`,
            scrub: 0.5,
            id: `spread-${index}`,
          },
        });
      });

      // Rotate and flip cards with staggered effect
      cards.forEach((card, index) => {
        const frontEl = card.querySelector(`.${styles.flipCardFront}`) as HTMLElement;
        const backEl = card.querySelector(`.${styles.flipCardBack}`) as HTMLElement;

        const staggerOffset = index * 0.05;
        const startOffset = 1 / 3 + staggerOffset;
        const endOffset = 2 / 3 + staggerOffset;

        ScrollTrigger.create({
          trigger: `.${styles.cards}`,
          start: 'top top',
          end: () => `+=${totalScrollHeight}`,
          scrub: 1,
          id: `rotate-flip-${index}`,
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress >= startOffset && progress <= endOffset) {
              const animationProgress = (progress - startOffset) / (1 / 3);
              const frontRotation = -180 * animationProgress;
              const backRotation = 180 - 180 * animationProgress;
              const cardRotation = rotations[index] * (1 - animationProgress);

              if (frontEl && backEl) {
                frontEl.style.transform = `rotateY(${frontRotation}deg)`;
                backEl.style.transform = `rotateY(${backRotation}deg)`;
                card.style.transform = `translate(-50%, -50%) rotate(${cardRotation}deg)`;
              }
            }
          },
        });
      });

      return () => {
        gsap.ticker.remove(updateTicker);
        lenis.destroy();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  // Fungsi untuk menghasilkan marquee items secara dinamis
  const generateMarqueeItems = () => {
    return [...Array(3)].map((_, i) => (
      <div className={styles.marqueeContent} key={i}>
        {marqueeItems.map((item, index) => (
          <React.Fragment key={`${i}-${index}`}>
            <span>{item.text}</span>
            <Image
              src={item.img}
              alt="Gambar Marquee"
              width={50}
              height={50}
              style={{ objectFit: 'contain' }}
            />
          </React.Fragment>
        ))}
      </div>
    ));
  };

  return (
    <div id="research" className="relative scroll-mt-24 pt-16">
      {/* Section Header */}
      <div className="mb-8">
        <RevealHeading>
          <div className="mb-4 flex items-center gap-2">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-sky-400">
              06 / RESEARCH &amp; ARCHITECTURAL EXPLORATION
            </span>
            <span className="h-px flex-1 bg-white/[0.08]" />
          </div>

          <h2 className="font-sans text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
            Interactive research dossier.
          </h2>
        </RevealHeading>

        <RevealSubheading>
          <p className="mt-4 max-w-2xl text-base text-neutral-400 leading-relaxed sm:text-lg">
            Scroll to explore interactive 3D project dossiers detailing vector spaces, vision pipelines, and explainable AI heuristics.
          </p>
        </RevealSubheading>
      </div>

      {/* Cards Section */}
      <section className={styles.cards}>
        {[1, 2, 3, 4].map((id) => (
          <div
            key={id}
            className={styles.card}
            id={`card-${id}`}
            ref={(el) => {
              if (el) cardsRef.current[id - 1] = el;
            }}
          >
            <div className={styles.cardWrapper}>
              <div className={styles.flipCardInner}>
                {/* Front Side */}
                <div className={styles.flipCardFront}>
                  <Image
                    src={
                      id === 1
                        ? "/images/projects/object-detection-cover.jpg"
                        : id === 2
                        ? "/images/projects/cross-recommendation-cover.jpg"
                        : id === 3
                        ? "/images/projects/artificial-wisdom-cover.jpg"
                        : "/images/projects/crm-analytics-cover.jpg"
                    }
                    alt={`Project ${id}`}
                    width={500}
                    height={300}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                {/* Back Side - Verified Project Architecture Dossier */}
                <div className={`${styles.flipCardBack} spotlight-card flex flex-col justify-between border border-white/[0.12] bg-[#080d19] p-6 text-left`}>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] font-semibold tracking-widest text-sky-400">
                      {id === 1
                        ? '01 — COMPUTER VISION'
                        : id === 2
                        ? '02 — SEMANTIC SYSTEMS'
                        : id === 3
                        ? '03 — APPLIED AI RESEARCH'
                        : '04 — DATA SCIENCE'}
                    </span>
                    <h3 className="mt-2 font-sans text-lg font-bold text-white">
                      {id === 1
                        ? 'AI-Based Object Detection'
                        : id === 2
                        ? 'Cross Recommendation Engine'
                        : id === 3
                        ? 'Artificial Wisdom System'
                        : 'AI-Driven CRM Analytics'}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-neutral-300">
                      {id === 1
                        ? 'Explores real-time visual localization, class extraction, and OpenCV preprocessing.'
                        : id === 2
                        ? 'Sentence Transformers (all-MiniLM-L6-v2) 384-dim embeddings with NumPy cosine similarity.'
                        : id === 3
                        ? 'Adaptive learning heuristics, interpretable latent spaces, and explainable AI.'
                        : 'Customer segmentation, lead scoring probability, and predictive business insights.'}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {(id === 1
                        ? ['OpenCV', 'YOLO', 'Python']
                        : id === 2
                        ? ['Sentence Transformers', 'FastAPI', 'PostgreSQL']
                        : id === 3
                        ? ['PyTorch', 'Streamlit', 'Explainable AI']
                        : ['Scikit-Learn', 'React', 'Pandas']
                      ).map((tech) => (
                        <span
                          key={tech}
                          className="interactive-pill rounded border border-white/[0.1] bg-black/60 px-2 py-0.5 font-mono text-[10px] text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 border-t border-white/[0.08] pt-3">
                    <div className="flex items-center justify-between rounded border border-white/[0.08] bg-black/40 px-3 py-2">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                        Codebase Status
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-medium text-sky-300">
                        <span className="size-1.5 rounded-full bg-sky-400" />
                        {id === 3
                          ? 'Active Research'
                          : id === 1
                          ? 'Local / Prototype'
                          : id === 2
                          ? 'Documented Architecture'
                          : 'In Development'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Footer Section */}
      <section className={styles.footer}>
        <div className={styles.marquee}>
          <div className={styles.marqueeInner}>
            {generateMarqueeItems()}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardSection;