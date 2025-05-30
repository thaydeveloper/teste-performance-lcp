import Image from 'next/image';
import { NavItem } from './Header.interface';

interface NavLinkProps {
  item: NavItem;
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => void;
  isMobile?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ item, isActive, onClick, isMobile }) => {
  const commonClasses = `group flex items-center transition-all duration-200 ease-in-out cursor-pointer`;
  const desktopTextClasses = isActive
    ? 'text-[#FF0000] font-bold'
    : 'text-[#D9D9D9] hover:text-[#FF0000]';
  const mobileTextClasses = 'text-[#222] hover:text-[#FF0000]';
  const iconSize = isMobile ? 28 : 60;

  return (
    <a
      key={item.page}
      href={item.href}
      onClick={(e) => onClick(e, item)}
      target={item.isExternal ? '_blank' : undefined}
      rel={item.isExternal ? 'noopener noreferrer' : undefined}
      id={`nav-item-${item.page}`}
      className={`${commonClasses} ${isMobile ? `gap-3 py-2 ${mobileTextClasses}` : `flex-col ${desktopTextClasses}`}`}
      aria-label={item.alt}
    >
      <div className={`transition-transform ${isMobile ? '' : 'mb-1 group-hover:scale-110'}`}>
        <Image
          src={item.icon}
          alt={item.alt}
          width={iconSize}
          height={iconSize}
          className={`transition-opacity duration-200 ${isActive && !isMobile ? 'opacity-100' : isMobile ? '' : 'opacity-85'}`}
        />
      </div>
      <span className={isMobile ? 'text-base whitespace-nowrap' : 'text-sm whitespace-nowrap'}>
        {item.label}
      </span>
    </a>
  );
};

export default NavLink;
