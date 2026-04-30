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
import {
  HandymanCircleIcon,
  MountingIcon,
  CarpentryIcon,
  RepairIcon,
  MaintenanceIcon,
} from '../../../public/handyman-iconset/handyman_icons';
import {
  PlumbingCircleIcon,
  KitchenBathIcon,
  HeaterIcon,
  DrainageIcon,
  OutdoorIcon,
} from '../../../public/plumbing-iconset/plumbing_icons';

export const servicesData: ServiceCardProps[] = [
  {
    title: 'Electrical',
    highlightText: 'Work',
    description: 'Safe, reliable, and professional electrical services for your home, business, and beyond.',
    mainIcon: <LightningCircleIcon />,
    imageSrc: '/electrical-iconset/electrical-illustration.jpeg',
    imageAlt: 'Electrician working on electrical panel',
    linkHref: '/electrical_work',
    buttonText: 'Electrical Services',
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
    buttonText: 'Appliance Repair',
    imagePosition: 'left',
    services: [
      { icon: <KitchenIcon />, text: 'Kitchen Appliance Solutions' },
      { icon: <LaundryIcon />, text: 'Laundry Room Services' },
      { icon: <ComfortIcon />, text: 'Water & Comfort Appliances' },
    ],
  },
  {
    title: 'Handyman',
    highlightText: 'Work',
    description: 'From small repairs to custom installations, we provide professional, reliable solutions for every corner of your home.',
    mainIcon: <HandymanCircleIcon />,
    imageSrc: '/handyman-iconset/handyman-illustration.jpeg',
    imageAlt: 'Handyman and Home Maintenance',
    linkHref: '/handyman_work',
    buttonText: 'Handyman Services',
    imagePosition: 'right',
    services: [
      { icon: <MountingIcon />, text: 'Interior Mounting & Installation' },
      { icon: <CarpentryIcon />, text: 'Finish Carpentry & Trim' },
      { icon: <RepairIcon />, text: 'General Home Repairs' },
      { icon: <MaintenanceIcon />, text: 'Exterior & Seasonal Maintenance' },
    ],
  },
  {
    title: 'Plumbing',
    highlightText: 'Services',
    description: 'Professional plumbing solutions from luxury upgrades to emergency repairs and complex infrastructure.',
    mainIcon: <PlumbingCircleIcon />,
    imageSrc: '/plumbing-iconset/plumbing-illustration.jpeg',
    imageAlt: 'Professional Plumbing Services',
    linkHref: '/plumbing_work',
    buttonText: 'Plumbing Services',
    imagePosition: 'left',
    services: [
      { icon: <KitchenBathIcon />, text: 'Kitchen & Bath Plumbing' },
      { icon: <HeaterIcon />, text: 'Water Heaters & Specialty Systems' },
      { icon: <DrainageIcon />, text: 'Drainage & Sewer Solutions' },
      { icon: <OutdoorIcon />, text: 'Infrastructure & Outdoor Plumbing' },
    ],
  },
];
