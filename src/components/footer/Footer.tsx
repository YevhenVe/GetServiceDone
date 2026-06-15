import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import styles from "./Footer.module.scss";

export default function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navigation');

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.column}>
            <Link href="/" className={styles.logo}>Get Service Done</Link>
            <p className={styles.description}>
              {t('description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.heading}>{t('quick_links')}</h4>
            <ul className={styles.links}>
              <li><Link href="/">{tNav('home')}</Link></li>
              <li><Link href="/#services">{tNav('services')}</Link></li>
              <li><Link href="/#about-us">{tNav('about_us')}</Link></li>
              <li><Link href="/contacts">{tNav('contacts')}</Link></li>
              <li><Link href="/schedule">{tNav('schedule')}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.column}>
            <h4 className={styles.heading}>{t('our_services')}</h4>
            <ul className={styles.links}>
              <li><Link href="/electrical_work">{t('electrical')}</Link></li>
              <li><Link href="/appliance_work">{t('appliance')}</Link></li>
              <li><Link href="/handyman_work">{t('handyman')}</Link></li>
              {/* <li><Link href="/plumbing_work">Plumbing</Link></li> */}
            </ul>
          </div>

          {/* Business Hours */}
          <div className={styles.column}>
            <h4 className={styles.heading}>{t('business_hours')}</h4>
            <div className={styles.hours}>
              <p>{t('mon_fri')}</p>
              <p>{t('sat')}</p>
              <p>{t('sun')}</p>
              <p className={styles.emergency}>{t('emergency')}</p>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.dev}>
            {t('developed_by')} <a href="https://yevhen-portfolio-page.web.app/" target="_blank" rel="noopener noreferrer">Yevhen V.</a>
          </div>

          <p className={styles.copy} suppressHydrationWarning>
            &copy; {new Date().getFullYear()} {t('rights_reserved')}
          </p>

          <div className={styles.legal}>
            <Link href="/privacy">{t('privacy')}</Link>
            <Link href="/terms">{t('terms')}</Link>
            <Link href="/sitemap">{t('sitemap')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
