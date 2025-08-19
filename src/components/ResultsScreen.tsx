import Button from "./Button";

type ResultsScreenProps = {
  score: number;
  numberToMemorize: string;
  finalTime: number;
  userAnswer: string;
  handlePlayAgain: () => void;
};

const formatNumber = (numStr: string): string => {
  return numStr.match(/.{1,2}/g)?.join(" ") || "";
};

export default function ResultsScreen({
  score,
  numberToMemorize,
  finalTime,
  userAnswer,
  handlePlayAgain,
}: ResultsScreenProps) {
  const cleanedUserAnswer = userAnswer.replace(/\s/g, "");
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="flex flex-col items-center gap-6 text-center w-full max-w-4xl">
        <h1 className="text-5xl font-bold">Results</h1>
        <p className="text-2xl">
          You scored <span className="text-green-400 font-bold">{score}</span>{" "}
          out of <span className="font-bold">{numberToMemorize.length} </span>
          correct!
        </p>
        <p className="text-xl">
          Your time was
          <span className="font-bold"> {finalTime.toFixed(2)}s</span>.
        </p>
        <div className="font-mono text-lg mt-4">
          <p className="text-slate-400">Correct Answer:</p>
          <p className="tracking-widest">{formatNumber(numberToMemorize)}</p>
          <p className="text-slate-400 mt-2">Your Answer:</p>
          <p className="tracking-widest">
            {cleanedUserAnswer.split("").map((digit, index) => {
              const isCorrect = numberToMemorize[index] === digit;
              const digitColor = isCorrect ? "text-green-400" : "text-red-500";
              const isLastDigit = index === cleanedUserAnswer.length - 1;
              const addSpace = (index + 1) % 2 === 0 && !isLastDigit;
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
    </main>
  );
}
