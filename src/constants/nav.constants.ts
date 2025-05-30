import { icons } from '@/shared/assets';
import { NavItem } from '@/shared/Header/Header.interface';
import { WHATSAPP_URL } from './general.constants';

export const navItems: NavItem[] = [
  {
    href: '/portability',
    icon: icons.portability,
    alt: 'Portabilidade',
    label: 'Portabilidade eSIM',
    page: 'portability',
  },
  {
    href: '#devices',
    icon: icons.devices,
    alt: 'Aparelhos',
    label: 'Dispositivos compatíveis',
    page: 'devices',
  },
  { href: '/', icon: icons.home, alt: 'Pagina Inicial', label: 'Pagina Inicial', page: 'home' },
  {
    href: '/more-questions',
    icon: icons.faq,
    alt: 'Faq',
    label: 'FAQ',
    page: 'faq',
  },
  {
    href: '/refund-policy',
    icon: icons.cancel,
    alt: 'Cancelar Compra',
    label: 'Cancelar compra',
    page: 'plans',
  },
  {
    href: WHATSAPP_URL,
    icon: icons.support,
    alt: 'Suporte',
    label: 'Suporte',
    page: 'contact',
    isExternal: true,
  },
];
