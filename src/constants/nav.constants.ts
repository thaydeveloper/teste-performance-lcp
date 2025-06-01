import { icons } from '@/shared/assets';
import { NavItem } from '@/shared/Header/Header.interface';
import { WHATSAPP_URL } from './general.constants';

export const navItems: NavItem[] = [
  {
    id: 'portability',
    text: 'Portabilidade eSIM',
    href: '/portability',
    icon: icons.portability,
    alt: 'Portabilidade',
    label: 'Portabilidade eSIM',
    page: 'portability',
  },
  {
    id: 'devices',
    text: 'Dispositivos compatíveis',
    href: '#devices',
    icon: icons.devices,
    alt: 'Aparelhos',
    label: 'Dispositivos compatíveis',
    page: 'devices',
  },
  {
    id: 'home',
    text: 'Página Inicial',
    href: '/',
    icon: icons.home,
    alt: 'Página Inicial',
    label: 'Página Inicial',
    page: 'home',
  },
  {
    id: 'faq',
    text: 'FAQ',
    href: '/more-questions',
    icon: icons.faq,
    alt: 'Faq',
    label: 'FAQ',
    page: 'faq',
  },
  {
    id: 'plans',
    text: 'Cancelar compra',
    href: '/refund-policy',
    icon: icons.cancel,
    alt: 'Cancelar Compra',
    label: 'Cancelar compra',
    page: 'plans',
  },
  {
    id: 'contact',
    text: 'Suporte',
    href: WHATSAPP_URL,
    icon: icons.support,
    alt: 'Suporte',
    label: 'Suporte',
    page: 'contact',
    isExternal: true,
  },
];
