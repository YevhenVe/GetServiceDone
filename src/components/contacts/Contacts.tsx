'use client';

import { useState, useEffect } from 'react';
import Button from '@/components/button/Button';
import styles from './Contacts.module.scss';

export default function Contacts() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className={styles.contacts} id="contacts">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Contact Us</h2>
          <p className={styles.subtitle}>Have a question or need a quote? Reach out to us today.</p>
        </div>

        <div className={styles.content}>
          {mounted ? (
            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="contact-name">Name</label>
                <input type="text" id="contact-name" placeholder="Your Name" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="contact-email">Email</label>
                <input type="email" id="contact-email" placeholder="Your Email" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" rows={5} placeholder="How can we help?"></textarea>
              </div>
              <Button type="button" variant="primary">Send Message</Button>
            </form>
          ) : (
            <div className={styles.formPlaceholder}>
              {/* Optional: Add a simple placeholder or spinner here */}
            </div>
          )}

          <div className={styles.info}>
            <div className={styles.infoItem}>
              <h3>Visit Us</h3>
              <p>123 Service St, Home City, HC 12345</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Call Us</h3>
              <p>(555) 012-3456</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Email Us</h3>
              <p>support@getservicedone.com</p>
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

