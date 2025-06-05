import React from "react";
import SpotlightNav from "./SpotlightNav";
import PerformanceCard from "./PerformanceCard";

const PerformanceSpotlight = () => {
  return (
    <div className="h-[652px] bg-black ">
      <SpotlightNav />
      <PerformanceCard />
    </div>
  );
};

export default PerformanceSpotlight;
