import styles from './Services.module.scss';
import Button from '@/components/button/Button';
import ServiceCard from './ServiceCard';
import { getServicesData } from './servicesData';
import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations('Services');
  const tData = useTranslations('ServicesData');
  const servicesData = getServicesData(tData);

  return (
    <section className={styles.services} id="services">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('title')}</h2>
          <p className={styles.subtitle}>
            {t('subtitle')}
          </p>
        </div>

        <div className={styles.grid}>
          {servicesData.map((data, index) => (
            <ServiceCard key={index} {...data} />
          ))}
        </div>

        <div className={styles.cta}>
          <Button href="/schedule">
            {t('schedule')}
          </Button>
        </div>
      </div>
    </section>
  );
}

