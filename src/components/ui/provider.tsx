"use client";

import { ChakraProvider, type ChakraProviderProps } from "@chakra-ui/react";
import { theme } from "../../theme";

export function Provider(props: ChakraProviderProps) {
  return <ChakraProvider theme={theme} {...props} />;
}