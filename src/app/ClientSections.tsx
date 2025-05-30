'use client';
import dynamic from 'next/dynamic';
import SectionFactory from '@/factories/SectionFactory';

const FAQ = dynamic(() => import('./(home)/sub-components/FAQ/FAQ.container'), { ssr: false });
const Advantages = dynamic(() => import('./(home)/sub-components/Advantages/Advantages'), {
  ssr: false,
});
const Devices = dynamic(() => import('./(home)/sub-components/Devices/Devices.container'), {
  ssr: false,
});
const Statements = dynamic(
  () => import('./(home)/sub-components/Statements/Statements.container'),
  {
    ssr: false,
  },
);
const NewEsim = dynamic(() => import('./(home)/sub-components/NewEsim/NewEsim'), { ssr: false });
const ChipChange = dynamic(() => import('./(home)/sub-components/ChipChange/ChipChange'), {
  ssr: false,
});

export default function ClientSections() {
  return (
    <>
      <div className="">
        <div className="relative mx-auto  sm:py2 w-full sm:max-w-[1380px]  z-10">
          <SectionFactory id="faq" className="">
            <FAQ />
          </SectionFactory>
        </div>
        <div className="relative  mx-auto sm:max-w-[1117px]">
          <SectionFactory id="advantages" className="min-h-[300px]">
            <Advantages />
          </SectionFactory>
        </div>
        <div className="relative mx-auto shadow-xl max-w-[1117px]">
          <SectionFactory id="new-esim" className="bg-white w-full min-h-[300px]">
            <NewEsim />
          </SectionFactory>
        </div>
        <div className="relative  shadow-xl mx-auto max-w-[1117px]">
          <SectionFactory id="devices" className="bg-white min-h-[550px]">
            <Devices />
          </SectionFactory>
        </div>
        <div className="relative shadow-xl mx-auto max-w-[1117px]">
          <SectionFactory id="chip-change" className="bg-white min-h-[550px]">
            <ChipChange />
          </SectionFactory>
        </div>
      </div>
      <div className="relative mx-auto shadow-xl">
        <SectionFactory id="statements" className="h-[650px] md:h-[660px]">
          <Statements />
        </SectionFactory>
      </div>
    </>
  );
}
