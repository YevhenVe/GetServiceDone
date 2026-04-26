import styles from './schedule.module.scss';
import Button from '@/components/button/Button';

export default function SchedulePage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Schedule a Service</h1>
        <p className={styles.subtitle}>Fill out the form below and we'll get back to you as soon as possible to confirm your appointment.</p>
      </div>

      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="service">Service Type</label>
          <select id="service" name="service" required defaultValue="">
            <option value="" disabled>Select a service</option>
            <option value="plumbing">Plumbing</option>
            <option value="electrical">Electrical</option>
            <option value="hvac">HVAC / AC Repair</option>
            <option value="handyman">General Handyman</option>
            <option value="painting">Painting</option>
          </select>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="date">Preferred Date</label>
            <input type="date" id="date" name="date" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="time">Preferred Time</label>
            <input type="time" id="time" name="time" />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" placeholder="John Doe" required />
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="john@example.com" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="(555) 123-4567" required />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="details">Additional Details</label>
          <textarea id="details" name="details" rows={4} placeholder="Please describe the issue or service needed..."></textarea>
        </div>

        <Button type="submit" variant="primary" className={styles.submitBtn}>
          Request Appointment
        </Button>
      </form>
    </div>
  );
}
