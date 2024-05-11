import Formulas from "@/components/Formulas";
import ZustandCounter from "@/components/ZustandCounter";

export default function Home() {
  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Homepage</h1>
      <Formulas />
      <ZustandCounter></ZustandCounter>
    </div>
  );
}
