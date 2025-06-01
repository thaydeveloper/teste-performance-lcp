import { FC } from 'react';
import Devices from './Devices';

import { Device } from './Devices.interface';

const devicesData: Device[] = [
  {
    brand: 'Apple',
    devices: [
      'iPhone XS',
      'XS Max',
      'XR',
      '11',
      '11 Pro',
      '12',
      '12 Pro',
      '13',
      '13 Pro',
      'SE (2ª geração)',
      'e modelos mais recentes.',
    ],
  },
  {
    brand: 'Android',
    devices: [
      'Samsung Galaxy S20',
      'S20+',
      'S20 Ultra',
      'Note 20',
      'Z Flip',
      'Fold',
      'e modelos mais recentes.',
    ],
  },
  {
    brand: 'Huawei',
    devices: [
      'P40 ',
      'P40 Pro ',
      'P40 Pro+ ',
      'Mate 40 Pro ',
      'Pura 70 Pro ',
      'e modelos mais recentes.',
    ],
  },
  {
    brand: 'Outros',
    devices: ['Google Pixel 3', 'e modelos mais recentes.'],
  },
];

const DevicesContainer: FC = () => {
  return <Devices devices={devicesData} />;
};

export default DevicesContainer;
