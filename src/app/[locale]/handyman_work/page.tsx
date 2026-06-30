import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { createCounter } from '@/utils/counter';
import Button from '@/components/button/Button';
import ServiceCTA from '@/components/common/ServiceCTA/ServiceCTA';
import styles from './handymanWork.module.scss';
import {
    HandymanCircleIcon,
    MountingIcon,
    CarpentryIcon,
    RepairIcon,
    MaintenanceIcon,
    ChevronRight,
    ShieldCheckIcon,
    AwardIcon,
    ClockIcon
} from '../../../../public/handyman-iconset/handyman_icons';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.handyman' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: '/handyman_work',
      languages: {
        en: '/en/handyman_work',
        es: '/es/handyman_work',
      },
    },
  };
}

export default function HandymanWorkPage() {
    const t = useTranslations('HandymanWork');
    const { next } = createCounter();

    return (
        <main className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroText}>
                            <nav className={styles.breadcrumbs}>
                                <Link href="/">{t('breadcrumbs').split(' ')[0]}</Link>
                                <ChevronRight />
                                <Link href="/#services">Services</Link>
                                <ChevronRight />
                                <span>{t('breadcrumbs')}</span>
                            </nav>

                            <div className={styles.badge}>
                                <HandymanCircleIcon />
                                <span className={styles.badgeText}>{t('badge')}</span>
                            </div>

                            <h1 className={styles.title}>
                                {t('title_1')} <span className={styles.highlight}>{t('title_highlight')}</span>
                            </h1>

                            <p className={styles.description}>
                                {t('description')}
                            </p>

                            <div className={styles.actions}>
                                <Button href="/schedule" variant="primary">
                                    {t('schedule')} <ChevronRight />
                                </Button>
                            </div>

                            <div className={styles.trustList}>
                                <div className={styles.trustItem}>
                                    <div className={styles.trustIcon}><ShieldCheckIcon /></div>
                                    <div className={styles.trustText}>
                                        <h4>{t('trust_1_title')}</h4>
                                        <p>{t('trust_1_desc')}</p>
                                    </div>
                                </div>
                                <div className={styles.trustItem}>
                                    <div className={styles.trustIcon}><AwardIcon /></div>
                                    <div className={styles.trustText}>
                                        <h4>{t('trust_2_title')}</h4>
                                        <p>{t('trust_2_desc')}</p>
                                    </div>
                                </div>
                                <div className={styles.trustItem}>
                                    <div className={styles.trustIcon}><ClockIcon /></div>
                                    <div className={styles.trustText}>
                                        <h4>{t('trust_3_title')}</h4>
                                        <p>{t('trust_3_desc')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.heroImageWrapper}>
                            <Image
                                src="/handyman-iconset/handyman-illustration.jpeg"
                                alt="Handyman and Home Maintenance"
                                width={500}
                                height={600}
                                className={styles.heroImage}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className={styles.mainContent}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>{t('main_title')}</h2>
                        <p>{t('main_desc')}</p>
                    </div>

                    <div className={styles.servicesGrid}>
                        {/* Category 1 */}
                        <div className={styles.serviceCategory}>
                            <h3><span className={styles.categoryNum}>{next()}</span> <MountingIcon /> {t('cat_1_title')}</h3>
                            <ul>
                                <li>{t.rich('cat_1_item_1', { strong: (c) => <strong>{c}</strong>, span: (c) => <span>{c}</span> })}</li>
                                <li>{t.rich('cat_1_item_2', { strong: (c) => <strong>{c}</strong>, span: (c) => <span>{c}</span> })}</li>
                                <li>{t.rich('cat_1_item_3', { strong: (c) => <strong>{c}</strong>, span: (c) => <span>{c}</span> })}</li>
                                <li>{t.rich('cat_1_item_4', { strong: (c) => <strong>{c}</strong>, span: (c) => <span>{c}</span> })}</li>
                            </ul>
                        </div>

                        {/* Category 2 */}
                        <div className={styles.serviceCategory}>
                            <h3><span className={styles.categoryNum}>{next()}</span> <CarpentryIcon /> {t('cat_2_title')}</h3>
                            <ul>
                                <li>{t.rich('cat_2_item_1', { strong: (c) => <strong>{c}</strong>, span: (c) => <span>{c}</span> })}</li>
                                <li>{t.rich('cat_2_item_2', { strong: (c) => <strong>{c}</strong>, span: (c) => <span>{c}</span> })}</li>
                                <li>{t.rich('cat_2_item_3', { strong: (c) => <strong>{c}</strong>, span: (c) => <span>{c}</span> })}</li>
                                <li>{t.rich('cat_2_item_4', { strong: (c) => <strong>{c}</strong>, span: (c) => <span>{c}</span> })}</li>
                            </ul>
                        </div>

                        {/* Category 3 */}
                        <div className={styles.serviceCategory}>
                            <h3><span className={styles.categoryNum}>{next()}</span> <RepairIcon /> {t('cat_3_title')}</h3>
                            <ul>
                                <li>{t.rich('cat_3_item_1', { strong: (c) => <strong>{c}</strong>, span: (c) => <span>{c}</span> })}</li>
                                <li>{t.rich('cat_3_item_2', { strong: (c) => <strong>{c}</strong>, span: (c) => <span>{c}</span> })}</li>
                                <li>{t.rich('cat_3_item_3', { strong: (c) => <strong>{c}</strong>, span: (c) => <span>{c}</span> })}</li>
                                <li>{t.rich('cat_3_item_4', { strong: (c) => <strong>{c}</strong>, span: (c) => <span>{c}</span> })}</li>
                            </ul>
                        </div>

                        {/* Category 4 */}
                        <div className={styles.serviceCategory}>
                            <h3><span className={styles.categoryNum}>{next()}</span> <MaintenanceIcon /> {t('cat_4_title')}</h3>
                            <ul>
                                <li>{t.rich('cat_4_item_1', { strong: (c) => <strong>{c}</strong>, span: (c) => <span>{c}</span> })}</li>
                                <li>{t.rich('cat_4_item_2', { strong: (c) => <strong>{c}</strong>, span: (c) => <span>{c}</span> })}</li>
                                <li>{t.rich('cat_4_item_3', { strong: (c) => <strong>{c}</strong>, span: (c) => <span>{c}</span> })}</li>
                                <li>{t.rich('cat_4_item_4', { strong: (c) => <strong>{c}</strong>, span: (c) => <span>{c}</span> })}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA Section */}
            <ServiceCTA
                title="Need Handyman Assistance?"
                description="We're ready to help with your next project. Get in touch today!"
            />
        </main>
    );
}
