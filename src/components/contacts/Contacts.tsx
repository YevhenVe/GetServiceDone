'use client';

import { useState, useEffect } from 'react';
import Button from '@/components/button/Button';
import styles from './Contacts.module.scss';

export default function Contacts() {
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
      setErrorMessage(error.message || 'An error occurred while sending your message.');
    }
  };

  return (
    <section className={styles.contacts} id="contacts">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Contact Us</h2>
          <p className={styles.subtitle}>Have a question or need a quote? Reach out to us today.</p>
        </div>

        <div className={styles.content}>
          {mounted ? (
            <form className={styles.form} onSubmit={handleSubmit}>
              {status === 'success' && (
                <div className={styles.successMessage}>
                  <p>Thank you! Your message has been sent successfully.</p>
                </div>
              )}
              {status === 'error' && (
                <div className={styles.errorMessage}>
                  <p>{errorMessage}</p>
                </div>
              )}
              <div className={styles.inputGroup}>
                <label htmlFor="contact-name">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="contact-email">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="How can we help?"
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
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          ) : (
            <div className={styles.formPlaceholder}>
              {/* Optional: Add a simple placeholder or spinner here */}
            </div>
          )}

          <div className={styles.info}>
            <div className={styles.infoItem}>
              <h3>Visit Us</h3>
              <a href="https://www.google.com/maps/dir/?api=1&destination=702+Old+Peachtree+Rd+NW,+Suite+200,+Suwanee,+GA+30024" target="_blank" rel="noopener noreferrer">702 Old Peachtree Rd NW, <br /> Suwanee, GA 30024 <br /> Suite 200</a>
            </div>
            <div className={styles.infoItem}>
              <h3>Call Us</h3>
              <a href="tel:+14703478788">(470) 347-8788</a> <br />
              <a href="tel:+14704333927">(470) 433-3927</a>
            </div>
            <div className={styles.infoItem}>
              <h3>Email Us</h3>
              <a href="mailto:info@getservicedone.com">info@getservicedone.com</a>
            </div>
            <div className={styles.workingHours}>
              <h3>Working Hours</h3>
              <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
              <p>Sat: 9:00 AM - 4:00 PM</p>
              <p>Sun: Emergency Only</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

