'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import styles from './AboutUs.module.scss';

function AnimatedNumber({ value, duration = 2, suffix = '' }: { value: number; duration?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: duration });
    }
  }, [count, inView, value, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function AboutUs() {
  return (
    <section className={styles.about} id="about-us">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>About Us</h2>
          <p className={styles.text}>
            At <span className={styles.brand}>Get Service Done</span>, we believe your home is your ultimate sanctuary, deserving nothing less than uncompromising perfection.
            Founded on a relentless pursuit of excellence, we have evolved into the premier authority for elite home maintenance and property transformation.
          </p>
          <p className={styles.text}>
            Our distinguished roster of certified master technicians brings decades of unparalleled expertise across a comprehensive spectrum of disciplines.
            From engineering sophisticated electrical infrastructures and luxury plumbing systems to executing flawless home appliance integrations and bespoke handyman craftsmanship, we approach every task with absolute precision.
          </p>
          <p className={styles.text}>
            We transcend standard repairs to deliver true peace of mind.
            Built on a foundation of rigorous industry certifications, unwavering transparency, and an absolute commitment to quality, GetServiceDone ensures every corner of your home functions flawlessly.
            We do not just service homes; we elevate your standard of living.
          </p>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>
                <AnimatedNumber value={10} duration={3} suffix="+" />
              </span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>
                <AnimatedNumber value={5} duration={2.5} suffix="k+" />
              </span>
              <span className={styles.statLabel}>Happy Clients</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>
                <AnimatedNumber value={24} duration={1.5} suffix="/7" />
              </span>
              <span className={styles.statLabel}>Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
