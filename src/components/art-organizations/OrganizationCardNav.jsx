import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const OrganizationCardNav = () => {
  return (
    <div className="absolute px-[120px] mt-[77px] h-[88px] w-full flex justify-between items-center z-20">
      <h1 className="font-bold text-[24px] leading-[24px] tracking-[0px] font-open-sans text-white">
        Art Organizations
      </h1>

      <div className="flex items-center gap-8">
        <div className="flex gap-4">
          <button className="w-[48px] h-[48px] rounded-full bg-gray-700/50 hover:bg-gray-900 flex items-center justify-center">
            <FaChevronLeft className="text-white text-xl" />
          </button>
          <button className="w-[48px] h-[48px] rounded-full bg-gray-700/50 hover:bg-gray-900 flex items-center justify-center">
            <FaChevronRight className="text-white text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrganizationCardNav;
