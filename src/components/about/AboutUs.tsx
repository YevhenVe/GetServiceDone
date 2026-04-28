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
            At <span className={styles.brand}>GetServiceDone</span>, we believe that every home deserves the best care.
            Founded with a mission to simplify home maintenance, we've grown into a trusted partner for thousands of homeowners.
          </p>
          <p className={styles.text}>
            Our team consists of certified professionals with years of experience in plumbing, electrical work, HVAC, and general repairs.
            We pride ourselves on our transparency, reliability, and commitment to quality.
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
