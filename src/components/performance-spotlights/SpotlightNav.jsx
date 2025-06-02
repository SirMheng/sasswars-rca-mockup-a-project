import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SpotlightNav = () => {
  return (
    <div className="absolute px-[120px] h-[88px] mt-[80px] w-full flex justify-between items-center z-20">
      <h1 className="font-bold text-[24px] leading-[24px] tracking-[0px] font-open-sans text-white ">
        Performance Spotlights
      </h1>
    </div>
  );
};

export default SpotlightNav;
