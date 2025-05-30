import { useState, useCallback, useEffect } from 'react';

interface UseScrollSpyOptions {
  headerHeight?: number;
  debounceTime?: number;
}

export const useScrollSpy = (debounce: Function, options: UseScrollSpyOptions = {}) => {
  const [activeSection, setActiveSection] = useState<string>('/');
  const [mounted, setMounted] = useState<boolean>(false);

  const HEADER_HEIGHT = options.headerHeight || 80;

  const detectActiveSection = useCallback(
    (sections: NodeListOf<Element>, scrollPosition: number) => {
      let currentSection = '/';
      sections.forEach((section) => {
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop;
        const sectionHeight = htmlSection.clientHeight;
        const sectionId = section.getAttribute('id') || '';
        if (
          scrollPosition >= sectionTop - HEADER_HEIGHT &&
          scrollPosition < sectionTop + sectionHeight - HEADER_HEIGHT
        ) {
          currentSection = sectionId;
        }
      });
      return currentSection;
    },
    [HEADER_HEIGHT],
  );

  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + window.innerHeight / 3;
    const newActiveSection = detectActiveSection(sections, scrollPosition);
    setActiveSection(newActiveSection);
  }, [detectActiveSection]);

  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement> | null, href: string) => {
      if (e) e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (!element) return;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - HEADER_HEIGHT;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    },
    [HEADER_HEIGHT],
  );

  useEffect(() => {
    setMounted(true);
    const debouncedScroll = debounce(handleScroll, options.debounceTime || 10);
    window.addEventListener('scroll', debouncedScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', debouncedScroll);
    };
  }, [handleScroll, debounce, options.debounceTime]);

  return {
    activeSection,
    scrollToSection,
    mounted,
  };
};
