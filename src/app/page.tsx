"use client";

import Formulas from "@/components/Formulas";
import ZustandCounter from "@/components/ZustandCounter";

import { create } from "zustand";

type BearState = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
};

const useBearStore = create<BearState>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  return <h1>{bears} around here ...</h1>;
}

function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  return <button onClick={increasePopulation}>one up</button>;
}

export default function Home() {
  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Homepage</h1>
      <Formulas />
      <ZustandCounter></ZustandCounter>

      <div>
        <BearCounter />
        <Controls />
      </div>
    </div>
  );
}
