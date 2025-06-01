'use client';
import dynamic from 'next/dynamic';
import SectionFactory from '@/factories/SectionFactory';
import { Suspense } from 'react';

const FAQ = dynamic(() => import('./(home)/sub-components/FAQ/FAQ.container'), {
  ssr: false,
  loading: () => <div className="min-h-[300px] bg-gray-50 animate-pulse" />,
});

const Advantages = dynamic(() => import('./(home)/sub-components/Advantages/Advantages'), {
  ssr: false,
  loading: () => <div className="min-h-[300px] bg-gray-50 animate-pulse" />,
});

const Devices = dynamic(() => import('./(home)/sub-components/Devices/Devices.container'), {
  ssr: false,
  loading: () => <div className="min-h-[550px] bg-gray-50 animate-pulse" />,
});

const NewEsim = dynamic(() => import('./(home)/sub-components/NewEsim/NewEsim'), {
  ssr: false,
  loading: () => <div className="min-h-[300px] bg-gray-50 animate-pulse" />,
});

const ChipChange = dynamic(() => import('./(home)/sub-components/ChipChange/ChipChange'), {
  ssr: false,
  loading: () => <div className="min-h-[550px] bg-gray-50 animate-pulse" />,
});

export default function ClientSections() {
  return (
    <>
      <div className="">
        <div className="relative mx-auto sm:py2 w-full sm:max-w-[1380px] z-10">
          <SectionFactory id="faq" className="">
            <Suspense fallback={<div className="min-h-[300px] bg-gray-50 animate-pulse" />}>
              <FAQ />
            </Suspense>
          </SectionFactory>
        </div>
        <div className="relative mx-auto sm:max-w-[1117px]">
          <SectionFactory id="advantages" className="min-h-[300px]">
            <Suspense fallback={<div className="min-h-[300px] bg-gray-50 animate-pulse" />}>
              <Advantages />
            </Suspense>
          </SectionFactory>
        </div>
        <div className="relative mx-auto shadow-xl max-w-[1117px]">
          <SectionFactory id="new-esim" className="bg-white w-full min-h-[300px]">
            <Suspense fallback={<div className="min-h-[300px] bg-gray-50 animate-pulse" />}>
              <NewEsim />
            </Suspense>
          </SectionFactory>
        </div>
        <div className="relative mx-auto shadow-xl max-w-[1117px]">
          <SectionFactory id="devices" className="bg-white min-h-[550px]">
            <Suspense fallback={<div className="min-h-[550px] bg-gray-50 animate-pulse" />}>
              <Devices />
            </Suspense>
          </SectionFactory>
        </div>
        <div className="relative shadow-xl mx-auto max-w-[1117px]">
          <SectionFactory id="chip-change" className="bg-white min-h-[550px]">
            <Suspense fallback={<div className="min-h-[550px] bg-gray-50 animate-pulse" />}>
              <ChipChange />
            </Suspense>
          </SectionFactory>
        </div>
      </div>
    </>
  );
}
