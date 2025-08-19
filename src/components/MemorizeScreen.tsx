type MemorizeScreenProps = {
  numberToMemorize: string;
  elapsedTime: number;
  handleMemorized: () => void;
};

const formatNumber = (numStr: string): string => {
  return numStr.match(/.{1,2}/g)?.join(" ") || "";
};

export default function MemorizeScreen({
  numberToMemorize,
  elapsedTime,
  handleMemorized,
}: MemorizeScreenProps) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="flex flex-col items-center gap-8 w-full max-w-4xl">
        <h1 className="text-3xl text-slate-400">Memorize the number</h1>
        <div className="text-2xl text-slate-500">
          Time: {elapsedTime.toFixed(2)}s
        </div>
        <div className="text-6xl font-mono tracking-widest">
          {formatNumber(numberToMemorize)}
        </div>
        <button
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-xl"
          onClick={handleMemorized}
        >
          I've Memorized It!
        </button>
      </div>
    </main>
  );
}
