"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";

interface PageLayoutProps {
  children: React.ReactNode;
  offsetNav?: boolean;
}

/**
 * Reusable page layout component preserving the warm luxury theme,
 * global header, mobile CTA bar, and footer across all pages.
 */
export default function PageLayout({
  children,
  offsetNav = true,
}: PageLayoutProps) {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#F7F3EA] overflow-x-hidden w-full max-w-full pb-20 lg:pb-0">
      <Navbar />
      <main className={`flex-1 w-full ${offsetNav ? "pt-20" : ""}`}>
        {children}
      </main>
      <Footer />
      <MobileCTABar />
    </div>
  );
}

