import Button from "./Button";

type RecallScreenProps = {
  finalTime: number;
  userAnswer: string;
  setUserAnswer: (value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  numberOfDigits: string;
};

export default function RecallScreen({
  finalTime,
  userAnswer,
  setUserAnswer,
  handleSubmit,
  numberOfDigits,
}: RecallScreenProps) {
  const digitsOnlyAnswer = userAnswer.replace(/\s/g, "");
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const rawValue = e.target.value;
    const sanitizedValue = rawValue.replace(/[^0-9\s]/g, "");

    setUserAnswer(sanitizedValue);
  };

  return (
    <main className="flex-grow flex justify-center items-center bg-slate-900 text-white">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-8 w-full max-w-4xl"
      >
        <div className="text-xl lg:text-4xl text-slate-400 text-center">
          Your Memorization Time:
          <span className="text2xl text-white ml-2">
            {finalTime.toFixed(2)}s
          </span>
        </div>
        <h1 className="text-3xl lg:text-4xl text-slate-400 text-center">
          What was the number?
        </h1>
        <div className="flex w-4/5 max-w-lg flex-col items-center gap-2">
          <textarea
            className="bg-slate-800 border border-slate-700 p-4 rounded-lg font-mono tracking-widest w-full h-32 text-xl lg:text-2xl resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
            value={userAnswer}
            onChange={handleInputChange}
            placeholder="Start typing the numbers here..."
          />
          <p className="text-slate-400 text-sm lg:text-lg">
            {digitsOnlyAnswer.length} / {numberOfDigits}
          </p>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </main>
  );
}
