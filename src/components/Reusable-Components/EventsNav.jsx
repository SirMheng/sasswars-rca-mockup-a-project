import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function EventsNav({ navLabel, buttonBgColor = "#1E1F22" }) {
  return (
    <div className="h-[48px] flex justify-between ">
      <h1 className="text-white self-center h-[33px] w-[144px] font-bold text-[24px] max-w-[300px] whitespace-nowrap">
        {navLabel}
      </h1>

      <div className="flex gap-2 ">
        <button
          className={`w-[48px] h-[48px] rounded-full flex items-center justify-center filter hover:border-white hover:border-1 hover:brightness-200 hover:cursor-pointer
      transition-[filter] duration-100`}
          style={{ backgroundColor: buttonBgColor }}
        >
          <FaChevronLeft className="text-white text-xl" />
        </button>
        <button
          className={`w-[48px] h-[48px] rounded-full flex items-center justify-center filter hover:border-white hover:border-1 hover:brightness-200 hover:cursor-pointer
      transition-[filter] duration-100`}
          style={{ backgroundColor: buttonBgColor }}
        >
          <FaChevronRight className="text-white text-xl" />
        </button>
      </div>
    </div>
  );
}
