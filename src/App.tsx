import DecisionField from "./animations/DecisionField";
import Hero from "./components/Hero";
export default function App() {
  return (
    <div className="min-h-screen w-full bg-green-600 text-neutral-100">
      <DecisionField />

      {/* Animated Background */}
      <DecisionField />

      {/* Page Content */}
      <Hero />

      {/* Temporary scroll space for testing */}
      <div className="h-[200vh]" />

    </div>
  );
}
