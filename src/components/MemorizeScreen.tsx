import Button from "./Button";

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
    <main className="flex-grow flex justify-center items-center bg-slate-900 text-white">
      <div className="flex flex-col items-center gap-8 w-full max-w-4xl">
        <h1 className="text-3xl lg:text-5xl text-slate-400 text-center">
          Memorize the number
        </h1>
        <div className="text-2xl lg:text-4xl text-slate-500 text-center">
          Time: {elapsedTime.toFixed(2)}s
        </div>
        <div className="text-6xl lg:text-7xl m-6 font-mono tracking-widest text-center lg:leading-relaxed lg:text-left lg:m-auto">
          {formatNumber(numberToMemorize)}
        </div>
        <Button onClick={handleMemorized}>I&apos;ve Memorized It!</Button>
      </div>
    </main>
  );
}
