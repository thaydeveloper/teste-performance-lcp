import type { ProfileName } from './assets.interfaces';
import profile1 from '@public/assets/profiles/profile-1.webp';
import profile2 from '@public/assets/profiles/profile-2.webp';
import profile3 from '@public/assets/profiles/profile-3.webp';
import profile4 from '@public/assets/profiles/profile-4.webp';
import profile5 from '@public/assets/profiles/profile-5.webp';
import profile6 from '@public/assets/profiles/profile-6.webp';
import profile7 from '@public/assets/profiles/profile-7.webp';
import profile8 from '@public/assets/profiles/profile-8.webp';
import profile9 from '@public/assets/profiles/profile-9.webp';

const profiles: Record<ProfileName, string> = {
  profile1: profile1.src,
  profile2: profile2.src,
  profile3: profile3.src,
  profile4: profile4.src,
  profile5: profile5.src,
  profile6: profile6.src,
  profile7: profile7.src,
  profile8: profile8.src,
  profile9: profile9.src,
};

export default profiles;
