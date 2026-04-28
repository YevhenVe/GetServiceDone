'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/button/Button';
import styles from './applianceWork.module.scss';
import {
    ApplianceCircleIcon,
    KitchenIcon,
    LaundryIcon,
    ComfortIcon
} from '../../../public/appliance-iconset/appliance_icons';

// Simple helper icons
const ChevronRight = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
);

const ShieldCheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <polyline points="9 12 11 14 15 10"></polyline>
    </svg>
);

const AwardIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"></circle>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
    </svg>
);

const ClockIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
);

const PhoneIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

const MailIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
);

export default function ApplianceWorkPage() {
    return (
        <main className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroText}>
                            <nav className={styles.breadcrumbs}>
                                <Link href="/">Home</Link>
                                <ChevronRight />
                                <Link href="/#services">Services</Link>
                                <ChevronRight />
                                <span>Home Appliance</span>
                            </nav>

                            <div className={styles.badge}>
                                <ApplianceCircleIcon />
                                <span className={styles.badgeText}>Our Services</span>
                            </div>

                            <h1 className={styles.title}>
                                Home <span className={styles.highlight}>Appliance</span>
                            </h1>

                            <p className={styles.description}>
                                Expert appliance installation, maintenance, and repair services for residential properties.
                            </p>

                            <div className={styles.actions}>
                                <Button href="/schedule" variant="primary">
                                    Schedule Now <ChevronRight />
                                </Button>
                            </div>

                            <div className={styles.trustList}>
                                <div className={styles.trustItem}>
                                    <div className={styles.trustIcon}><ShieldCheckIcon /></div>
                                    <div className={styles.trustText}>
                                        <h4>Licensed & Insured</h4>
                                        <p>Fully certified technicians</p>
                                    </div>
                                </div>
                                <div className={styles.trustItem}>
                                    <div className={styles.trustIcon}><AwardIcon /></div>
                                    <div className={styles.trustText}>
                                        <h4>Quality Guaranteed</h4>
                                        <p>Work backed by warranty</p>
                                    </div>
                                </div>
                                <div className={styles.trustItem}>
                                    <div className={styles.trustIcon}><ClockIcon /></div>
                                    <div className={styles.trustText}>
                                        <h4>24/7 Support</h4>
                                        <p>We're here when you need us</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.heroImageWrapper}>
                            <Image
                                src="/appliance-iconset/appliance-illustration.jpeg"
                                alt="Professional Technician"
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
                        <h2>What We Offer</h2>
                        <p>Comprehensive appliance solutions tailored to your specific needs.</p>
                    </div>

                    <div className={styles.servicesGrid}>
                        {/* Category 1 */}
                        <div className={styles.serviceCategory}>
                            <h3><span className={styles.categoryNum}>1</span> <KitchenIcon /> Kitchen Appliance Solutions</h3>
                            <ul>
                                <li><strong>Refrigerators & Freezers:</strong> <span>Repair of cooling systems, compressor replacement, ice maker repairs, and water line installations.</span></li>
                                <li><strong>Dishwashers:</strong> <span>Full mechanical installation, pump/motor repairs, and leak troubleshooting.</span></li>
                                <li><strong>Ovens, Ranges & Stoves:</strong> <span>Repair of heating elements, igniters, and temperature calibration (Electric and Gas).</span></li>
                                <li><strong>Microwaves & Vent Hoods:</strong> <span>Professional mounting and repair of built-in/over-the-range units and ventilation motors.</span></li>
                                <li><strong>Garbage Disposals:</strong> <span>Unjamming, repair, and new installation of heavy-duty disposal units.</span></li>
                            </ul>
                        </div>

                        {/* Category 2 */}
                        <div className={styles.serviceCategory}>
                            <h3><span className={styles.categoryNum}>2</span> <LaundryIcon /> Laundry Room Services</h3>
                            <ul>
                                <li><strong>Washing Machines:</strong> <span>Repair of drums, pumps, and sensors; leveling and vibration reduction; water hose replacement.</span></li>
                                <li><strong>Clothes Dryers:</strong> <span>Thermal fuse and heating element replacement, belt repairs, and professional Dryer Vent Cleaning to prevent fires.</span></li>
                                <li><strong>Stackable Units:</strong> <span>Specialty installation and maintenance for space-saving laundry sets.</span></li>
                            </ul>
                        </div>

                        {/* Category 3 */}
                        <div className={styles.serviceCategory}>
                            <h3><span className={styles.categoryNum}>3</span> <ComfortIcon /> Water & Comfort Appliances</h3>
                            <ul>
                                <li><strong>Electric Water Heaters:</strong> <span>Full system replacement, element repair, and tank flushing for longevity.</span></li>
                                <li><strong>Water Softeners & Filtration:</strong> <span>Installation and maintenance of whole-home water treatment systems.</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA Section */}
            <section className={styles.bottomCta}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <div className={styles.ctaText}>
                            <h2>Need Appliance Assistance?</h2>
                            <p>We're ready to help with your next project. Get in touch today!</p>
                        </div>

                        <div className={styles.ctaInfo}>
                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}><PhoneIcon /></div>
                                <div className={styles.infoLabel}>
                                    <span>Call Us</span>
                                    <span>(555) 123-4567</span>
                                </div>
                            </div>
                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}><MailIcon /></div>
                                <div className={styles.infoLabel}>
                                    <span>Email Us</span>
                                    <span>info@getservicedone.com</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.ctaAction}>
                            <Button href="/schedule" variant="primary">
                                Schedule Now <ChevronRight />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
