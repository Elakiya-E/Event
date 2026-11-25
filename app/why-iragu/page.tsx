import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import WhyIraguHero from "@/components/WhyIraguHero";
import IraguDifference from "@/components/IraguDifference";
import EventCreationJourney from "@/components/EventCreationJourney";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Why Choose Iragu Events | Complete Event Responsibility",
  description:
    "Discover the Iragu difference: personalised attention, end-to-end event ownership, single point of contact, creative thinking, attention to detail, and a stress-free experience.",
};

export default function WhyIraguPage() {
  return (
    <PageLayout>
      {/* 01. EDITORIAL HERO SECTION */}
      <WhyIraguHero />

      {/* 02. WHY IRAGU / 6 FEATURE DIFFERENTIATOR CARDS */}
      <IraguDifference id="why-features" hideHeader={true} />

      {/* 03. HOW WE WORK / EVENT CREATION JOURNEY */}
      <EventCreationJourney />

      {/* 04. CLIENT TESTIMONIALS */}
      <Testimonials />

      {/* 05. FINAL CTA */}
      <FinalCTA />
    </PageLayout>
  );
}

