'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/button/Button';
import styles from './electricalWork.module.scss';
import {
    LightningCircleIcon,
    HouseIcon,
    ShieldIcon,
    BatteryIcon,
    ChandelierIcon,
    TowerIcon,
    HvacIcon
} from '../../../public/electrical-iconset/electrical_icons';

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

export default function ElectricalWorkPage() {
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
                                <span>Electrical Work</span>
                            </nav>

                            <div className={styles.badge}>
                                <LightningCircleIcon />
                                <span className={styles.badgeText}>Our Services</span>
                            </div>

                            <h1 className={styles.title}>
                                Electrical <span className={styles.highlight}>Work</span>
                            </h1>

                            <p className={styles.description}>
                                Safe, reliable, and professional electrical services for your home, business, and beyond.
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
                                        <p>Fully certified electricians</p>
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
                                src="/electrical-iconset/electrical-illustration.jpeg"
                                alt="Professional Electrician"
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
                        <p>Comprehensive electrical solutions tailored to your specific needs.</p>
                    </div>

                    <div className={styles.servicesGrid}>
                        {/* Category 1 */}
                        <div className={styles.serviceCategory}>
                            <h3><span className={styles.categoryNum}>1</span> <HouseIcon /> Residential Maintenance</h3>
                            <ul>
                                <li><strong>Outlet & Switch Upgrades:</strong> <span>Replacing old plugs with modern units, including integrated USB/USB-C ports.</span></li>
                                <li><strong>Safety Devices:</strong> <span>Installation of GFCI and AFCI protection for kitchens, bathrooms, and outdoor areas.</span></li>
                                <li><strong>Smart Lighting Controls:</strong> <span>Installation of dimmers, motion sensors, timer smart controls, and 3-way/4-way switch configurations.</span></li>
                                <li><strong>Ventilation:</strong> <span>Installation and replacement of bathroom exhaust fans and kitchen vents.</span></li>
                                <li><strong>Electrical Troubleshooting:</strong> <span>Expert diagnostics for flickering lights, dead outlets, and tripped breakers.</span></li>
                            </ul>
                        </div>

                        {/* Category 2 */}
                        <div className={styles.serviceCategory}>
                            <h3><span className={styles.categoryNum}>2</span> <ShieldIcon /> Security & Safety</h3>
                            <ul>
                                <li><strong>Security Cameras & Doorbells:</strong> <span>Professional installation of Ring, Google Nest, Arlo, and floodlight camera systems.</span></li>
                                <li><strong>Smoke & Carbon Monoxide Detectors:</strong> <span>Installation and hard-wiring of synchronized safety sensors.</span></li>
                                <li><strong>Whole-Home Surge Protection:</strong> <span>Shielding your electronics and appliances from power surges.</span></li>
                                <li><strong>Smart Home Energy Monitoring:</strong> <span>Installation of AI-driven monitors (like Sense or Emporia). See exactly how much electricity your home is using via smartphone.</span></li>
                            </ul>
                        </div>

                        {/* Category 3 */}
                        <div className={styles.serviceCategory}>
                            <h3><span className={styles.categoryNum}>3</span> <BatteryIcon /> EV & Energy Solutions</h3>
                            <ul>
                                <li><strong>EV Charger Installation:</strong> <span>Professional Level 2 charging stations for Tesla, Rivian, Ford, and all major brands.</span></li>
                                <li><strong>Dedicated 240V Circuits:</strong> <span>High-voltage wiring for chargers, appliances, and heavy equipment.</span></li>
                                <li><strong>Home Backup Generators:</strong> <span>Installation of electric generators and manual/automatic transfer switches.</span></li>
                                <li><strong>Electric Water Heaters:</strong> <span>Full power connection.</span></li>
                                <li><strong>RV Power Outlets:</strong> <span>Installation of dedicated 30-Amp and 50-Amp NEMA receptacles for your RV or camper.</span></li>
                            </ul>
                        </div>

                        {/* Category 4 */}
                        <div className={styles.serviceCategory}>
                            <h3><span className={styles.categoryNum}>4</span> <ChandelierIcon /> Luxury Installations</h3>
                            <ul>
                                <li><strong>Wellness & Spa Power:</strong> <span>Dedicated electrical connections for Saunas, Hot Tubs, and swim spas.</span></li>
                                <li><strong>Comfort Heating:</strong> <span>Professional wiring for Electric Floor Heaters and luxury Towel Warmers.</span></li>
                                <li><strong>Kitchen Ambiance:</strong> <span>Custom Under-cabinet LED lighting installation and replacement.</span></li>
                                <li><strong>Architectural Lighting:</strong> <span>Modern LED Cove, Toe-kick, and Staircase illumination.</span></li>
                                <li><strong>Art & Feature Lighting:</strong> <span>Gallery-quality lighting for artwork and architectural features.</span></li>
                            </ul>
                        </div>

                        {/* Category 5 */}
                        <div className={styles.serviceCategory}>
                            <h3><span className={styles.categoryNum}>5</span> <TowerIcon /> Infrastructure</h3>
                            <ul>
                                <li><strong>Meter Box Services:</strong> <span>Relocation, repair, and replacement of meter boxes (Overhead and Underground).</span></li>
                                <li><strong>Service Connections:</strong> <span>Reinstalling and securing overhead mast connections.</span></li>
                                <li><strong>Temporary Power:</strong> <span>Setup of Temporary Power Poles for construction or renovation sites.</span></li>
                                <li><strong>Panel Upgrades:</strong> <span>Modernizing electrical panels to increase home capacity (100A to 200A+).</span></li>
                            </ul>
                        </div>

                        {/* Category 6 */}
                        <div className={styles.serviceCategory}>
                            <h3><span className={styles.categoryNum}>6</span> <HvacIcon /> HVAC Solutions</h3>
                            <ul>
                                <li><strong>System Replacement:</strong> <span>Installation of high-efficiency AC units, furnaces, and heat pump systems.</span></li>
                                <li><strong>Emergency Repairs:</strong> <span>Rapid diagnostics and repair for all major HVAC brands.</span></li>
                                <li><strong>Ductless Mini-Splits:</strong> <span>Targeted cooling/heating for garages, home offices, and additions.</span></li>
                                <li><strong>Seasonal Tune-Ups:</strong> <span>Preventive maintenance for Spring (AC) and Fall (Furnace).</span></li>
                                <li><strong>Air Quality & Humidity:</strong> <span>Whole-home air purifiers, UV lights, and dehumidification systems.</span></li>
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
                            <h2>Need Electrical Assistance?</h2>
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
