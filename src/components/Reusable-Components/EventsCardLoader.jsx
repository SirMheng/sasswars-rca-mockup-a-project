import React from "react";
import { FaPlay } from "react-icons/fa6";

export default function EventCardLoader({ idx }) {
  return (
    <div
      key={`placeholder-${idx}`}
      className="w-[1200px] h-[417px] border-2 border-[#1E1F22] mt-[80px] flex justify-between rounded-3xl mx-auto"
    >
      <section className="text-white mt-[77px] ml-[77px] w-[510px] animate-pulse">
        <div className="h-[108px] w-[501px] bg-gray-700 rounded-md mb-[20px]"></div>
        <div className="h-[54px] w-[485px] bg-gray-600 rounded-md mb-[32px]"></div>
        <div className="w-[167.5px] h-[48px] bg-gray-700 rounded-full"></div>
      </section>

      <section className="text-white m-[24px] relative animate-pulse">
        <div className="w-[463px] h-[369px] bg-gray-700 rounded-3xl"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[48px] h-[48px] bg-gray-800/80 p-3 rounded-full border hover:brightness-125 transition-colors flex items-center justify-center">
            <FaPlay className="w-[18px] h-[19px] ml-[4px]" />
          </div>
        </div>
      </section>
    </div>
  );
}
