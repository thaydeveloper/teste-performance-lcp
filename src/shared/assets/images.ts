import type { ImageName } from './assets.interfaces';
import advantage1 from '@public/assets/images/advantage-1.webp';
import advantage2 from '@public/assets/images/advantage-2.webp';
import advantage3 from '@public/assets/images/advantage-3.webp';
import backgroundDevices from '@public/assets/images/background-devices.webp';
import backgroundFaq from '@public/assets/images/background-faq.webp';
import backgroundHome from '@public/assets/images/background-home.webp';
import backgroundPortabilidade from '@public/assets/images/background-portabilidade.webp';
import companies from '@public/assets/images/companies.webp';
import designBackground1 from '@public/assets/images/design-background-1.webp';
import designBackground2 from '@public/assets/images/design-background-2.webp';
import footerLogo from '@public/assets/images/footer-logo.webp';
import mainLogo2 from '@public/assets/images/main-logo2.webp';
import mainLogo3 from '@public/assets/images/main-logo3.webp';
import rectangleBackground2 from '@public/assets/images/rectangle-background-2.webp';
import rectangleBackground from '@public/assets/images/rectangle-background.webp';
import refundBackground from '@public/assets/images/refund-background.webp';
import regras from '@public/assets/images/regras.webp';
import sites from '@public/assets/images/sites.webp';
import stepLine from '@public/assets/images/step-line.webp';

const images: Record<ImageName, string> = {
  advantage1: advantage1.src,
  advantage2: advantage2.src,
  advantage3: advantage3.src,
  backgroundDevices: backgroundDevices.src,
  backgroundFaq: backgroundFaq.src,
  backgroundHome: backgroundHome.src,

  backgroundPortabilidade: backgroundPortabilidade.src,
  companies: companies.src,
  designBackground1: designBackground1.src,
  designBackground2: designBackground2.src,
  footerLogo: footerLogo.src,
  mainLogo2: mainLogo2.src,
  mainLogo3: mainLogo3.src,
  rectangleBackground2: rectangleBackground2.src,
  rectangleBackground: rectangleBackground.src,
  refundBackground: refundBackground.src,
  regras: regras.src,
  sites: sites.src,
  stepLine: stepLine.src,
};

export default images;
