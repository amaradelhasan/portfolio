'use client';

import { 
  Box, 
  Flex, 
  Text, 
  IconButton, 
  HStack,
  useDisclosure,
  VStack,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        e.preventDefault();
        
        // Navigate to home if we're not already there
        if (pathname !== '/') {
          // For cross-page navigation to anchor, we'll navigate to the home page
          // and let the useEffect on the home page handle the scrolling
          window.location.href = href;
        } else {
          // Scroll to the section on the same page
          const element = document.getElementById(href.substring(1));
          if (element) {
            const offsetTop = element.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    // Add event listeners to all anchor links that start with #
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick as any);
    });

    // Clean up event listeners
    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick as any);
      });
    };
  }, [pathname]);

  return (
    <Box as="header" bg="rgba(26, 32, 44, 0.9)" backdropFilter="blur(10px)" py={4} px={4} boxShadow="lg" position="fixed" top="0" left="0" right="0" zIndex="1000" borderBottom="1px" borderBottomColor="dark.700">
      <Flex 
        maxW="container.xl" 
        mx="auto" 
        alignItems="center" 
        justifyContent="space-between"
        px={4}
      >
        <Text 
          fontSize="xl" 
          fontWeight="bold"
          bgGradient="linear(to-r, brand.400, brand.200)"
          bgClip="text"
        >
          Ammar Adel Hasan
        </Text>
        
        {/* Desktop Navigation */}
        <HStack 
          spacing={8} 
          display={{ base: 'none', md: 'flex' }}
          alignItems="center"
        >
          <a href="#about" style={{ textDecoration: 'none' }}>
            <Text color="dark.300" _hover={{ color: 'brand.400' }} fontWeight="500">About</Text>
          </a>
          <a href="#skills" style={{ textDecoration: 'none' }}>
            <Text color="dark.300" _hover={{ color: 'brand.400' }} fontWeight="500">Skills</Text>
          </a>
          <a href="#projects" style={{ textDecoration: 'none' }}>
            <Text color="dark.300" _hover={{ color: 'brand.400' }} fontWeight="500">Projects</Text>
          </a>
          <a href="/certificates" style={{ textDecoration: 'none' }}>
            <Text color="dark.300" _hover={{ color: 'brand.400' }} fontWeight="500">Certificates</Text>
          </a>
          <a href="#contact" style={{ textDecoration: 'none' }}>
            <Text color="dark.300" _hover={{ color: 'brand.400' }} fontWeight="500">Contact</Text>
          </a>
        </HStack>
        
        {/* Mobile menu button */}
        <IconButton
          display={{ md: 'none' }}
          onClick={onOpen}
          variant="ghost"
          colorScheme="brand"
          aria-label="Open menu"
          icon={<HamburgerIcon color="brand.400" />}
          _hover={{ bg: "dark.700" }}
        />
      </Flex>
      
      {/* Mobile Navigation Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay bg="rgba(0, 0, 0, 0.7)">
          <DrawerContent bg="dark.800" borderLeft="1px" borderLeftColor="brand.500">
            <DrawerCloseButton color="brand.400" />
            <DrawerHeader color="brand.400">Menu</DrawerHeader>
            <DrawerBody pb={8}>
              <VStack spacing={4} alignItems="flex-start">
                <a href="#about" onClick={(e) => { 
                  e.preventDefault(); 
                  onClose(); 
                  if (pathname !== '/') {
                    window.location.href = '/#about';
                  } else {
                    window.location.hash = 'about';
                  }
                }} style={{ textDecoration: 'none' }}>
                  <Text color="dark.300" _hover={{ color: 'brand.400' }} fontWeight="500">About</Text>
                </a>
                <a href="#skills" onClick={(e) => { 
                  e.preventDefault(); 
                  onClose(); 
                  if (pathname !== '/') {
                    window.location.href = '/#skills';
                  } else {
                    window.location.hash = 'skills';
                  }
                }} style={{ textDecoration: 'none' }}>
                  <Text color="dark.300" _hover={{ color: 'brand.400' }} fontWeight="500">Skills</Text>
                </a>
                <a href="#projects" onClick={(e) => { 
                  e.preventDefault(); 
                  onClose(); 
                  if (pathname !== '/') {
                    window.location.href = '/#projects';
                  } else {
                    window.location.hash = 'projects';
                  }
                }} style={{ textDecoration: 'none' }}>
                  <Text color="dark.300" _hover={{ color: 'brand.400' }} fontWeight="500">Projects</Text>
                </a>
                <a href="/certificates" onClick={onClose} style={{ textDecoration: 'none' }}>
                  <Text color="dark.300" _hover={{ color: 'brand.400' }} fontWeight="500">Certificates</Text>
                </a>
                <a href="#contact" onClick={(e) => { 
                  e.preventDefault(); 
                  onClose(); 
                  if (pathname !== '/') {
                    window.location.href = '/#contact';
                  } else {
                    window.location.hash = 'contact';
                  }
                }} style={{ textDecoration: 'none' }}>
                  <Text color="dark.300" _hover={{ color: 'brand.400' }} fontWeight="500">Contact</Text>
                </a>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Navbar;