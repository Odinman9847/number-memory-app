import { motion } from "framer-motion";
import Button from "./Button";

type ResultsScreenProps = {
  score: number;
  numberToMemorize: string;
  finalTime: number;
  userAnswer: string;
  handlePlayAgain: () => void;
  groupingSize: string;
};

const formatNumber = (numStr: string, groupSize: number): string => {
  if (groupSize <= 0) return numStr;
  const regex = new RegExp(`.{1,${groupSize}}`, "g");
  return numStr.match(regex)?.join(" ") || "";
};

export default function ResultsScreen({
  score,
  numberToMemorize,
  finalTime,
  userAnswer,
  handlePlayAgain,
  groupingSize,
}: ResultsScreenProps) {
  const cleanedUserAnswer = userAnswer.replace(/\s/g, "");
  return (
    <motion.main className="flex-grow flex justify-center items-center bg-slate-900 text-white">
      <div className="flex flex-col items-center gap-6 text-center w-full max-w-4xl">
        <h1 className="text-5xl lg:text-7xl font-bold m-3">Results</h1>
        <p className="text-2xl lg:text-3xl">
          You scored <span className="text-green-400 font-bold">{score}</span>{" "}
          out of <span className="font-bold">{numberToMemorize.length} </span>
          correct!
        </p>
        <p className="text-xl lg:text-3xl mb-4">
          Your time was
          <span className="font-bold"> {finalTime.toFixed(2)}s</span>.
        </p>
        <div className="font-mono text-lg lg:text-2xl m-4">
          <p className="text-slate-400">Correct Answer:</p>
          <p className="tracking-widest">
            {formatNumber(numberToMemorize, parseInt(groupingSize))}
          </p>
          <p className="text-slate-400 mt-2">Your Answer:</p>
          <p className="tracking-widest">
            {cleanedUserAnswer.split("").map((digit, index) => {
              const isCorrect = numberToMemorize[index] === digit;
              const digitColor = isCorrect ? "text-green-400" : "text-red-500";

              const groupSizeNum = parseInt(groupingSize) || 2;

              const isLastDigit = index === cleanedUserAnswer.length - 1;
              const addSpace = (index + 1) % groupSizeNum === 0 && !isLastDigit;
              return (
                <span key={index}>
                  <span className={digitColor}>{digit}</span>
                  {addSpace && " "}
                </span>
              );
            })}
          </p>
        </div>
        <Button onClick={handlePlayAgain}>Play Again</Button>
      </div>
    </motion.main>
  );
}
