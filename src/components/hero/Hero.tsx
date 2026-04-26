'use client';

import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';
import Button from '@/components/button/Button';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.left}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Professional<br />
            <span className={styles.highlight}>Home Services</span>
          </h1>
          <p className={styles.description}>
            We provide top-tier home maintenance and repair services. Trust our experts to get the job done right the first time, with quality you can count on.
          </p>
          <div className={styles.actions}>
            <Button href="/schedule">
              Schedule Now
            </Button>
          </div>
        </div>
      </div>
      <ScrollLink to="services" spy smooth offset={-64} duration={500} className={styles.scrollDownBtn}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </ScrollLink>
    </section>
  );
}