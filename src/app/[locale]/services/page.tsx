import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Services from '@/components/services/Services';
import ScrollToTop from '@/components/common/ScrollToTop';
import styles from './services.module.scss';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.services' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: '/services',
      languages: {
        en: '/en/services',
        es: '/es/services',
      },
    },
  };
}

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Services />
      </div>
      <ScrollToTop />
    </main>
  );
}