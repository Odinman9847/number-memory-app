type SetupScreenProps = {
  numberOfDigits: string;
  setNumberOfDigits: (value: string) => void;
  handleStartGame: () => void;
};

export default function SetupScreen({
  numberOfDigits,
  setNumberOfDigits,
  handleStartGame,
}: SetupScreenProps) {
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
