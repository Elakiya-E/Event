import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { LenisProvider } from "@/hooks/useLenis";
import "./globals.css";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontSerif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iragu Events | Cinematic Event Experience",
  description: "Premium, cinematic, scroll-driven event management website.",
};

import ScrollProgress from "@/components/ScrollProgress";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontSerif.variable} antialiased`}>
      <body>
        <LenisProvider>
          {children}
          <ScrollProgress />
        </LenisProvider>
      </body>
    </html>
  );
}
