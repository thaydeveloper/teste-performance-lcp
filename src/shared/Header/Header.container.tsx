'use client';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { FC, useState, useCallback } from 'react';
import mainLogo2 from '@public/assets/images/main-logo2.webp';

import { NavItem } from './Header.interface';
import { navItems } from '@/constants/nav.constants';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { usePathname, useRouter } from 'next/navigation';

const debounce = <T extends (...args: unknown[]) => void>(
  callback: T,
  delay: number,
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

const Header = dynamic(() => import('./Header'), {
  ssr: false,
  loading: () => <div className="h-[80px] bg-white animate-pulse" />,
});

const HeaderContainer: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const { activeSection, scrollToSection, mounted } = useScrollSpy(debounce, {
    headerHeight: 80,
    debounceTime: 10,
  });

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem, closeMobile?: boolean) => {
      if (item.isExternal) {
        window.open(item.href, '_blank');
        return;
      }
      if (!item.href.startsWith('#')) return;

      const isInSpecialPage =
        pathname === '/more-questions' ||
        pathname === '/refund-policy' ||
        pathname === '/portability';

      if (isInSpecialPage) {
        e.preventDefault();
        router.push(`/${item.href}`);

        return;
      }

      scrollToSection(e, item.href);
      if (closeMobile) setMobileOpen(false);
    },
    [pathname, scrollToSection],
  );

  if (!mounted) return null;

  return (
    <Suspense fallback={<div className="h-[80px] bg-white animate-pulse" />}>
      <Header
        navItems={navItems}
        mark={mainLogo2}
        activeSection={activeSection}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        handleNavClick={handleNavClick}
      />
    </Suspense>
  );
};

export default HeaderContainer;
