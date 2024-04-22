"use client";

import { evaluate } from "mathjs";
import { ChangeEvent, useState } from "react";

export default function Formulas() {
  const [formula, setFormula] = useState("");
  const [result, setResult] = useState(0);

  const evaluateTheResult = () => {
    setResult(evaluate(formula));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormula(value);
  };

  return (
    <div className="p-4 shadow">
      <h2 className="text-xl font-bold mb-4 ">Formulas</h2>

      <div className="mb-4">Write down any formula you want</div>

      <input
        type="text"
        className="border border-gray-300 px-2 py-1 rounded-md mb-4 w-full"
        onChange={handleInputChange}
      />

      <button
        onClick={evaluateTheResult}
        className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
      >
        Evaluate
      </button>

      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Result:</h3>
        <div className="border border-gray-300 px-2 py-1 rounded-md">
          {result}
        </div>
      </div>
    </div>
  );
}
