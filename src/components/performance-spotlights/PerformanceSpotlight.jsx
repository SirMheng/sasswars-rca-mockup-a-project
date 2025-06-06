import React from "react";
import SpotlightNav from "./SpotlightNav";
import PerformanceCard from "./PerformanceCard";

const PerformanceSpotlight = () => {
  return (
    <div className="relative h-[652px] bg-black px-[120px] flex flex-col  justify-center items-center ">
      <SpotlightNav />
      <PerformanceCard />
    </div>
  );
};

export default PerformanceSpotlight;
