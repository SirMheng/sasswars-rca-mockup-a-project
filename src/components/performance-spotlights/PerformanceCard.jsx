import React, { useState } from "react";
import spotlightData from "../../data/spotlightData.json";

const PerformanceCard = () => {
  const [spotlights, _setSpotlights] = useState(spotlightData);

  return (
    <div className="absolute w-full px-[120px] mt-[144px]">
      <div className="flex justify-between mt-[31px]">
        {spotlights.map((spotlight, index) => (
          <div key={index} className="h-[390px] w-[282px] relative">
            <img
              src={spotlight.imageUrl}
              alt={spotlight.title}
              className="w-full h-full object-cover rounded-[10px]"
            />
            <h2 className="absolute bottom-4 left-4 text-white font-open-sans font-bold text-xl leading-none tracking-normal">
              {spotlight.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceCard;
