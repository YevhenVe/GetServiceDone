import Link from 'next/link';
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.column}>
            <Link href="/" className={styles.logo}>GetServiceDone</Link>
            <p className={styles.description}>
              Professional home services you can count on. From plumbing to electrical work, we get the job done right.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.heading}>Quick Links</h4>
            <ul className={styles.links}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#services">Services</Link></li>
              <li><Link href="/#about-us">About Us</Link></li>
              <li><Link href="/#contacts">Contacts</Link></li>
              <li><Link href="/schedule">Schedule Now</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.column}>
            <h4 className={styles.heading}>Our Services</h4>
            <ul className={styles.links}>
              <li>Plumbing</li>
              <li>Electrical</li>
              <li>HVAC / AC Repair</li>
              <li>Handyman</li>
              <li>Painting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.column}>
            <h4 className={styles.heading}>Contact Us</h4>
            <p className={styles.contactInfo}>
              123 Service St, Home City, HC 12345<br />
              (555) 012-3456<br />
              support@getservicedone.com
            </p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy} suppressHydrationWarning>
            &copy; {new Date().getFullYear()} GetServiceDone. All rights reserved.
          </p>
          <div className={styles.legal}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
