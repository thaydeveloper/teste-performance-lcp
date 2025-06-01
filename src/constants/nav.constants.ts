import { NavItem } from '@/shared/Header/Header.interface';
import portability from '@public/assets/icons/portability.webp';
import devices from '@public/assets/icons/devices.webp';
import home from '@public/assets/icons/home.webp';
import faq from '@public/assets/icons/faq.webp';
import cancel from '@public/assets/icons/cancel.webp';
import support from '@public/assets/icons/support.webp';
import { WHATSAPP_URL } from './general.constants';

export const navItems: NavItem[] = [
  {
    id: 'portability',
    text: 'Portabilidade eSIM',
    href: '/portability',
    icon: portability.src,
    alt: 'Portabilidade',
    label: 'Portabilidade eSIM',
    page: 'portability',
  },
  {
    id: 'devices',
    text: 'Dispositivos compatíveis',
    href: '#devices',
    icon: devices.src,
    alt: 'Aparelhos',
    label: 'Dispositivos compatíveis',
    page: 'devices',
  },
  {
    id: 'home',
    text: 'Página Inicial',
    href: '/',
    icon: home.src,
    alt: 'Página Inicial',
    label: 'Página Inicial',
    page: 'home',
  },
  {
    id: 'faq',
    text: 'FAQ',
    href: '/more-questions',
    icon: faq.src,
    alt: 'Faq',
    label: 'FAQ',
    page: 'faq',
  },
  {
    id: 'plans',
    text: 'Cancelar compra',
    href: '/refund-policy',
    icon: cancel.src,
    alt: 'Cancelar Compra',
    label: 'Cancelar compra',
    page: 'plans',
  },
  {
    id: 'contact',
    text: 'Suporte',
    href: WHATSAPP_URL,
    icon: support.src,
    alt: 'Suporte',
    label: 'Suporte',
    page: 'contact',
    isExternal: true,
  },
];
