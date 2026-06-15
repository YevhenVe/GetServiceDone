import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import styles from './sitemap.module.scss';
import ScrollToTop from '@/components/common/ScrollToTop';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.sitemap' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: '/sitemap',
      languages: {
        en: '/en/sitemap',
        es: '/es/sitemap',
      },
    },
  };
}

export default function SitemapPage() {
  const t = useTranslations('Sitemap');
  const tNav = useTranslations('Navigation');
  const tServices = useTranslations('ServicesData');

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t('title')}</h1>
        <p className={styles.subtitle}>{t('subtitle')}</p>

        <div className={styles.content}>
          {/* Main Pages */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('main_pages')}</h2>
            <ul className={styles.list}>
              <li><Link href="/">{tNav('home')}</Link></li>
              <li><Link href="/#services">{tNav('services')}</Link></li>
              <li><Link href="/#about-us">{tNav('about_us')}</Link></li>
              <li><Link href="/contacts">{tNav('contacts')}</Link></li>
              <li><Link href="/schedule">{tNav('schedule')}</Link></li>
            </ul>
          </section>

          {/* Services */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('services')}</h2>
            <ul className={styles.list}>
              <li><Link href="/electrical_work">{tServices('electrical.title')} {tServices('electrical.highlightText')}</Link></li>
              <li><Link href="/appliance_work">{tServices('appliance.title')} {tServices('appliance.highlightText')}</Link></li>
              <li><Link href="/handyman_work">{tServices('handyman.title')} {tServices('handyman.highlightText')}</Link></li>
            </ul>
          </section>

          {/* Legal */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('legal')}</h2>
            <ul className={styles.list}>
              <li><Link href="/privacy">{t('privacy')}</Link></li>
              <li><Link href="/terms">{t('terms')}</Link></li>
            </ul>
          </section>
        </div>
      </div>
      <ScrollToTop />
    </main>
  );
}

function useTranslations(namespace: string) {
  const { useTranslations: nextUseTranslations } = require('next-intl');
  return nextUseTranslations(namespace);
}
