'use client';

import { ChakraProvider, type ChakraProviderProps } from '@chakra-ui/react';
import { theme } from '../theme';

export function ClientChakraProvider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}