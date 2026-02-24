import DecisionField from "./animations/DecisionField";
import Hero from "./components/Hero";
import Projects from "@/components/Projects";
import OperatingModel from "./components/OperatingModel";
import OperatingDiagram from "./components/OperatingDiagram";
export default function App() {
  return (
    <div className="min-h-screen w-full bg-green-600 text-neutral-100">
      <DecisionField />
      {/* Animated Background */}
      {/* Page Content */}
      <Hero />
      {/* List of Projects */}
      <Projects />
      {/* Temporary scroll space for testing */}
      {/* Operating Model */}
      <OperatingModel />
      {/* Operating Diagram */}
      <OperatingDiagram />

      <div className="h-[200vh]" />
    </div>
  );
}
