'use client';

import CountUp from 'react-countup';
import styles from './AboutUs.module.scss';

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
                <CountUp end={10} duration={5} suffix="+" enableScrollSpy scrollSpyOnce />
              </span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>
                <CountUp end={5} duration={5} suffix="k+" enableScrollSpy scrollSpyOnce />
              </span>
              <span className={styles.statLabel}>Happy Clients</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>
                <CountUp end={24} duration={5} suffix="/7" enableScrollSpy scrollSpyOnce />
              </span>
              <span className={styles.statLabel}>Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
