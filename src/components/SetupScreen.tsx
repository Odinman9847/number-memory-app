import Button from "./Button";

type SetupScreenProps = {
  numberOfDigits: string;
  setNumberOfDigits: (value: string) => void;
  handleStartGame: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function SetupScreen({
  numberOfDigits,
  setNumberOfDigits,
  handleStartGame,
}: SetupScreenProps) {
  return (
    <main className="flex-grow flex justify-center items-center bg-slate-900 text-white">
      <form
        onSubmit={handleStartGame}
        className="flex flex-col items-center gap-8 w-full max-w-4xl"
      >
        <h1 className="text-5xl lg:text-7xl font-bold text-center lg:leading-relaxed">
          Number Memory Challenge
        </h1>
        <div className="flex flex-col gap-2 w-4/5 max-w-xs">
          <label
            htmlFor="digits"
            className="text-2xl lg:text-3xl text-slate-400 text-center"
          >
            How many digits?
          </label>
          <input
            id="digits"
            type="number"
            className="bg-slate-700 p-2 mt-4 lg:mb-4 rounded-md text-center text-xl lg:text-3xl"
            value={numberOfDigits}
            onChange={(e) => setNumberOfDigits(e.target.value)}
          />
        </div>
        <Button type="submit">Start Game</Button>
      </form>
    </main>
  );
}
