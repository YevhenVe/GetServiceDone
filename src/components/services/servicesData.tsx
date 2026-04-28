import React from 'react';
import { ServiceCardProps } from './ServiceCard';
import {
  LightningCircleIcon,
  HouseIcon,
  ShieldIcon,
  BatteryIcon,
  ChandelierIcon,
  TowerIcon,
  HvacIcon,
} from '../../../public/electrical-iconset/electrical_icons';

export const servicesData: ServiceCardProps[] = [
  {
    title: 'Electrical',
    highlightText: 'Work',
    description: 'Safe, reliable, and professional electrical services for your home, business, and beyond.',
    mainIcon: <LightningCircleIcon />,
    imageSrc: '/electrical-iconset/electrical-illustration.jpeg',
    imageAlt: 'Electrician working on electrical panel',
    linkHref: '/electrical_work',
    imagePosition: 'right',
    services: [
      { icon: <HouseIcon />, text: 'Residential Electrical Maintenance & Repairs' },
      { icon: <ShieldIcon />, text: 'Home Security & Safety' },
      { icon: <BatteryIcon />, text: 'EV Charging, RV power & Energy Solutions' },
      { icon: <ChandelierIcon />, text: 'Luxury & Specialty Installations' },
      { icon: <TowerIcon />, text: 'Utility & Heavy Infrastructure' },
      { icon: <HvacIcon />, text: 'HVAC (Heating, Ventilation & Air Conditioning)' },
    ],
  },
  {
    title: 'Plumbing',
    highlightText: 'Work',
    description: 'Expert plumbing solutions for residential and commercial properties.',
    mainIcon: <LightningCircleIcon />,
    imageSrc: '/electrical-iconset/electrical-illustration.jpeg',
    imageAlt: 'Plumber working',
    linkHref: '/schedule',
    imagePosition: 'left',
    services: [
      { icon: <HouseIcon />, text: 'Pipe Leak Repair & Replacement' },
      { icon: <ShieldIcon />, text: 'Water Heater Installation' },
      { icon: <BatteryIcon />, text: 'Drain Cleaning & Unclogging' },
    ],
  },
];
