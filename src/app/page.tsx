export const dynamic = 'force-static';

import styles from './page.module.css';
import { Hero } from './(home)/sub-components';
import { Footer } from '@/shared';
import SectionFactory from '@/factories/SectionFactory';
import { FC } from 'react';
import ClientSections from './ClientSections';
import Head from 'next/head';

const Home: FC = () => {
  return (
    <div className="relative">
      <Head>
        <script src="/insights/script.js" defer />
      </Head>
      <SectionFactory className={`bg-cover bg-center bg-no-repeat`} id="hero">
        <Hero />
      </SectionFactory>
      {/* Sessões dinâmicas */}
      <ClientSections />
      <div className="mx-auto">
        <SectionFactory id="footer">
          <Footer />
        </SectionFactory>
      </div>
    </div>
  );
};

export default Home;
