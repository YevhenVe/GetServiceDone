import React from 'react';
import { Link } from '@/i18n/routing';
import Button from '@/components/button/Button';
import { useTranslations } from 'next-intl';
import styles from './ServiceCTA.module.scss';

interface ServiceCTAProps {
    title?: string;
    description?: string;
    phone?: string;
    email?: string;
}

const ChevronRight = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
);

const PhoneIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

const MailIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
);

export default function ServiceCTA({
    title = "Ready to get it done?",
    description = "Contact us today for a free estimate on your next home project.",
    phone = "(470) 433-3927",
    email = "info@getservicedone.com"
}: ServiceCTAProps) {
    const t = useTranslations('ServiceCTA');
    
    // Use translations if props are not provided
    const displayTitle = title === "Ready to get it done?" ? t('title') : title;
    const displayDesc = description === "Contact us today for a free estimate on your next home project." ? t('description') : description;

    return (
        <section className={styles.bottomCta}>
            <div className={styles.container}>
                <div className={styles.ctaCard}>
                    <div className={styles.ctaText}>
                        <h2>{displayTitle}</h2>
                        <p>{displayDesc}</p>
                    </div>

                    <div className={styles.ctaInfo}>
                        <div className={styles.infoItem}>
                            <div className={styles.infoIcon}><PhoneIcon /></div>
                            <div className={styles.infoLabel}>
                                <span>{t('call_us')}</span>
                                <span>{phone}</span>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <div className={styles.infoIcon}><MailIcon /></div>
                            <div className={styles.infoLabel}>
                                <span>{t('email_us')}</span>
                                <span>{email}</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.ctaAction}>
                        <Button href="/schedule" variant="primary">
                            {t('schedule')} <ChevronRight />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
