import React from "react";
import { BsPlayFill } from "react-icons/bs";

export default function PerformanceCardLoader({ idx }) {
  return (
    <div
      key={idx}
      className="h-[390px] w-[282px] flex-shrink-0 relative animate-pulse"
    >
      <div className="w-full h-full bg-gray-700 rounded-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-13 h-13 bg-black rounded-full flex items-center justify-center">
          <BsPlayFill className="w-8 h-8 text-white" />
        </div>
      </div>
      <div className="absolute bottom-7 left-4 text-white font-open-sans font-bold text-xl leading-none tracking-normal"></div>
    </div>
  );
}
