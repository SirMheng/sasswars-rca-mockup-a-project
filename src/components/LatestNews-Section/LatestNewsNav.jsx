import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function LatestNewsNav() {
  return (
    <div className="h-[48px] flex justify-between border-1 border-yellow-500">
      <h1 className="text-white self-center h-[33px] w-[144px] font-bold text-[24px]">
        Latest News
      </h1>
      <div className="flex gap-2 ">
        <button className="w-[48px] h-[48px] rounded-full bg-[#1E1F22] flex items-center justify-center ">
          <FaChevronLeft className="text-white text-xl" />
        </button>
        <button className="w-[48px] h-[48px] rounded-full bg-[#1E1F22] flex items-center justify-center">
          <FaChevronRight className="text-white text-xl" />
        </button>
      </div>
    </div>
  );
}
