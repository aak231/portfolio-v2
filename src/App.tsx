import DecisionField from "./animations/DecisionField";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-zinc-900 text-neutral-100">
      <DecisionField />

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <h1 className="text-5xl font-bold text-amber-500">Portfolio V2</h1>
      </div>

      {/* Temporary scroll area for testing */}
      <div className="min-h-[300vh]" />
    </div>
  );
}
