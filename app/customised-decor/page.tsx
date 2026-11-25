import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import CustomisedDecor from "@/components/CustomisedDecor";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Customised Event Décor | Iragu Events",
  description:
    "Bespoke event décor designed around your story. Custom themes, color palettes, stage decoration, floral styling, grand entrances, and immersive photo zones.",
};

export default function CustomisedDecorPage() {
  return (
    <PageLayout>
      {/* CUSTOMISED DÉCOR SHOWCASE */}
      <CustomisedDecor />

      {/* FINAL CTA */}
      <FinalCTA />
    </PageLayout>
  );
}

