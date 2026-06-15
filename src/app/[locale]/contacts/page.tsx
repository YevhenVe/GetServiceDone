import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Contacts from '@/components/contacts/Contacts';
import ScrollToTop from '@/components/common/ScrollToTop';
import styles from './contacts.module.scss';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.contacts' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: '/contacts',
      languages: {
        en: '/en/contacts',
        es: '/es/contacts',
      },
    },
  };
}

export default function ContactsPage() {
  return (
    <main className={styles.page}>
      <Contacts />
      <ScrollToTop />
    </main>
  );
}
