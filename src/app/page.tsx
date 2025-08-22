"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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
  const [numberOfDigits, setNumberOfDigits] = useState("10");
  const [groupingSize, setGroupingSize] = useState("2");
  const [gameState, setGameState] = useState("setup");
  const [numberToMemorize, setNumberToMemorize] = useState("");
  const [elapsedTime, setElapsedTime] = useState(0);
  const [finalTime, setFinalTime] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleStartGame = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const digits = parseInt(numberOfDigits, 10);
    if (isNaN(digits) || digits <= 0) {
      alert("Please enter a valid number of digits.");
      return;
    }
    const group = parseInt(groupingSize, 10);
    if (isNaN(group) || group < 0) {
      alert("Please enter a valid group size");
      return;
    }
    const newNumber = generateRandomNumber(digits);
    setNumberToMemorize(newNumber);
    setGameState("memorizing");
  };

  const handleMemorized = useCallback(() => {
    setFinalTime(elapsedTime);
    setGameState("recall");
  }, [elapsedTime]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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

  const handlePlayAgain = useCallback(() => {
    setGameState("setup");
    setNumberToMemorize("");
    setUserAnswer("");
    setScore(0);
    setElapsedTime(0);
    setFinalTime(0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        if (gameState === "memorizing") {
          handleMemorized();
        } else if (gameState === "results") {
          handlePlayAgain();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [gameState, handleMemorized, handlePlayAgain]);

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

  if (gameState === "setup") {
    return (
      <SetupScreen
        numberOfDigits={numberOfDigits}
        setNumberOfDigits={setNumberOfDigits}
        handleStartGame={handleStartGame}
        groupingSize={groupingSize}
        setGroupingSize={setGroupingSize}
      />
    );
  }

  if (gameState === "memorizing") {
    return (
      <MemorizeScreen
        numberToMemorize={numberToMemorize}
        elapsedTime={elapsedTime}
        handleMemorized={handleMemorized}
        groupingSize={groupingSize}
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
        groupingSize={groupingSize}
      />
    );
  }
}
