import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { createCounter } from '@/utils/counter';
import Button from '@/components/button/Button';
import ServiceCTA from '@/components/common/ServiceCTA/ServiceCTA';
import styles from './smartHome.module.scss';
import {
    SmartHomeCircleIcon,
    SmartHomeIcon,
    HouseIcon,
    ShieldIcon,
    ChandelierIcon,
    TowerIcon,
    ChevronRight,
    ShieldCheckIcon,
    AwardIcon,
    ClockIcon,
} from '../../../../public/electrical-iconset/electrical_icons';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.smart_home' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: '/smart_home',
      languages: {
        en: '/en/smart_home',
        es: '/es/smart_home',
      },
    },
  };
}

export default function SmartHomePage() {
    const t = useTranslations('SmartHome');
    const tBreadcrumbs = useTranslations('Breadcrumbs');
    const { next } = createCounter();

    return (
        <main className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroText}>
                            <nav className={styles.breadcrumbs}>
                                <Link href="/">{tBreadcrumbs('home')}</Link>
                                <ChevronRight />
                                <Link href="/#services">{tBreadcrumbs('services')}</Link>
                                <ChevronRight />
                                <span>{t('breadcrumbs')}</span>
                            </nav>

                            <div className={styles.badge}>
                                <SmartHomeCircleIcon />
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
                                src="/smarthome-iconset/smarthome-illustration.jpg"
                                alt="Smart Home & Low Voltage"
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
                        {/* Category 1: Smart Essentials */}
                        <div className={styles.serviceCategory}>
                            <h3><span className={styles.categoryNum}>{next()}</span> <HouseIcon /> {t('cat_1_title')}</h3>
                            <p className={styles.categoryDesc}>{t('cat_1_desc')}</p>
                            <ul>
                                <li>{t('cat_1_item_1')}</li>
                                <li>{t('cat_1_item_2')}</li>
                                <li>{t('cat_1_item_3')}</li>
                                <li>{t('cat_1_item_4')}</li>
                                <li>{t('cat_1_item_5')}</li>
                            </ul>
                        </div>

                        {/* Category 2: Connected Home */}
                        <div className={styles.serviceCategory}>
                            <h3><span className={styles.categoryNum}>{next()}</span> <ShieldIcon /> {t('cat_2_title')}</h3>
                            <p className={styles.categoryDesc}>{t('cat_2_desc')}</p>
                            <ul>
                                <li>{t('cat_2_item_1')}</li>
                                <li>{t('cat_2_item_2')}</li>
                                <li>{t('cat_2_item_3')}</li>
                                <li>{t('cat_2_item_4')}</li>
                                <li>{t('cat_2_item_5')}</li>
                            </ul>
                        </div>

                        {/* Category 3: Luxury Living */}
                        <div className={styles.serviceCategory}>
                            <h3><span className={styles.categoryNum}>{next()}</span> <ChandelierIcon /> {t('cat_3_title')}</h3>
                            <p className={styles.categoryDesc}>{t('cat_3_desc')}</p>
                            <ul>
                                <li>{t('cat_3_item_1')}</li>
                            </ul>
                        </div>

                        {/* Category 4: Estate Living */}
                        <div className={styles.serviceCategory}>
                            <h3><span className={styles.categoryNum}>{next()}</span> <TowerIcon /> {t('cat_4_title')}</h3>
                            <p className={styles.categoryDesc}>{t('cat_4_desc')}</p>
                            <ul>
                                <li>{t('cat_4_item_1')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA Section */}
            <ServiceCTA
                title={t('cta_title')}
                description={t('cta_desc')}
            />
        </main>
    );
}
