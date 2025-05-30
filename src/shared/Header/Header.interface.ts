export interface NavItem {
  href: string;
  icon: string;
  alt: string;
  label: string;
  page: string;
  isExternal?: boolean;
}

export interface HeaderPresentationProps {
  navItems: NavItem[];
  mark: string;
  activeSection: string;
  mobileOpen: boolean;
  setMobileOpen: (isOpen: boolean) => void;
  handleNavClick: (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem,
    closeMobile?: boolean,
  ) => void;
}
