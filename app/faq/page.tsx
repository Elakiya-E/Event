import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "FAQ | Iragu Events — Frequently Asked Questions",
  description:
    "Frequently asked questions about Iragu Events — event planning, customised décor, pricing, booking, locations and more. Get clear answers to help plan your event.",
};

export default function FAQPage() {
  return (
    <main className="relative flex flex-col min-h-screen bg-black overflow-x-hidden w-full max-w-full">
      <Navbar />
      <div className="pt-20">
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}
