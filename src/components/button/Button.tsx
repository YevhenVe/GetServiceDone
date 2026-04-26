'use client';

import React from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { usePathname } from 'next/navigation';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  to?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export default function Button({ 
  href, 
  to,
  variant = 'primary', 
  className = '', 
  children, 
  ...props 
}: ButtonProps) {
  const pathname = usePathname();
  const combinedClassName = `${styles.button} ${styles[variant]} ${className}`.trim();

  if (to) {
    if (pathname !== '/') {
      return (
        <Link href={`/#${to}`} className={combinedClassName}>
          {children}
        </Link>
      );
    }
    return (
      <ScrollLink to={to} spy smooth offset={-64} duration={500} className={combinedClassName} style={{cursor: 'pointer'}}>
        {children}
      </ScrollLink>
    );
  }

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
