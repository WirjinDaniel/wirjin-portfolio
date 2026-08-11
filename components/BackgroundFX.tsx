'use client';

import { useSpotlight } from '@/hooks/useSpotlight';

export default function BackgroundFX() {
  useSpotlight('spotlight');

  return (
    <>
      <div className="mesh" />
      <div className="spotlight" id="spotlight" />
    </>
  );
}
