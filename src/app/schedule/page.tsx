'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './schedule.module.scss';

export default function SchedulePage() {
  const router = useRouter();

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = event.data;
      if (data?.source !== 'korfield-booking') return;
      if (data.type === 'submit_success') {
        router.push('/thank-you');
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [router]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Schedule a Service</h1>
        <p className={styles.subtitle}>Fill out the form below and we&apos;ll get back to you as soon as possible to confirm your appointment.</p>
      </div>

      <div className={styles.iframeWrapper}>
        <iframe
          src="https://korfield.pro/book/gsd"
          title="Book a Service"
          className={styles.iframe}
          allowFullScreen
        />
      </div>
    </div>
  );
}
