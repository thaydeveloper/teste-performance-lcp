import Image from 'next/image';
import { NavItem } from './Header.interface';
import NavLink from './NavLink';

interface MobileNavProps {
  navItems: NavItem[];
  mark: string;
  isOpen: boolean;
  activeSection: string;
  onClose: () => void;
  handleNavClick: (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem,
    closeMobile?: boolean,
  ) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({
  navItems,
  mark,
  isOpen,
  activeSection,
  onClose,
  handleNavClick,
}) => {
  return (
    <>
      <div
        className={`
          fixed inset-0 z-30 transition-opacity duration-200
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
          md:hidden
        `}
        onClick={onClose}
      />
      <nav
        className={`
          fixed top-0 left-0 z-40 h-full w-64 bg-white shadow-lg transform transition-transform duration-200
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:hidden
        `}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <Image src={mark} alt="Logo" width={100} height={32} />
            <button onClick={onClose} aria-label="Fechar menu" className="p-2">
              <svg width={28} height={28} fill="none" viewBox="0 0 24 24">
                <path
                  stroke="#FF0000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-2 px-4 py-6">
            {navItems.map((item) => (
              <NavLink
                key={item.page}
                item={item}
                isActive={activeSection === item.page}
                onClick={(e, navItem) => handleNavClick(e, navItem, true)}
                isMobile
              />
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
