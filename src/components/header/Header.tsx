'use client';

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import Button from "@/components/button/Button";
import styles from "./Header.module.scss";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>GetServiceDone</Link>
        <nav className={styles.nav}>
          <Button to="services" variant="ghost">Services</Button>
          <Button to="about-us" variant="ghost">About Us</Button>
          <Button to="contacts" variant="ghost">Contacts</Button>

          {/* Theme Toggle */}
          <button
            className={`${styles.themeToggle} ${theme === 'dark' ? styles.dark : ''}`}
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            <span className={styles.toggleKnob}>
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              )}
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
