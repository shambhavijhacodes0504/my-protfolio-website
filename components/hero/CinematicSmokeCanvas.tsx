'use client';

import React, { useEffect, useRef } from 'react';

interface SmokePuff {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  radius: number;
  alpha: number;
  maxAlpha: number;
  vx: number;
  vy: number;
  swirlSpeed: number;
  angle: number;
  colorType: 'charcoal' | 'silver' | 'sapphire' | 'obsidian';
}

export const CinematicSmokeCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reducedMotion = mediaQuery.matches;
    const handleMotionChange = (e: MediaQueryListEvent) => {
      reducedMotion = e.matches;
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Mouse tracking with smooth lerp
    let mouseX = -1000;
    let mouseY = -1000;
    let targetMouseX = -1000;
    let targetMouseY = -1000;
    let isHovering = false;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Initialize smoke puffs
    const puffCount = 24;
    const puffs: SmokePuff[] = [];

    const colorPalettes = {
      charcoal: ['rgba(32, 38, 50, ', 'rgba(18, 22, 30, '],
      silver: ['rgba(140, 160, 190, ', 'rgba(90, 105, 128, '],
      sapphire: ['rgba(14, 165, 233, ', 'rgba(2, 132, 199, '],
      obsidian: ['rgba(8, 12, 18, ', 'rgba(4, 6, 10, '],
    };

    const initPuffs = () => {
      puffs.length = 0;
      for (let i = 0; i < puffCount; i++) {
        const x = Math.random() * (width || 1200);
        const y = (height || 800) * 0.35 + Math.random() * ((height || 800) * 0.65);
        const colorTypes: ('charcoal' | 'silver' | 'sapphire' | 'obsidian')[] = [
          'charcoal',
          'charcoal',
          'silver',
          'obsidian',
          'sapphire',
        ];
        const colorType = colorTypes[i % colorTypes.length];
        const radius = Math.random() * 180 + 160;
        const maxAlpha =
          colorType === 'sapphire'
            ? Math.random() * 0.05 + 0.03
            : colorType === 'silver'
            ? Math.random() * 0.08 + 0.04
            : Math.random() * 0.12 + 0.06;

        puffs.push({
          x,
          y,
          baseX: x,
          baseY: y,
          radius,
          alpha: maxAlpha * 0.5,
          maxAlpha,
          vx: (Math.random() - 0.5) * 0.35,
          vy: -Math.random() * 0.25 - 0.1,
          swirlSpeed: (Math.random() - 0.5) * 0.003,
          angle: Math.random() * Math.PI * 2,
          colorType,
        });
      }
    };

    initPuffs();

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
      isHovering = true;
    };

    const handlePointerLeave = () => {
      isHovering = false;
      targetMouseX = -1000;
      targetMouseY = -1000;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('pointerleave', handlePointerLeave);

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerp
      if (isHovering && targetMouseX > -500) {
        mouseX += (targetMouseX - mouseX) * 0.06;
        mouseY += (targetMouseY - mouseY) * 0.06;
      } else {
        mouseX += (-1000 - mouseX) * 0.04;
        mouseY += (-1000 - mouseY) * 0.04;
      }

      // Volumetric subtle light bloom following cursor
      if (mouseX > -200 && mouseY > -200) {
        const cursorGlow = ctx.createRadialGradient(
          mouseX,
          mouseY,
          10,
          mouseX,
          mouseY,
          320
        );
        cursorGlow.addColorStop(0, 'rgba(56, 189, 248, 0.055)');
        cursorGlow.addColorStop(0.4, 'rgba(30, 58, 138, 0.03)');
        cursorGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = cursorGlow;
        ctx.fillRect(0, 0, width, height);
      }

      // Draw and animate smoke puffs
      for (let i = 0; i < puffs.length; i++) {
        const p = puffs[i];

        if (!reducedMotion) {
          // Autonomous slow rise & drift
          p.x += p.vx;
          p.y += p.vy;
          p.angle += p.swirlSpeed;

          // Mouse displacement & gentle swirl
          if (mouseX > -200 && mouseY > -200) {
            const dx = p.x - mouseX;
            const dy = p.y - mouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const influenceRadius = 260;

            if (dist < influenceRadius && dist > 1) {
              const force = (1 - dist / influenceRadius) * 1.4;
              p.x += (dx / dist) * force;
              p.y += (dy / dist) * force * 0.6;
            }
          }

          // Boundary wrapping: reset smoothly when drifted too far up or out
          if (p.y + p.radius < 0) {
            p.y = height + p.radius * 0.5;
            p.x = Math.random() * width;
          }
          if (p.x < -p.radius) p.x = width + p.radius;
          if (p.x > width + p.radius) p.x = -p.radius;
        }

        // Draw soft radial puff
        const palette = colorPalettes[p.colorType];
        const radGrad = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius
        );

        radGrad.addColorStop(0, `${palette[0]}${p.maxAlpha})`);
        radGrad.addColorStop(0.45, `${palette[1]}${p.maxAlpha * 0.6})`);
        radGrad.addColorStop(0.8, `${palette[1]}${p.maxAlpha * 0.15})`);
        radGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = radGrad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Ground horizon atmospheric fog gradient at bottom edge
      const horizonFog = ctx.createLinearGradient(0, height - 160, 0, height);
      horizonFog.addColorStop(0, 'rgba(0, 0, 0, 0)');
      horizonFog.addColorStop(0.5, 'rgba(8, 12, 18, 0.45)');
      horizonFog.addColorStop(1, 'rgba(0, 0, 0, 0.95)');
      ctx.fillStyle = horizonFog;
      ctx.fillRect(0, height - 160, width, 160);

      if (!reducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    if (reducedMotion) {
      render(performance.now());
    } else {
      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerleave', handlePointerLeave);
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none"
      aria-hidden="true"
    />
  );
};

export default CinematicSmokeCanvas;
