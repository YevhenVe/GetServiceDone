'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import Button from '@/components/button/Button';
import ServiceCTA from '@/components/common/ServiceCTA/ServiceCTA';
import styles from './plumbingWork.module.scss';
import {
    PlumbingCircleIcon,
    KitchenBathIcon,
    HeaterIcon,
    DrainageIcon,
    OutdoorIcon,
    ChevronRight,
    ShieldCheckIcon,
    AwardIcon,
    ClockIcon
} from '../../../../public/plumbing-iconset/plumbing_icons';

export default function PlumbingWorkPage() {
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
                                <span>Plumbing Services</span>
                            </nav>

                            <div className={styles.badge}>
                                <PlumbingCircleIcon />
                                <span className={styles.badgeText}>Our Services</span>
                            </div>

                            <h1 className={styles.title}>
                                Plumbing <span className={styles.highlight}>Services</span>
                            </h1>

                            <p className={styles.description}>
                                Professional plumbing solutions from luxury upgrades to emergency repairs and complex infrastructure.
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
                                        <p>Expert master plumbers</p>
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
                                src="/plumbing-iconset/plumbing-illustration.jpeg"
                                alt="Professional Plumbing Services"
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
                        <p>Comprehensive plumbing solutions tailored to your specific needs.</p>
                    </div>

                    <div className={styles.servicesGrid}>
                        {/* Category 1 */}
                        <div className={styles.serviceCategory}>
                            <h3><span className={styles.categoryNum}>1</span> <KitchenBathIcon /> Kitchen & Bath Plumbing</h3>
                            <ul>
                                <li><strong>Faucet & Sink Services:</strong> <span>Installation and repair of designer faucets, high-end kitchen sinks, and bathroom vanities.</span></li>
                                <li><strong>Toilet Repair & Install:</strong> <span>Professional installation of high-efficiency, dual-flush, or "smart" toilets; fixing leaks, clogs, and running issues.</span></li>
                                <li><strong>Shower & Tub Upgrades:</strong> <span>Installation of luxury rain-heads, thermostatic mixing valves, and modern tub hardware.</span></li>
                                <li><strong>Garbage Disposal Plumbing:</strong> <span>Integrating new disposal units with existing drainage systems.</span></li>
                            </ul>
                        </div>

                        {/* Category 2 */}
                        <div className={styles.serviceCategory}>
                            <h3><span className={styles.categoryNum}>2</span> <HeaterIcon /> Water Heaters & Specialty Systems</h3>
                            <ul>
                                <li><strong>Standard & Tankless Water Heaters:</strong> <span>Full-service installation and repair of traditional tanks and modern "on-demand" tankless units.</span></li>
                                <li><strong>Water Filtration & Softeners:</strong> <span>Installation of whole-home filtration systems to protect your appliances and plumbing from Georgia’s hard water.</span></li>
                                <li><strong>Hot Water Recirculation Pumps:</strong> <span>Adding pumps to ensure you have "instant" hot water at every tap, reducing water waste.</span></li>
                            </ul>
                        </div>

                        {/* Category 3 */}
                        <div className={styles.serviceCategory}>
                            <h3><span className={styles.categoryNum}>3</span> <DrainageIcon /> Drainage & Sewer Solutions</h3>
                            <ul>
                                <li><strong>Drain Cleaning:</strong> <span>Professional clearing of slow or clogged kitchen, bath, and floor drains.</span></li>
                                <li><strong>Sump Pump Systems:</strong> <span>Installation and maintenance of primary and battery-backup sump pumps for basement protection.</span></li>
                                <li><strong>Sewage Ejector Pumps:</strong> <span>Repair and replacement of pumps for basement bathrooms or laundry rooms.</span></li>
                                <li><strong>Leak Detection:</strong> <span>Expert pinpointing of hidden pipe leaks behind walls or under floors.</span></li>
                            </ul>
                        </div>

                        {/* Category 4 */}
                        <div className={styles.serviceCategory}>
                            <h3><span className={styles.categoryNum}>4</span> <OutdoorIcon /> Infrastructure & Outdoor Plumbing</h3>
                            <ul>
                                <li><strong>Pipe Repair & Repiping:</strong> <span>Replacing old, corroded, or leaking copper/PEX piping with modern, durable materials.</span></li>
                                <li><strong>Outdoor Spigots:</strong> <span>Installation of frost-proof hose bibs and outdoor kitchen plumbing hookups.</span></li>
                                <li><strong>Main Water Line Repair:</strong> <span>Fixing or replacing the primary water service line from the meter to the home.</span></li>
                                <li><strong>Gas Line Plumbing:</strong> <span>Installation and repair of gas lines for stoves, dryers, fireplaces, and outdoor grills.</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA Section */}
            <ServiceCTA
                title="Need Plumbing Assistance?"
                description="We're ready to help with your next project. Get in touch today!"
            />
        </main>
    );
}
