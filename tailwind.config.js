import defaultTheme from 'tailwindcss/defaultTheme';
import lineClamp from '@tailwindcss/line-clamp';

const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.stories.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        primary: '#203772',
        secondary: '#00FFB6',
        accent: '#00BF88',
      },
      borderWidth: {
        3: '3px',
      },
      maxWidth: {
        container: '1512px',
      },
      height: {
        button: {
          sm: '80px',
          md: '90px',
          lg: '95px',
          xl: '105px',
        },
      },
      width: {
        button: {
          sm: '250px',
          md: '280px',
          lg: '270px',
          xl: '330px',
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
    },
  },
  plugins: [lineClamp],
};

export default config;
