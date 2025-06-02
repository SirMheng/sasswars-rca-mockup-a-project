import React, { useState } from "react";
import { BsPlayFill } from "react-icons/bs";
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-13 h-13 bg-black rounded-full flex items-center justify-center">
                <BsPlayFill className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="absolute bottom-7 left-4 text-white font-open-sans font-bold text-xl leading-none tracking-normal">
              {spotlight.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceCard;
