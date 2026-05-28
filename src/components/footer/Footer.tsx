import Link from 'next/link';
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.column}>
            <Link href="/" className={styles.logo}>Get Service Done</Link>
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
              <li><Link href="/electrical_work">Electrical</Link></li>
              <li><Link href="/appliance_work">Appliance</Link></li>
              <li><Link href="/handyman_work">Handyman</Link></li>
              {/* <li><Link href="/plumbing_work">Plumbing</Link></li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.column}>
            <h4 className={styles.heading}>Contact Us</h4>
            <p className={styles.contactInfo}>
              702 Old Peachtree Rd NW, Suwanee, GA 30024 Suite 200<br />
              (470) 433-3927<br />
              (470) 347-8788<br />
              info@getservicedone.com
            </p>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.dev}>
            Developed by <a href="https://yevhen-portfolio-page.web.app/" target="_blank" rel="noopener noreferrer">Yevhen V.</a>
          </div>

          <p className={styles.copy} suppressHydrationWarning>
            &copy; {new Date().getFullYear()} Get Service Done. All rights reserved.
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
