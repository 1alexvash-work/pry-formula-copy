"use client";

import { useCounterStore } from "@/providers/counterStoreProvider";
import React from "react";

const ZustandCounter = () => {
  const { count, decrementCount, incrementCount } = useCounterStore(
    (state) => state
  );

  return (
    <div className="flex justify-center my-4">
      <div className="flex flex-col gap-1">
        Count: {count}
        <button
          type="button"
          onClick={decrementCount}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Decrement Count
        </button>
        <button
          type="button"
          onClick={incrementCount}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Increment Count
        </button>
      </div>
    </div>
  );
};

export default ZustandCounter;
