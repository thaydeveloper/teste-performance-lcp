import { DeviceBrand } from './DevicesCompatible.interface';
import { icons } from '@shared/assets';

export const DEVICES_COMPATIBLE_TITLE = 'Dispositivos Compatíveis com eSIM!';

export const DEVICES_COMPATIBLE_SUBTITLE =
  'Encontre respostas para as dúvidas mais comuns sobre o uso do eSIM, compatibilidade de dispositivos, processos de compra e muito mais. Se não encontrar o que procura, entre em contato conosco!';

export const COMPATIBLE_DEVICES: DeviceBrand[] = [
  {
    id: 'apple',
    name: 'APPLE',
    icon: icons.appleInc,
    series: [
      {
        id: 'iphone-16',
        name: 'iPhone 16',
        models: 'iPhone 16, iPhone 16 Pro, iPhone 16 Pro Max',
      },
      {
        id: 'iphone-15',
        name: 'iPhone 15',
        models: 'iPhone 15, iPhone 15 Pro, iPhone 15 Pro Max',
      },
      {
        id: 'iphone-14',
        name: 'iPhone 14',
        models: 'iPhone 14, iPhone 14 Pro, iPhone 14 Pro Max',
      },
      {
        id: 'iphone-13',
        name: 'iPhone 13',
        models: 'iPhone 13, iPhone 13 Mini, iPhone 13 Pro, iPhone 13 Pro Max',
      },
      {
        id: 'iphone-se',
        name: 'iPhone SE',
        models: 'iPhone SE (2ª Geração)',
      },
    ],
  },
  {
    id: 'android',
    name: 'ANDROID',
    icon: icons.android,
    series: [
      {
        id: 'galaxy',
        name: 'Galaxy:',
        models: '',
      },
      {
        id: 'galaxy-s24',
        name: 'Galaxy S24',
        models: 'Galaxy S24, Galaxy S24+, Galaxy S24 Ultra',
      },
      {
        id: 'galaxy-s23',
        name: 'Galaxy S23',
        models: 'Galaxy S23, Galaxy S23+, Galaxy S23 Ultra',
      },
      {
        id: 'galaxy-s22',
        name: 'Galaxy S22',
        models: 'Galaxy S22, Galaxy S22+, Galaxy S22 Ultra',
      },
      {
        id: 'galaxy-z',
        name: 'Galaxy Z',
        models: 'Galaxy Z Fold 5, Galaxy Z Fold 4, Galaxy Z Flip 5, Galaxy Z Flip 4',
      },
    ],
  },
  {
    id: 'color-os',
    name: 'COLOR OS',
    icon: icons.colors,
    series: [
      {
        id: 'oppo-find',
        name: 'Oppo Find',
        models: 'Oppo Find X6 Pro, Oppo Find X5 Pro',
      },
      {
        id: 'oppo-reno',
        name: 'Oppo Reno',
        models: 'Oppo Reno 9 Pro, Oppo Reno 7',
      },
    ],
  },
  {
    id: 'huawei',
    name: 'HUAWEI',
    icon: icons.huawei,
    series: [
      {
        id: 'huawei-mate',
        name: 'Huawei Mate',
        models: 'Huawei Mate 50 Pro, Huawei Mate 40 Pro',
      },
      {
        id: 'huawei-p',
        name: 'Huawei P',
        models: 'Huawei P50 Pro, Huawei P40, Huawei P40 Pro',
      },
    ],
  },
  {
    id: 'oxygen-os',
    name: 'OXYGEN OS',
    icon: icons.oxygen,
    series: [
      {
        id: 'oneplus-11',
        name: 'OnePlus 11',
        models: 'OnePlus 11',
      },
      {
        id: 'oneplus-10',
        name: 'OnePlus 10 Pro',
        models: 'OnePlus 10 Pro',
      },
      {
        id: 'oneplus-9',
        name: 'OnePlus 9 Pro',
        models: 'OnePlus 9 Pro',
      },
      {
        id: 'oneplus-8',
        name: 'OnePlus 8 Pro',
        models: 'OnePlus 8 Pro, OnePlus 8T',
      },
    ],
  },
  {
    id: 'xiaomi',
    name: 'XIAOMI',
    icon: icons.xiaomi,
    series: [
      {
        id: 'xiaomi-13',
        name: 'Xiaomi 13',
        models: 'Xiaomi 13, Xiaomi 13 Pro',
      },
      {
        id: 'xiaomi-12',
        name: 'Xiaomi 12',
        models: 'Xiaomi 12, Xiaomi 12 Pro',
      },
      {
        id: 'xiaomi-mi11',
        name: 'Xiaomi Mi 11',
        models: 'Xiaomi Mi 11 Ultra',
      },
      {
        id: 'xiaomi-mi10',
        name: 'Xiaomi Mi 10T',
        models: 'Xiaomi Mi 10T Pro',
      },
    ],
  },
  {
    id: 'microsoft',
    name: 'MICROSOFT SURFACE',
    icon: icons.microsoft,
    series: [
      {
        id: 'surface-pro',
        name: 'Surface Pro',
        models: 'Surface Pro X',
      },
      {
        id: 'surface-duo',
        name: 'Surface Duo',
        models: 'Surface Duo 2, Surface Duo',
      },
    ],
  },
  {
    id: 'sony',
    name: 'SONY',
    icon: icons.playStation,
    series: [
      {
        id: 'xperia-1',
        name: 'Xperia 1',
        models: 'Sony Xperia 1 IV, Sony Xperia 1 III',
      },
      {
        id: 'xperia-5',
        name: 'Xperia 5',
        models: 'Sony Xperia 5 IV',
      },
      {
        id: 'xperia-10',
        name: 'Xperia 10',
        models: 'Sony Xperia 10 IV',
      },
    ],
  },
  {
    id: 'outros',
    name: 'OUTROS',
    icon: icons.Infinity,
    series: [
      {
        id: 'nokia',
        name: 'Nokia:',
        models: '',
      },
      {
        id: 'nokia-x',
        name: 'Nokia X',
        models: 'Nokia X30, Nokia XR21',
      },
      {
        id: 'zte',
        name: 'ZTE Axon',
        models: 'ZTE Axon 30 Ultra, ZTE Axon 40 Ultra',
      },
      {
        id: 'fairphone',
        name: 'Fairphone',
        models: 'Fairphone 4',
      },
    ],
  },
];

export const DevicesCompatibleData = {
  title: DEVICES_COMPATIBLE_TITLE,
  subtitle: DEVICES_COMPATIBLE_SUBTITLE,
  brands: COMPATIBLE_DEVICES,
};
