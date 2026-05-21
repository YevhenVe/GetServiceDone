import type { Metadata } from 'next';
import Button from '@/components/button/Button';
import styles from './thankYou.module.scss';

export const metadata: Metadata = {
  title: 'Thank You | Get Service Done',
  description: 'Your service has been successfully scheduled. We will contact you shortly to confirm your appointment.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <svg
            className={styles.checkIcon}
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle className={styles.checkCircle} cx="26" cy="26" r="25" stroke="currentColor" strokeWidth="2" />
            <path className={styles.checkMark} d="M14.1 27.2l7.1 7.2 16.7-16.8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h1 className={styles.title}>Thank You!</h1>
        <p className={styles.description}>
          Your service has been successfully scheduled. We&apos;ll get back to you shortly to confirm your appointment details.
        </p>

        <div className={styles.infoCards}>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}>📧</span>
            <p className={styles.infoText}>Check your email for a confirmation</p>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}>📞</span>
            <p className={styles.infoText}>We&apos;ll call you to finalize the details</p>
          </div>
        </div>

        <div className={styles.actions}>
          <Button href="/" variant="primary">
            Back to Home
          </Button>
        </div>
      </div>

      {/* 
        Google Ads Conversion Tracking Tag
        Replace the snippet below with your actual Google Ads conversion tag.
        You can also use Google Tag Manager (GTM) instead.
        
        Example:
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-XXXXXXXXXX');
            gtag('event', 'conversion', {
              'send_to': 'AW-XXXXXXXXXX/XXXXXXXXXXX',
              'value': 1.0,
              'currency': 'USD'
            });
          `}
        </Script>
      */}
    </div>
  );
}
