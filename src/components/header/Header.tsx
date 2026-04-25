import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <span className={styles.logo}>GetServiceDone</span>
        <nav className={styles.nav}>
          <a href="/">Home</a>
        </nav>
      </div>
    </header>
  );
}
