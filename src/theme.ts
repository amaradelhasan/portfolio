import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: '#e6fffa',
      100: '#b2f5ea',
      200: '#81e6d9',
      300: '#4fd1c6',
      400: '#38b2ac',
      500: '#319795', // Main teal color
      600: '#2c7a7b',
      700: '#285e61',
      800: '#234e52',
      900: '#1d4044',
    },
    dark: {
      50: '#f7fafc',
      100: '#edf2f7',
      200: '#e2e8f0',
      300: '#cbd5e0',
      400: '#a0aec0',
      500: '#718096',
      600: '#4a5568', // Main dark text
      700: '#2d3748', // Dark background
      800: '#1a202c',
      900: '#171923', // Main dark background
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: 'dark.900',
        color: 'dark.50',
        transition: 'background-color 0.3s ease',
      },
    }),
  },
  components: {
    Heading: {
      baseStyle: {
        color: 'brand.400',
      },
    },
    Text: {
      baseStyle: {
        color: 'dark.100',
      },
    },
    Button: {
      variants: {
        brand: {
          bg: 'brand.500',
          color: 'dark.900',
          _hover: {
            bg: 'brand.400',
          },
        },
      },
    },
  },
});

export { theme };