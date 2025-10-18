'use client';

import { Container, Heading, Text, VStack, Box } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const pathname = usePathname();

  // Handle scrolling to section when hash is present in URL
  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== 'undefined') {
        // Check for hash in URL
        const hash = window.location.hash;
        if (hash) {
          const elementId = hash.replace('#', '');
          // Wait for the DOM to be ready
          setTimeout(() => {
            const element = document.getElementById(elementId);
            if (element) {
              const offsetTop = element.offsetTop - 80; // Account for fixed navbar
              window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
              });
            }
          }, 100); // Small delay to ensure page is loaded
        }
      }
    };

    // Run immediately on page load
    handleHash();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHash);
    
    return () => {
      window.removeEventListener('hashchange', handleHash);
    };
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Box as="main" mb={16}>
        <Hero />
        <Container maxW="container.xl" py={16}>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Container>
      </Box>
      <Footer />
    </>
  );
}