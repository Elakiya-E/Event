import Navbar from "@/components/Navbar";
import ScrollIndicator from "@/components/ScrollIndicator";
import IraguHero from "@/components/IraguHero";
import EventWorld from "@/components/EventWorld";
import EventCreationJourney from "@/components/EventCreationJourney";
import IraguDifference from "@/components/IraguDifference";
import CustomisedDecor from "@/components/CustomisedDecor";
import EventShowcase from "@/components/EventShowcase";
import ServicesExperience from "@/components/ServicesExperience";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-black">
      <Navbar />
      <ScrollIndicator />
      <IraguHero />
      <EventWorld />
      <EventCreationJourney />
      <IraguDifference />
      <CustomisedDecor />
      <EventShowcase />
      <ServicesExperience />
    </main>
  );
}
