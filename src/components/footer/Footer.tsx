import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} GetServiceDone. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
