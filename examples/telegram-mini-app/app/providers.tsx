"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { THEME, TonConnectUIProvider } from "@tonconnect/ui-react";
import type React from "react";
import { useTelegram } from "@/hooks/use-telegram";

export const queryClient = new QueryClient();

function QueryProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

function TonConnectProvider({ children }: { children: React.ReactNode }) {
  const webApp = useTelegram();

  return (
    <TonConnectUIProvider
      uiPreferences={{
        borderRadius: "s",
        theme: webApp?.colorScheme === "dark" ? THEME.DARK : THEME.LIGHT,
      }}
      manifestUrl="https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json"
    >
      {children}
    </TonConnectUIProvider>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TonConnectProvider>
      <QueryProvider>{children}</QueryProvider>
    </TonConnectProvider>
  );
}
