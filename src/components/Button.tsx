import { ComponentProps, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
} & ComponentProps<"button">;

export default function Button({ children, className, ...rest }: ButtonProps) {
  const baseStyles = `
    bg-transparent border-2 border-emerald-500
    text-emerald-500 px-6 py-2 rounded-lg text-xl
    font-bold hover:bg-emerald-500 hover:text-white
    active:scale-95 transition-all duration-200
  `;

  return (
    <button className={`${baseStyles} ${className}`} {...rest}>
      {children}
    </button>
  );
}
