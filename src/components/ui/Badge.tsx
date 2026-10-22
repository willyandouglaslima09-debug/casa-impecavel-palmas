import React from "react";

interface BadgeProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

export const Badge = ({ icon, title, subtitle }: BadgeProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white/85 backdrop-blur-md border border-[#E5DFD5] rounded-2xl shadow-sm hover:shadow-md hover:border-[#7A4B32]/40 transition-all duration-300 group">
      <div className="p-2.5 mb-2 rounded-full bg-[#F8F6F2] group-hover:bg-[#7A4B32]/10 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-[#2A2421] text-center leading-snug">
        {title}
      </h3>
      <p className="text-xs text-[#6B625D] text-center font-light mt-0.5">
        {subtitle}
      </p>
    </div>
  );
};
