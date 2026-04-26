import styles from './Services.module.scss';
import Button from '@/components/button/Button';

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.subtitle}>
            We offer a wide range of professional services to meet all your home maintenance needs.
          </p>
        </div>
        
        {/* Cards will go here later */}
        <div className={styles.grid}>
          
        </div>

        <div className={styles.cta}>
          <Button href="/schedule">
            Schedule Now
          </Button>
        </div>
      </div>
    </section>
  );
}
