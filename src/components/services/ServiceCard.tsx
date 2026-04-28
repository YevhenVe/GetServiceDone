'use client';

import React from 'react';
import Image from 'next/image';
import styles from './ServiceCard.module.scss';
import Button from '@/components/button/Button';
import { motion } from 'framer-motion';

export interface ServiceItem {
  icon: React.ReactNode;
  text: string;
}

export interface ServiceCardProps {
  title: string;
  highlightText?: string;
  description?: string;
  services: ServiceItem[];
  mainIcon?: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  linkHref: string;
  imagePosition?: 'left' | 'right';
}

export default function ServiceCard({
  title,
  highlightText,
  description,
  services,
  mainIcon,
  imageSrc,
  imageAlt,
  linkHref,
  imagePosition = 'right',
}: ServiceCardProps) {
  const cardClassName = `${styles.card} ${imagePosition === 'left' ? styles.imageLeft : ''}`.trim();

  return (
    <motion.div 
      className={cardClassName}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.content}>
        {mainIcon && <div className={styles.iconWrapper}>{mainIcon}</div>}
        <h3 className={styles.title}>
          {title} {highlightText && <span className={styles.highlight}>{highlightText}</span>}
        </h3>
        {description && <p className={styles.description}>{description}</p>}
        <ul className={styles.serviceList}>
          {services.map((service, index) => (
            <li key={index} className={styles.serviceItem}>
              {service.icon} <span>{service.text}</span>
            </li>
          ))}
        </ul>
        <div className={styles.action}>
          <Button href={linkHref} variant="primary">
            Learn More
          </Button>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={styles.image}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </motion.div>
  );
}
