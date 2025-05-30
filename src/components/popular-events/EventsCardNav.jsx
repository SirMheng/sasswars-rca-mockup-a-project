import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const EventsCardNav = () => {
  return (
    <div className="absolute top-0 left-0 px-[120px] mt-[77px] h-[88px] w-full flex justify-between items-center z-20">
      <h1 className="font-bold text-[24px] leading-[24px] tracking-[0px] font-open-sans text-white">
        Popular events
      </h1>

      <div className="flex items-center gap-8">
        <h1 className="font-bold text-[24px] leading-[24px] tracking-[0px] font-open-sans text-white">
          See all
        </h1>
        <div className="flex gap-4">
          <button className="w-[48px] h-[48px] rounded-full bg-black hover:bg-gray-700 flex items-center justify-center">
            <FaChevronLeft className="text-white text-xl" />
          </button>
          <button className="w-[48px] h-[48px] rounded-full bg-black hover:bg-gray-700 flex items-center justify-center">
            <FaChevronRight className="text-white text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsCardNav;
