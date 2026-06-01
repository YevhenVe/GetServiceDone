'use client';

import { useState } from 'react';
import { Link } from '@/i18n/routing';
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import Button from "@/components/button/Button";
import LanguageSwitcher from "@/components/common/LanguageSwitcher/LanguageSwitcher";
import { useTranslations } from 'next-intl';
import styles from "./Header.module.scss";

const NavLinks = ({ closeMenu, theme, toggleTheme }: {
  closeMenu: () => void;
  theme: string;
  toggleTheme: () => void;
}) => {
  const t = useTranslations('Navigation');
  return (
    <>
      <div className={styles.navLinks}>
        <Button to="services" variant="ghost" activeClass={styles.active} onClick={closeMenu}>{t('services')}</Button>
        <Button to="about-us" variant="ghost" activeClass={styles.active} onClick={closeMenu}>{t('about_us')}</Button>
        <Button to="contacts" variant="ghost" activeClass={styles.active} onClick={closeMenu}>{t('contacts')}</Button>
      </div>
      <div className={styles.actions}>
        <div className={styles.navLinks}>
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
          <LanguageSwitcher />
        </div>
      </div>
    </>
  );
};

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <Image
              src="/logo.svg"
              alt="Get Service Done Logo"
              width={32}
              height={32}
              className={styles.logoImage}
            />
            <span>Get Service Done</span>
          </Link>

          <nav className={styles.desktopNav}>
            <NavLinks closeMenu={closeMenu} theme={theme} toggleTheme={toggleTheme} />
          </nav>

          <button
            className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <nav className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}>
        <NavLinks closeMenu={closeMenu} theme={theme} toggleTheme={toggleTheme} />
      </nav>
    </>
  );
}