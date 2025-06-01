import appleInc from '@public/assets/icons/apple-Inc.webp';
import android from '@public/assets/icons/android.webp';
import google from '@public/assets/icons/google.webp';

export const brandDetails = {
  APPLE: {
    logo: appleInc,
    alt: 'Apple Logo',
  },
  ANDROID: {
    logo: android,
    alt: 'Android Logo',
  },
  GOOGLE: {
    logo: google,
    alt: 'Google Logo',
  },
};

export const deviceLists = {
  APPLE: [
    'iPhone 16; iPhone 16 Pro; iPhone16 Pro Max',
    'iPhone 15; iPhone15 Pro; iPhone 15 Pro Max',
    'iPhone 14; iPhone 14 Pro; iPhone 14 Pro Max',
  ],
  ANDROID: [
    'Galaxy S24; Galaxy S24+; Galaxy S24 Ultra',
    'Galaxy S23; Galaxy S22; Galaxy S21',
    'Galaxy Note 20; Galaxy Note 20 Ultra',
  ],
  GOOGLE: ['Pixel 8; Pixel 8 Pro', 'Pixel 7; Pixel 6; Pixel 6 Pro', 'Pixel 5; Pixel 4'],
};
