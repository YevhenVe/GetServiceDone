'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
} from '../../../public/handyman-iconset/handyman_icons';

export default function HandymanWorkPage() {
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
                                <span>Handyman & Maintenance</span>
                            </nav>

                            <div className={styles.badge}>
                                <HandymanCircleIcon />
                                <span className={styles.badgeText}>Our Services</span>
                            </div>

                            <h1 className={styles.title}>
                                Handyman & <span className={styles.highlight}>Home Maintenance</span>
                            </h1>

                            <p className={styles.description}>
                                From small repairs to custom installations, we provide professional, reliable solutions for every corner of your home.
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
                                        <p>Safe and professional service</p>
                                    </div>
                                </div>
                                <div className={styles.trustItem}>
                                    <div className={styles.trustIcon}><AwardIcon /></div>
                                    <div className={styles.trustText}>
                                        <h4>Quality Guaranteed</h4>
                                        <p>Attention to every detail</p>
                                    </div>
                                </div>
                                <div className={styles.trustItem}>
                                    <div className={styles.trustIcon}><ClockIcon /></div>
                                    <div className={styles.trustText}>
                                        <h4>Fast & Reliable</h4>
                                        <p>Getting it done right away</p>
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
                        <h2>Expert Home Solutions</h2>
                        <p>Comprehensive handyman services to keep your home in perfect condition.</p>
                    </div>

                    <div className={styles.servicesGrid}>
                        {/* Category 1 */}
                        <div className={styles.serviceCategory}>
                            <h3><span className={styles.categoryNum}>1</span> <MountingIcon /> Interior Mounting & Installation</h3>
                            <ul>
                                <li><strong>TV Wall Mounting:</strong> <span>Secure mounting of all screen sizes with hidden in-wall cable management.</span></li>
                                <li><strong>Art & Mirror Hanging:</strong> <span>Professional leveling and mounting of heavy mirrors, gallery walls, and large-scale art.</span></li>
                                <li><strong>Shelving & Organization:</strong> <span>Installation of custom closet systems, floating shelves, and garage storage racks.</span></li>
                                <li><strong>Window Treatments:</strong> <span>Mounting of blinds, curtains, shades, and smart-automated window coverings.</span></li>
                            </ul>
                        </div>

                        {/* Category 2 */}
                        <div className={styles.serviceCategory}>
                            <h3><span className={styles.categoryNum}>2</span> <CarpentryIcon /> Finish Carpentry & Trim</h3>
                            <ul>
                                <li><strong>Crown Molding & Baseboards:</strong> <span>Repair and installation of interior trim and decorative molding.</span></li>
                                <li><strong>Door Hardware:</strong> <span>Replacing handles, deadbolts, smart locks, and door hinges.</span></li>
                                <li><strong>Cabinet Hardware:</strong> <span>Upgrading kitchen and bath knobs and pulls for a modern look.</span></li>
                                <li><strong>Accent Walls:</strong> <span>Installation of shiplap, wainscoting, or wood-slat feature walls.</span></li>
                            </ul>
                        </div>

                        {/* Category 3 */}
                        <div className={styles.serviceCategory}>
                            <h3><span className={styles.categoryNum}>3</span> <RepairIcon /> General Home Repairs</h3>
                            <ul>
                                <li><strong>Drywall Repair:</strong> <span>Professional patching, sanding, and texture matching for holes and water-damaged areas.</span></li>
                                <li><strong>Deck & Fence Repair:</strong> <span>Replacing rotted boards, tightening railings, and gate hardware adjustments.</span></li>
                                <li><strong>Caulking & Sealing:</strong> <span>Refreshing seals around tubs, showers, and windows to prevent moisture damage.</span></li>
                                <li><strong>Weather Stripping:</strong> <span>Installing door sweeps and seals to improve home energy efficiency.</span></li>
                            </ul>
                        </div>

                        {/* Category 4 */}
                        <div className={styles.serviceCategory}>
                            <h3><span className={styles.categoryNum}>4</span> <MaintenanceIcon /> Exterior & Seasonal Maintenance</h3>
                            <ul>
                                <li><strong>Gutter Cleaning & Repair:</strong> <span>Clearing debris and ensuring downspouts are properly diverted.</span></li>
                                <li><strong>Pressure Washing:</strong> <span>Deep cleaning of driveways, sidewalks, decks, and siding.</span></li>
                                <li><strong>Safety & Accessibility:</strong> <span>Installation of grab bars, handrails, and child-proofing gates or hardware.</span></li>
                                <li><strong>Mailbox Installation:</strong> <span>Setting new posts and mounting modern mailboxes.</span></li>
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
