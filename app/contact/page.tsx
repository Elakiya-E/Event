import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import Locations from "@/components/Locations";

export const metadata: Metadata = {
  title: "Contact Iragu Events | Plan Your Event",
  description:
    "Planning an event? Have an idea you've been imagining? Or simply don't know where to start? Tell us about it. Call +91 90424 29868 or submit your enquiry.",
};

export default function ContactPage() {
  return (
    <PageLayout>
      {/* LOCATIONS & COVERAGE */}
      <Locations />
    </PageLayout>
  );
}
