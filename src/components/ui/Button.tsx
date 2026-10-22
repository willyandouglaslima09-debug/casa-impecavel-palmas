import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "outline" | "dark";
  children: React.ReactNode;
}

export const Button = ({ variant = "gold", className, children, ...props }: ButtonProps) => {
  const base = "px-6 py-3 rounded-full font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2";
  const variants = {
    gold: "bg-gold-gradient text-black hover:brightness-110 shadow-lg shadow-[#C5A059]/20",
    outline: "border border-[#C5A059]/40 text-[#C5A059] hover:bg-[#C5A059] hover:text-black",
    dark: "bg-[#121212] border border-white/10 text-white hover:border-[#C5A059]/50",
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};