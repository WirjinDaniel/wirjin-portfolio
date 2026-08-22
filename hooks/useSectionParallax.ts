'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Applies a subtle horizontal parallax to the section heading (h2)
 * and a vertical drift to the section body as they scroll through the viewport.
 */
export function useSectionParallax() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const heading = section.querySelector('h2');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!heading || reduceMotion) return;

    const tween = gsap.fromTo(
      heading,
      { x: -24 },
      {
        x: 24,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      gsap.set(heading, { clearProps: 'x' });
    };
  }, []);

  return sectionRef;
}
