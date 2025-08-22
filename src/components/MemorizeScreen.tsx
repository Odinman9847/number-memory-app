import { motion } from "framer-motion";
import Button from "./Button";

type MemorizeScreenProps = {
  numberToMemorize: string;
  groupingSize: string;
  elapsedTime: number;
  handleMemorized: () => void;
};

const formatNumber = (numStr: string, groupSize: number): string => {
  if (groupSize <= 0) return numStr;
  const regex = new RegExp(`.{1,${groupSize}}`, "g");
  return numStr.match(regex)?.join(" ") || "";
};

export default function MemorizeScreen({
  numberToMemorize,
  groupingSize,
  elapsedTime,
  handleMemorized,
}: MemorizeScreenProps) {
  return (
    <motion.main className="flex-grow flex justify-center items-center bg-slate-900 text-white">
      <div className="flex flex-col items-center gap-8 w-full max-w-4xl">
        <h1 className="text-3xl lg:text-5xl text-slate-400 text-center">
          Memorize the number
        </h1>
        <div className="text-2xl lg:text-4xl text-slate-500 text-center">
          Time: {elapsedTime.toFixed(2)}s
        </div>
        <div className="text-6xl lg:text-7xl m-6 font-mono tracking-widest text-center lg:leading-relaxed lg:text-left lg:m-auto">
          {formatNumber(numberToMemorize, parseInt(groupingSize))}
        </div>
        <Button onClick={handleMemorized}>I&apos;ve Memorized It!</Button>
      </div>
    </motion.main>
  );
}
