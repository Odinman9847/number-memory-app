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
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="flex flex-col items-center gap-6 text-center">
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
            {formatNumber(userAnswer.replace(/\s/g, ""))}
          </p>
        </div>
        <button
          className="bg-blue-600 hover:bg-blue-700 px-6 xy-2 rounded-md text-xl mt-4"
          onClick={handlePlayAgain}
        >
          Play Again
        </button>
      </div>
    </main>
  );
}
