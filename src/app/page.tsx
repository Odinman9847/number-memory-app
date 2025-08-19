"use client";

import { useState, useEffect, useRef } from "react";
import SetupScreen from "@/components/SetupScreen";
import MemorizeScreen from "@/components/MemorizeScreen";
import RecallScreen from "@/components/RecallScreen";
import ResultsScreen from "@/components/ResultsScreen";

const generateRandomNumber = (length: number): string => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10).toString();
  }
  return result;
};

export default function HomePage() {
  const [numberOfDigits, setNumberOfDigits] = useState("");
  const [gameState, setGameState] = useState("setup");
  const [numberToMemorize, setNumberToMemorize] = useState("");
  const [elapsedTime, setElapsedTime] = useState(0);
  const [finalTime, setFinalTime] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (gameState === "memorizing") {
      const startTime = Date.now();
      timerIntervalRef.current = setInterval(() => {
        setElapsedTime((Date.now() - startTime) / 1000);
      }, 10);
    }

    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    };
  }, [gameState]);

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

  const handleMemorized = () => {
    setFinalTime(elapsedTime);
    setGameState("recall");
  };

  const handleSubmit = () => {
    const cleanedUserAnswer = userAnswer.replace(/\s/g, "");
    let correctDigits = 0;
    for (let i = 0; i < numberToMemorize.length; i++) {
      if (numberToMemorize[i] === cleanedUserAnswer[i]) {
        correctDigits++;
      }
    }
    setScore(correctDigits);
    setGameState("results");
  };

  const handlePlayAgain = () => {
    setGameState("setup");
    setNumberOfDigits("");
    setNumberToMemorize("");
    setUserAnswer("");
    setScore(0);
    setElapsedTime(0);
    setFinalTime(0);
  };

  if (gameState === "setup") {
    return (
      <SetupScreen
        numberOfDigits={numberOfDigits}
        setNumberOfDigits={setNumberOfDigits}
        handleStartGame={handleStartGame}
      />
    );
  }

  if (gameState === "memorizing") {
    return (
      <MemorizeScreen
        numberToMemorize={numberToMemorize}
        elapsedTime={elapsedTime}
        handleMemorized={handleMemorized}
      />
    );
  }

  if (gameState === "recall") {
    return (
      <RecallScreen
        finalTime={finalTime}
        userAnswer={userAnswer}
        setUserAnswer={setUserAnswer}
        handleSubmit={handleSubmit}
        numberOfDigits={numberOfDigits}
      />
    );
  }

  if (gameState === "results") {
    return (
      <ResultsScreen
        score={score}
        numberToMemorize={numberToMemorize}
        finalTime={finalTime}
        userAnswer={userAnswer}
        handlePlayAgain={handlePlayAgain}
      />
    );
  }
}
