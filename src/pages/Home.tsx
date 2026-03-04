import DecisionField from "../animations/DecisionField";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import SupplyEngine from "../components/SupplyEngine";
import OperatingModel from "../components/OperatingModel";
import OperatingDiagram from "../components/OperatingDiagram";
import SectionTransition from "@/components/SectionTransition";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <DecisionField />
      <Hero />
      <SectionTransition />
      <Projects />
      <SupplyEngine />
      <SectionTransition />
      <OperatingModel />
      <OperatingDiagram />
      <ContactSection />
      <div className="h-[50vh]" />
    </>
  );
}
