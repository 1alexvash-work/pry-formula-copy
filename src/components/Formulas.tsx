"use client";

export default function Formulas() {
  const evaluate = () => {
    console.log("evaluate");
  };

  return (
    <div className="p-4 shadow">
      <h2 className="text-xl font-bold mb-4 ">Formulas</h2>

      <div className="mb-4">Write down any formula you want</div>

      <input
        type="text"
        className="border border-gray-300 px-2 py-1 rounded-md mb-4 w-full"
      />

      <button
        onClick={evaluate}
        className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
      >
        Evaluate
      </button>
    </div>
  );
}
