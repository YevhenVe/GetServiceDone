'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/routing';
import styles from './schedule.module.scss';

export default function SchedulePage() {
  const t = useTranslations('Schedule');
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
        <h1 className={styles.title}>{t('title')}</h1>
        <p className={styles.subtitle}>{t('subtitle')}</p>
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
