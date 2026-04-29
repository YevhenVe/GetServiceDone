import Link from 'next/link';
import styles from '../legal.module.scss';

export default function TermsOfService() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.updated}>Last updated: April 26, 2026</p>

        <div className={styles.section}>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the GetServiceDone website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
        </div>

        <div className={styles.section}>
          <h2>2. Services</h2>
          <p>
            GetServiceDone provides professional home maintenance and repair services including, but not limited to, plumbing, electrical work, HVAC repair, painting, and general handyman services. All services are subject to availability in your area.
          </p>
        </div>

        <div className={styles.section}>
          <h2>3. Scheduling and Cancellations</h2>
          <ul>
            <li>Service appointments can be scheduled through our website or by contacting us directly.</li>
            <li>Cancellations must be made at least 24 hours before the scheduled appointment time.</li>
            <li>Late cancellations or no-shows may be subject to a cancellation fee.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>4. Pricing and Payment</h2>
          <p>
            Service prices are provided as estimates and may vary based on the actual scope of work. Final pricing will be confirmed before work begins. Payment is due upon completion of the service unless otherwise agreed.
          </p>
        </div>

        <div className={styles.section}>
          <h2>5. Warranties and Guarantees</h2>
          <p>
            We stand behind the quality of our work. All services come with a 30-day satisfaction guarantee. If you are not satisfied with the work performed, contact us and we will make it right at no additional cost.
          </p>
        </div>

        <div className={styles.section}>
          <h2>6. Limitation of Liability</h2>
          <p>
            GetServiceDone shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific service in question.
          </p>
        </div>

        <div className={styles.section}>
          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated effective date. Your continued use of our services constitutes acceptance of the modified terms.
          </p>
        </div>

        <div className={styles.section}>
          <h2>8. Contact Us</h2>
          <p>
            For questions about these Terms of Service, contact us at{' '}
            <strong>info@getservicedone.com</strong> or call us at <strong>(555) 012-3456</strong>.
          </p>
        </div>

        <Link href="/" className={styles.backLink}>← Back to Home</Link>
      </div>
    </div>
  );
}
