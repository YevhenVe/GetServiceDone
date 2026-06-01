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
// import {
//   PlumbingCircleIcon,
//   KitchenBathIcon,
//   HeaterIcon,
//   DrainageIcon,
//   OutdoorIcon,
// } from '../../../public/plumbing-iconset/plumbing_icons';

export const getServicesData = (t: any): ServiceCardProps[] => [
  {
    title: t('electrical.title'),
    highlightText: t('electrical.highlightText'),
    description: t('electrical.description'),
    mainIcon: <LightningCircleIcon />,
    imageSrc: '/electrical-iconset/electrical-illustration.jpeg',
    imageAlt: 'Electrician working on electrical panel',
    linkHref: '/electrical_work',
    buttonText: t('electrical.buttonText'),
    imagePosition: 'right',
    services: [
      { icon: <HouseIcon />, text: t('electrical.items.0') },
      { icon: <ShieldIcon />, text: t('electrical.items.1') },
      { icon: <BatteryIcon />, text: t('electrical.items.2') },
      { icon: <ChandelierIcon />, text: t('electrical.items.3') },
    ],
  },
  {
    title: t('appliance.title'),
    highlightText: t('appliance.highlightText'),
    description: t('appliance.description'),
    mainIcon: <ApplianceCircleIcon />,
    imageSrc: '/appliance-iconset/appliance-illustration.jpeg',
    imageAlt: 'Home Appliance',
    linkHref: '/appliance_work',
    buttonText: t('appliance.buttonText'),
    imagePosition: 'left',
    services: [
      { icon: <KitchenIcon />, text: t('appliance.items.0') },
      { icon: <LaundryIcon />, text: t('appliance.items.1') },
      { icon: <ComfortIcon />, text: t('appliance.items.2') },
    ],
  },
  {
    title: t('handyman.title'),
    highlightText: t('handyman.highlightText'),
    description: t('handyman.description'),
    mainIcon: <HandymanCircleIcon />,
    imageSrc: '/handyman-iconset/handyman-illustration.jpeg',
    imageAlt: 'Handyman and Home Maintenance',
    linkHref: '/handyman_work',
    buttonText: t('handyman.buttonText'),
    imagePosition: 'right',
    services: [
      { icon: <MountingIcon />, text: t('handyman.items.0') },
      { icon: <CarpentryIcon />, text: t('handyman.items.1') },
      { icon: <RepairIcon />, text: t('handyman.items.2') },
      { icon: <MaintenanceIcon />, text: t('handyman.items.3') },
    ],
  }
];
