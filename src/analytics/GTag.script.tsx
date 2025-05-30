// Conta Yuri google tag manager nome da tag: esimfacil site shopify
'use client';
import Script from 'next/script';

const GoogleScript = () => {
  return (
    <Script
      id="gtm-script"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T4J8GD48');
          `,
      }}
    />
  );
};

export default GoogleScript;
