import { NavItem } from './Header.interface';
import NavLink from './NavLink';

interface DesktopNavProps {
  navItems: NavItem[];
  activeSection: string;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ navItems, activeSection, handleNavClick }) => {
  return (
    <nav className="hidden md:block w-full">
      <div className="flex justify-between items-center px-8">
        <div className="flex space-x-16">
          {navItems.slice(0, 3).map((item) => (
            <NavLink
              key={item.page}
              item={item}
              isActive={activeSection === item.page}
              onClick={handleNavClick}
            />
          ))}
        </div>
        <div className="flex space-x-16">
          {navItems.slice(3).map((item) => (
            <NavLink
              key={item.page}
              item={item}
              isActive={activeSection === item.page}
              onClick={handleNavClick}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
