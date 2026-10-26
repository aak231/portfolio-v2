import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import FeaturedSystem from "@/components/FeaturedSystem";
import Hero from "@/components/Hero";
import LoopInPractice from "@/components/LoopInPractice";
import OperatingModel from "@/components/OperatingModel";
import SelectedImpact from "@/components/home/SelectedImpact";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedImpact />
      <FeaturedSystem />
      <OperatingModel />
      <LoopInPractice />
      <About />
      <ContactSection />
    </>
  );
}
