import DecisionField from "./animations/DecisionField";
import Hero from "./components/Hero";
import Projects from "@/components/Projects";
import OperatingModel from "./components/OperatingModel";
import OperatingDiagram from "./components/OperatingDiagram";
import SectionTransition from "./components/SectionTransition";
// export default function App() {
//   return (
//     <div className="min-h-screen w-full bg-[#0a0a0d] text-neutral-100">
//       <DecisionField />
//       {/* Animated Background */}
//       {/* Page Content */}
//       <Hero />
//       {/* Transition */}
//       <SectionTransition />
//       {/* List of Projects */}
//       <Projects />
//       {/* Operating Model */}
//       <OperatingModel />
//       {/* Operating Diagram */}
//       <OperatingDiagram />
//       <div className="h-[50vh]" />
//     </div>
//   );
// }
export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0d] text-neutral-100">
      <DecisionField />

      <div className="relative z-10">
        <Hero />
        <SectionTransition />
        <Projects />
        <SectionTransition />
        <OperatingModel />
        <SectionTransition />
        <OperatingDiagram />
        <SectionTransition />
        <div className="h-[50vh]" />
      </div>
    </div>
  );
}
