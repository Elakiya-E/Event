import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import EventShowcase from "@/components/EventShowcase";
import TrustSection from "@/components/TrustSection";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Our Work | Iragu Events — Portfolio & Celebrations",
  description:
    "Explore our portfolio of past events, bespoke stage décor, wedding setups, birthdays, corporate events, and public celebrations executed across Tamil Nadu.",
};

export default function OurWorkPage() {
  return (
    <PageLayout>
      {/* EVENT SHOWCASE & CATEGORY FILTERS */}
      <EventShowcase />

      {/* TRUSTED BY PEOPLE, CHOSEN BY BRANDS */}
      <TrustSection />

      {/* FINAL CTA */}
      <FinalCTA />
    </PageLayout>
  );
}

