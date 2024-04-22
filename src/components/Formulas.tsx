"use client";

import { evaluate, parse } from "mathjs";
import { ChangeEvent, useState } from "react";

const dynamicVariables = {
  x: 5,
  y: 10,
};

export default function Formulas() {
  const [equation, setEquation] = useState("");
  const [result, setResult] = useState(0);
  const [error, setError] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEquation(value);
  };

  const evaluateTheResult = () => {
    try {
      const parsedEquation = parse(equation);
      const solution = parsedEquation.evaluate(dynamicVariables);

      setResult(solution);
      setError(false);
    } catch (error) {
      setError(true);
      setResult(0);
    }
  };

  return (
    <div className="p-4 shadow">
      <h2 className="text-xl font-bold mb-4">Formulas</h2>

      <div className="p-4 mb-4 shadow text-sm text-gray-500">
        <p className="font-bold mb-2">Instructions:</p>
        <p>Write down any formula you want</p>
        <p>Predefined values are x = 5, y = 10</p>
        <p>You can use these variables in your formula</p>
        <p>For example, x + y * 2</p>
      </div>

      <input
        type="text"
        className="border border-gray-300 px-2 py-1 rounded-md mb-4 w-full"
        onChange={handleInputChange}
      />

      <button
        onClick={evaluateTheResult}
        className={`bg-blue-500 text-white px-4 py-2 rounded-md w-full ${
          equation ? "" : "opacity-50 cursor-not-allowed"
        } ${error ? "bg-red-500" : ""}`}
        disabled={!equation}
      >
        Evaluate
      </button>

      {error && (
        <div className="mt-4 text-red-500">
          <p>Error occurred while evaluating the formula.</p>
        </div>
      )}

      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Result:</h3>
        <div className="border border-gray-300 px-2 py-1 rounded-md">
          {result}
        </div>
      </div>
    </div>
  );
}
