"use client";

import { useState } from "react";

const generateRandomNumber = (length: number): string => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10).toString();
  }
  return result;
};

const formatNumber = (numStr: string): string => {
  return numStr.match(/.{1,2}/g)?.join(" ") || "";
};

export default function HomePage() {
  const [numberOfDigits, setNumberOfDigits] = useState("");
  const [gameState, setGameState] = useState("setup");
  const [numberToMemorize, setNumberToMemorize] = useState("");
  const handleStartGame = () => {
    const digits = parseInt(numberOfDigits, 10);
    if (isNaN(digits) || digits <= 0) {
      alert("Please enter a valid number of digits.");
      return;
    }
    const newNumber = generateRandomNumber(digits);
    setNumberToMemorize(newNumber);
    setGameState("memorizing");
  };

  if (gameState === "setup") {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-5xl font-bold">Number Memory Challenge</h1>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="digits"
              className="text-lg text-slate-400 text-center"
            >
              How many digits?
            </label>
            <input
              id="digits"
              type="number"
              className="bg-slate-700 p-2 rounded-md text-center text-xl"
              value={numberOfDigits}
              onChange={(e) => setNumberOfDigits(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-xl"
            onClick={handleStartGame}
          >
            Start Game
          </button>
        </div>
      </main>
    );
  }

  if (gameState === "memorizing") {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-3xl text-slate-400">Memorize the number</h1>
          <div className="text-6xl font-mono tracking-widest">
            {formatNumber(numberToMemorize)}
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-xl">
            I've Memorized It!
          </button>
        </div>
      </main>
    );
  }
}
