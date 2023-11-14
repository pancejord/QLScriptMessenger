"use client";

import { ChakraProvider } from "@chakra-ui/react";
import {theme} from "../chakra/theme"

export interface ChakraContextProps {
  children: React.ReactNode;
}

export default function ChakraContext({children}: ChakraContextProps) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}