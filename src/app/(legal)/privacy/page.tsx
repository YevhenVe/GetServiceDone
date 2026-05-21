import Link from 'next/link';
import styles from '../legal.module.scss';

export default function PrivacyPolicy() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: April 26, 2026</p>

        <div className={styles.section}>
          <h2>1. Information We Collect</h2>
          <p>
            When you use GetServiceDone, we may collect the following types of information:
          </p>
          <ul>
            <li>Personal information such as your name, email address, phone number, and home address when you schedule a service or contact us.</li>
            <li>Usage data including your IP address, browser type, pages visited, and time spent on our website.</li>
            <li>Cookies and similar tracking technologies to improve your browsing experience.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process and fulfill your service requests.</li>
            <li>Communicate with you about appointments, updates, and promotions.</li>
            <li>Improve our website, services, and customer experience.</li>
            <li>Comply with legal obligations and protect our rights.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>3. Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your data with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep your information confidential.
          </p>
        </div>

        <div className={styles.section}>
          <h2>4. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </div>

        <div className={styles.section}>
          <h2>5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion of your personal data.</li>
            <li>Opt out of marketing communications at any time.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <strong>info@getservicedone.com</strong>.
          </p>
        </div>

        <Link href="/" className={styles.backLink}>← Back to Home</Link>
      </div>
    </div>
  );
}
