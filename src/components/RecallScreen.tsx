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
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const sanitizedValue = rawValue.replace(/[^0-9\s]/g, "");

    setUserAnswer(sanitizedValue);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-8 w-full max-w-4xl"
      >
        <div className="text-xl text-slate-400 text-center">
          Your Memorization Time:
          <span className="text2xl text-white ml-2">
            {finalTime.toFixed(2)}s
          </span>
        </div>
        <h1 className="text-3xl text-slate-400 text-center">
          What was the number?
        </h1>
        <div className="flex w-full max-w-lg flex-col items-center gap-2">
          <input
            type="text"
            className="bg-slate-700 p-2 rounded-md text-center text-x1 font-mono tracking-widest w-96"
            value={userAnswer}
            onChange={handleInputChange}
          />
          <p className="text-slate-400 text-sm">
            {digitsOnlyAnswer.length} / {numberOfDigits}
          </p>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-xl"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
