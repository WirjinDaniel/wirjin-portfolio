'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function useHeroParallax() {
  const heroRef = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const hero = heroRef.current;
    const photo = photoRef.current;
    const text = textRef.current;
    if (!hero || !photo || !text) return;

    const photoTween = gsap.to(photo, {
      scale: 1.5,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      },
    });

    const textTween = gsap.to(text, {
      y: -72,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: '8% top',
        end: '52% top',
        scrub: 1,
      },
    });

    return () => {
      photoTween.scrollTrigger?.kill();
      textTween.scrollTrigger?.kill();
    };
  }, []);

  return { heroRef, photoRef, textRef };
}
