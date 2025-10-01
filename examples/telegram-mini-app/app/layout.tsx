import type { Metadata } from "next";
import { unstable_noStore as noStore } from "next/cache";
import { Inter } from "next/font/google";
import Script from "next/script";

import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ston.fi Swap",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  noStore();

  return (
    <html lang="en">
      <body className={cn(inter.className, "flex flex-col min-h-[100svh]")}>
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
        />
        <Providers>
          <main className="container flex flex-col flex-1 h-full py-10">
            {children}
          </main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
