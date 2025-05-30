import { Advantages, ChipChange, Devices, FAQ, NewEsim } from '@/app/(home)/sub-components';

export const sections = [
  {
    component: FAQ,
    id: 'faq',
    className: 'relative mx-auto sm:py2 w-full sm:max-w-[1380px] z-10',
  },
  {
    component: Advantages,
    id: 'advantages',
    className: 'min-h-[300px] relative mx-auto sm:max-w-[1117px]',
  },
  {
    component: NewEsim,
    id: 'new-esim',
    className: 'bg-white w-full min-h-[300px] relative mx-auto shadow-xl max-w-[1117px]',
  },
  {
    component: Devices,
    id: 'devices',
    className: 'bg-white min-h-[550px] relative mx-auto shadow-xl max-w-[1117px]',
  },
  {
    component: ChipChange,
    id: 'chip-change',
    className: 'bg-white min-h-[550px] relative mx-auto shadow-xl max-w-[1117px]',
  },
];
