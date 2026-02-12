import DecisionField from "./animations/DecisionField";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-neutral-100">
      <DecisionField />

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <h1 className="text-5xl font-bold text-amber-500 relative z-10">
          Portfolio V2
        </h1>
      </div>
    </div>
  );
}
