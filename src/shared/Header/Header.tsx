import Image from 'next/image';
import { HeaderPresentationProps } from './Header.interface';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { icons } from '../assets';
import { HeaderLogo } from '../HeaderLogo';

const Header: React.FC<HeaderPresentationProps> = ({
  navItems,
  mark,
  activeSection,
  mobileOpen,
  handleNavClick,
  setMobileOpen,
}) => {
  return (
    <header className="fixed top-0 left-0 z-20 w-full">
      {/* Topo com logo centralizado */}
      <div className="relative flex items-center justify-center w-full px-4 h-[101px] bg-[var(--color-white)]/30">
        <div className="absolute left-0 right-0 flex items-center justify-center w-full h-full pointer-events-none">
          <HeaderLogo />
        </div>
        <button
          className="absolute z-10 flex items-center ml-auto md:hidden right-4"
          onClick={() => setMobileOpen(true)}
          aria-label="Abrir menu"
          style={{ color: 'var(--color-primary)' }}
        >
          <Image
            src={icons.menuMobile}
            alt="Menu"
            width={32}
            height={32}
            style={{
              filter:
                'invert(34%) sepia(99%) saturate(7492%) hue-rotate(357deg) brightness(99%) contrast(110%)',
            }}
            priority
            fetchPriority="high"
            decoding="async"
          />
        </button>
      </div>

      {/* Menu desktop transparente */}
      <div className="flex items-center justify-center w-full px-8 py-3 bg-transparent">
        <DesktopNav
          navItems={navItems}
          activeSection={activeSection}
          handleNavClick={handleNavClick}
        />
      </div>

      {/* Menu mobile */}
      <MobileNav
        navItems={navItems}
        mark={mark}
        isOpen={mobileOpen}
        activeSection={activeSection}
        onClose={() => setMobileOpen(false)}
        handleNavClick={handleNavClick}
      />
    </header>
  );
};

export default Header;
