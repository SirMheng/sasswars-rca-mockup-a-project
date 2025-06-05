import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function EventsNav({ navLabel }) {
  return (
    <div className="h-[48px] flex justify-between ">
      <h1 className="text-white self-center h-[33px] w-[144px] font-bold text-[24px]">
        {navLabel}
      </h1>
      <div className="flex gap-2 ">
        <button
          className="w-[48px] h-[48px] rounded-full bg-[#1E1F22] flex items-center justify-center filter hover:border-white hover:border-1 hover:brightness-200 hover:cursor-pointer
      transition-[filter] duration-100"
        >
          <FaChevronLeft className="text-white text-xl" />
        </button>
        <button
          className="w-[48px] h-[48px] rounded-full bg-[#1E1F22] flex items-center justify-center filter hover:border-white hover:border-1 hover:brightness-200 hover:cursor-pointer
      transition-[filter] duration-100"
        >
          <FaChevronRight className="text-white text-xl" />
        </button>
      </div>
    </div>
  );
}
