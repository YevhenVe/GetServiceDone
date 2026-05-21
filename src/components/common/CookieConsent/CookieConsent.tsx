'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/button/Button';
import styles from './CookieConsent.module.scss';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Delay showing the banner slightly for a smoother entry experience
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.consentBanner}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.iconWrapper}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5Z" />
                  <path d="M8.5 14.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6-1.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2.5 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
                </svg>
              </div>
              <div className={styles.textContainer}>
                <h4 className={styles.title}>Cookie Consent</h4>
                <p className={styles.description}>
                  We use cookies to enhance your experience, analyze site traffic, and support our marketing efforts. By continuing to browse, you agree to our{' '}
                  <Link href="/privacy" className={styles.link}>
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className={styles.actions}>
              <button onClick={handleDecline} className={styles.declineBtn}>
                Decline
              </button>
              <Button onClick={handleAccept} variant="primary" className={styles.acceptBtn}>
                Accept
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
