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
  title: "Iragu Events | Complete Event Planning & Customised Décor",
  description: "From customised décor to complete event planning and execution, Iragu Events takes complete responsibility for bringing your vision to life.",
  openGraph: {
    title: "Iragu Events | Complete Event Planning & Customised Décor",
    description: "From customised décor to complete event planning and execution, Iragu Events takes complete responsibility for bringing your vision to life.",
    type: "website",
    locale: "en_IN",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontSerif.variable} antialiased`} suppressHydrationWarning>
      <body>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
