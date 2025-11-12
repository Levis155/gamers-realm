"use client";

import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider } from "./components/ui/color-mode";
import { system } from "@/theme";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider forcedTheme="dark">{children}</ColorModeProvider>
    </ChakraProvider>
  );
}
