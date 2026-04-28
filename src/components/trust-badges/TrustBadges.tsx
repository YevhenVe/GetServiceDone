'use client';

import { motion } from 'framer-motion';
import styles from './TrustBadges.module.scss';

const badges = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="19" stroke="var(--badge-icon-color)" strokeWidth="2" fill="none" />
        <path d="M13 20l4 4 10-10" stroke="var(--badge-icon-color)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    title: 'Trusted Experts',
    description: 'Skilled professionals you can rely on.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="19" stroke="var(--badge-icon-color)" strokeWidth="2" fill="none" />
        <circle cx="20" cy="20" r="9" stroke="var(--badge-icon-color)" strokeWidth="2" fill="none" />
        <line x1="20" y1="11" x2="20" y2="20" stroke="var(--badge-icon-color)" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="20" x2="26" y2="24" stroke="var(--badge-icon-color)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'On-Time Service',
    description: 'We respect your time and always deliver.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="19" stroke="var(--badge-icon-color)" strokeWidth="2" fill="none" />
        <path d="M20 10l2.5 5 5.5.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.5-.8z" stroke="var(--badge-icon-color)" strokeWidth="2" strokeLinejoin="round" fill="none" />
        <line x1="16" y1="28" x2="16" y2="32" stroke="var(--badge-icon-color)" strokeWidth="2" strokeLinecap="round" />
        <line x1="24" y1="28" x2="24" y2="32" stroke="var(--badge-icon-color)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Quality Guaranteed',
    description: 'High standards. Every time.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function TrustBadges() {
  return (
    <motion.div
      className={styles.trustBadges}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {badges.map((badge, index) => (
        <motion.div key={index} className={styles.badge} variants={itemVariants}>
          <div className={styles.iconWrapper}>{badge.icon}</div>
          <h4 className={styles.title}>{badge.title}</h4>
          <p className={styles.description}>{badge.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
