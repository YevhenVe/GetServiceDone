'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useTranslations } from 'next-intl';
import styles from './AboutUs.module.scss';

function AnimatedNumber({ value, duration = 2, suffix = '' }: { value: number; duration?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
  const hasAnimated = useRef(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && inView && !hasAnimated.current) {
      hasAnimated.current = true;
      animate(count, value, { duration });
    }
  }, [count, inView, value, duration, isClient]);

  return (
    <span ref={ref}>
      {/* Google will see this — real number, visually hidden after hydration */}
      <span style={{ display: isClient ? 'none' : 'inline' }}>
        {value}{suffix}
      </span>
      {/* users will see this - animation, hidden from SSR */}
      {isClient && <motion.span>{rounded}</motion.span>}
    </span>
  );
}

export default function AboutUs() {
  const t = useTranslations('AboutUs');

  return (
    <section className={styles.about} id="about-us">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{t('title')}</h2>
          <p className={styles.text}>
            {t.rich('p1', {
              brand: (chunks) => <span className={styles.brand}>{chunks}</span>
            })}
          </p>
          <p className={styles.text}>
            {t('p2')}
          </p>
          <p className={styles.text}>
            {t('p3')}
          </p>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>
                <AnimatedNumber value={10} duration={3} suffix="+" />
              </span>
              <span className={styles.statLabel}>{t('exp')}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>
                <AnimatedNumber value={5} duration={2.5} suffix="k+" />
              </span>
              <span className={styles.statLabel}>{t('clients')}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>
                <AnimatedNumber value={24} duration={1.5} suffix="/7" />
              </span>
              <span className={styles.statLabel}>{t('support')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
