'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Button from '@/components/button/Button';
import styles from './Contacts.module.scss';

export default function Contacts() {
  const t = useTranslations('Contacts');
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id.replace('contact-', '')]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      console.error('Submit error:', error);
      setStatus('error');
      setErrorMessage(error.message || t('error_default'));
    }
  };

  return (
    <section className={styles.contacts} id="contacts">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('title')}</h2>
          <p className={styles.subtitle}>{t('subtitle')}</p>
        </div>

        <div className={styles.content}>
          {mounted ? (
            <form className={styles.form} onSubmit={handleSubmit}>
              {status === 'success' && (
                <div className={styles.successMessage}>
                  <p>{t('success')}</p>
                </div>
              )}
              {status === 'error' && (
                <div className={styles.errorMessage}>
                  <p>{errorMessage}</p>
                </div>
              )}
              <div className={styles.inputGroup}>
                <label htmlFor="contact-name">{t('name_label')}</label>
                <input
                  type="text"
                  id="contact-name"
                  placeholder={t('name_placeholder')}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="contact-email">{t('email_label')}</label>
                <input
                  type="email"
                  id="contact-email"
                  placeholder={t('email_placeholder')}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="contact-message">{t('message_label')}</label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder={t('message_placeholder')}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                ></textarea>
              </div>
              <Button
                type="submit"
                variant="primary"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? t('btn_sending') : t('btn_send')}
              </Button>
            </form>
          ) : (
            <div className={styles.formPlaceholder}>
              {/* Optional: Add a simple placeholder or spinner here */}
            </div>
          )}

          <div className={styles.info}>
            <div className={styles.infoItem}>
              <h3>{t('visit_us')}</h3>
              <a href="https://www.google.com/maps/dir/?api=1&destination=702+Old+Peachtree+Rd+NW,+Suite+200,+Suwanee,+GA+30024" target="_blank" rel="noopener noreferrer">702 Old Peachtree Rd NW, <br /> Suwanee, GA 30024 <br /> Suite 200</a>
            </div>
            <div className={styles.infoItem}>
              <h3>{t('call_us')}</h3>
              <a href="tel:+14703478788">(470) 347-8788</a> <br />
              <a href="tel:+14704333927">(470) 433-3927</a>
            </div>
            <div className={styles.infoItem}>
              <h3>{t('email_us')}</h3>
              <a href="mailto:info@getservicedone.com">info@getservicedone.com</a>
            </div>
            <div className={styles.workingHours}>
              <h3>{t('working_hours')}</h3>
              <p>{t('mon_fri')}</p>
              <p>{t('sat')}</p>
              <p>{t('sun')}</p>

              <div className={styles.socialMedia}>
                <a href="https://www.facebook.com/getservicedoneinc" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </a>
                <a href="https://www.instagram.com/get_service_done_inc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                </a>
                {/* <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

