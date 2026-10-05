'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './HeroBackground.module.scss';
import { HERO_BACKGROUNDS, SLIDE_INTERVAL_MS } from './hero-carousel.config';

export default function HeroBackground() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Respect the user's reduced-motion preference: never autoplay.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const interval = setInterval(() => {
      setActiveIndex((index) => (index + 1) % HERO_BACKGROUNDS.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {HERO_BACKGROUNDS.map((src, index) => {
        const active = index === activeIndex;

        return (
          <div
            key={src}
            className={`${styles.slide} ${active ? styles.slideActive : ''}`}
            aria-hidden={!active}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="100vw"
              priority
              className={`${styles.image}${active ? ` ${styles.kenburns}` : ''}`}
            />
          </div>
        );
      })}
      <div className={styles.gradientOverlay} aria-hidden="true" />
    </>
  );
}
