"use client";

import { useState } from "react";

export default function HomePage() {
  const [numberOfDigits, setNumberOfDigits] = useState("");
  const [gameState, setGameState] = useState("setup");
  const handleStartGame = () => {
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
          <div className="text-6xl font-mono tracking-widest">123456789</div>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-xl">
            I've Memorized It!
          </button>
        </div>
      </main>
    );
  }
}
