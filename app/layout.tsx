import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import type { PropsWithChildren } from "react";

import { siteConfig } from "@/config";

import { ThemeProvider } from "./provider";
import { SmoothCursor } from "@/components/ui/SmoothCursor";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export const metadata: Metadata = siteConfig;

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} ${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <SmoothCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
