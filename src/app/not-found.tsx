import Link from 'next/link';
import Button from '@/components/button/Button';
import styles from './not-found.module.scss';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.title}>Oops! Page Not Found</h2>
        <p className={styles.description}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className={styles.actions}>
          <Button href="/" variant="primary">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
