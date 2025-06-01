'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { NavItem } from './Header.interface';

interface HeaderProps {
  navItems: NavItem[];
  mark: StaticImageData;
  activeSection: string;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  handleNavClick: (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem,
    closeMobile?: boolean,
  ) => void;
}

const Header: React.FC<HeaderProps> = ({
  navItems,
  mark,
  activeSection,
  mobileOpen,
  setMobileOpen,
  handleNavClick,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src={mark}
              alt="Logo"
              width={120}
              height={40}
              priority
              fetchPriority="high"
              quality={90}
              sizes="(max-width: 768px) 100px, 120px"
              className="object-contain"
              placeholder="blur"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`text-lg font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-[#FF2626]'
                    : 'text-gray-600 hover:text-[#FF2626]'
                }`}
              >
                {item.text}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item, true)}
                  className={`text-lg font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-[#FF2626]'
                      : 'text-gray-600 hover:text-[#FF2626]'
                  }`}
                >
                  {item.text}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
