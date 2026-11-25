import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "FAQs | Iragu Events — Frequently Asked Questions",
  description:
    "Frequently asked questions about Iragu Events — event planning, customised décor, pricing, booking, locations and more. Get clear answers to help plan your event.",
};

export default function FAQPage() {
  return (
    <PageLayout>
      {/* FAQ SECTION */}
      <FAQ />

      {/* FINAL CTA */}
      <FinalCTA />
    </PageLayout>
  );
}
