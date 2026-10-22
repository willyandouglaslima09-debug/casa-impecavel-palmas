'use client';

import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const WIPES = {
  up: 'linear-gradient(to top, #000 calc(var(--ac-wipe) * 100%), transparent calc(var(--ac-wipe) * 100% + 20%))',
  down: 'linear-gradient(to bottom, #000 calc(var(--ac-wipe) * 100%), transparent calc(var(--ac-wipe) * 100% + 20%))',
  left: 'linear-gradient(to left, #000 calc(var(--ac-wipe) * 100%), transparent calc(var(--ac-wipe) * 100% + 20%))',
  right: 'linear-gradient(to right, #000 calc(var(--ac-wipe) * 100%), transparent calc(var(--ac-wipe) * 100% + 20%))',
  center: 'radial-gradient(farthest-corner at 50% 50%, #000 calc(var(--ac-wipe) * 100%), transparent calc(var(--ac-wipe) * 100% + 20%))'
};

export interface AnimatedContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  container?: string | HTMLElement | null;
  distance?: number;
  direction?: 'vertical' | 'horizontal';
  reverse?: boolean;
  duration?: number;
  ease?: string;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  blur?: number;
  rotate?: number;
  wipe?: 'none' | 'up' | 'down' | 'left' | 'right' | 'center';
  threshold?: number;
  delay?: number;
  stagger?: number;
  staggerFrom?: 'start' | 'center' | 'end' | 'edges' | 'random' | number;
  trigger?: 'scroll' | 'mount';
  once?: boolean;
  scrub?: boolean | number;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  container,
  distance = 30,
  direction = 'vertical',
  reverse = false,
  duration = 0.6,
  ease = 'power2.out',
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  blur = 0,
  rotate = 0,
  wipe = 'none',
  threshold = 0.15,
  delay = 0,
  stagger = 0,
  staggerFrom = 'start',
  trigger = 'scroll',
  once = true,
  scrub = false,
  className = '',
  style,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    let scroller: HTMLElement | null = null;
    if (typeof container === 'string') {
      scroller = document.querySelector(container);
    } else if (container instanceof HTMLElement) {
      scroller = container;
    }

    const ctx = gsap.context(() => {
      const targets = stagger > 0 && el.children.length ? Array.from(el.children) : el;
      const horizontal = direction === 'horizontal';
      const axis = horizontal ? 'x' : 'y';
      const sign = reverse ? -1 : 1;
      const mask = wipe !== 'none' ? WIPES[wipe] : null;

      // ⚡ Aceleração por Placa de Vídeo (GPU)
      gsap.set(el, { visibility: 'visible' });

      const from: gsap.TweenVars = {
        [axis]: distance * sign,
        scale,
        opacity: animateOpacity ? initialOpacity : 1,
        force3D: true
      };

      const to: gsap.TweenVars = {
        [axis]: 0,
        scale: 1,
        opacity: 1,
        duration,
        delay,
        ease,
        force3D: true,
        clearProps: 'will-change'
      };

      // Só aplica filtros pesados de Blur/Wipe se forem explicitamente ativados
      if (blur > 0) {
        from.filter = `blur(${blur}px)`;
        to.filter = 'blur(0px)';
      }
      if (rotate) {
        from.rotation = rotate * sign;
        to.rotation = 0;
      }
      if (mask) {
        gsap.set(targets, { maskImage: mask, WebkitMaskImage: mask });
        from['--ac-wipe' as keyof gsap.TweenVars] = 0;
        to['--ac-wipe' as keyof gsap.TweenVars] = 1;
      }
      if (stagger > 0) {
        to.stagger = { each: stagger, from: staggerFrom };
      }

      const tl = gsap.timeline({ paused: true });
      tl.fromTo(targets, from, to);

      if (trigger === 'mount') {
        tl.play();
        return;
      }

      const start = `top ${(1 - threshold) * 100}%`;

      if (scrub) {
        ScrollTrigger.create({
          trigger: el,
          scroller: scroller || undefined,
          start,
          end: `top 20%`,
          scrub: scrub === true ? true : Number(scrub) || 0.5,
          animation: tl
        });
        return;
      }

      ScrollTrigger.create({
        trigger: el,
        scroller: scroller || undefined,
        start,
        once,
        onEnter: () => tl.play(),
        onLeaveBack: once ? undefined : () => tl.reverse()
      });
    }, el);

    return () => ctx.revert();
  }, [
    container,
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    blur,
    rotate,
    wipe,
    threshold,
    delay,
    stagger,
    staggerFrom,
    trigger,
    once,
    scrub
  ]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        visibility: 'hidden',
        willChange: 'transform, opacity',
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedContent;