'use client';

import { createContext, useContext, useEffect } from 'react';
import { usePathname } from 'next/navigation';

type NavigationContextType = {
  scrollToSection: (sectionId: string) => void;
};

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (pathname !== '/') {
      // In a real app we'd use router.push('/') but for now we'll do a full page navigation
      window.location.href = `/#${sectionId}`;
    } else {
      // If we're on the home page, scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  // Handle hash changes on page load
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.substring(1); // Remove the '#' character
      const element = document.getElementById(hash);
      if (element) {
        // Wait a bit for the page to load
        setTimeout(() => {
          const offsetTop = element.offsetTop - 80; // Account for fixed navbar
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [pathname]);

  return (
    <NavigationContext.Provider value={{ scrollToSection }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};