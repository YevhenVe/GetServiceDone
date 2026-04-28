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
import {
  ApplianceCircleIcon,
  KitchenIcon,
  LaundryIcon,
  ComfortIcon,
} from '../../../public/appliance-iconset/appliance_icons';

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
    title: 'Home',
    highlightText: 'Appliance',
    description: 'Expert appliance installation, maintenance, and repair services for residential properties.',
    mainIcon: <ApplianceCircleIcon />,
    imageSrc: '/appliance-iconset/appliance-illustration.jpeg',
    imageAlt: 'Home Appliance',
    linkHref: '/appliance_work',
    imagePosition: 'left',
    services: [
      { icon: <KitchenIcon />, text: 'Kitchen Appliance Solutions' },
      { icon: <LaundryIcon />, text: 'Laundry Room Services' },
      { icon: <ComfortIcon />, text: 'Water & Comfort Appliances' },
    ],
  },
];
