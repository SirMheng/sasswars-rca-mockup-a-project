import React, { useState, useEffect } from "react";
import { BsPlayFill } from "react-icons/bs";
// import spotlightData from "../../data/spotlightData.json";
import { getAllMockUpData } from "../../services/events.service";
import PerformanceCardLoader from "../Reusable-Components/PerformanceCardLoader";

const PerformanceCard = () => {
  const [spotlights, setSpotlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllMockUpData().then((data) => {
      setSpotlights(data.performanceSpotlight);
      setLoading(false);
    });
  }, []);

  return (
    <div className=" w-[1200px] h-[390px] mx-auto">
      <div className="flex gap-6 overflow-x-auto w-[1300px]  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {loading
          ? Array.from({ length: 5 }).map((_, idx) => (
              <PerformanceCardLoader key={idx} />
            ))
          : spotlights.map((sl) => (
              <div
                key={sl.title}
                className="h-[390px] w-[282px] flex-shrink-0 relative"
              >
                <img
                  src={sl.imageUrl}
                  alt={sl.title}
                  className="w-full h-full object-cover rounded-[10px]"
                />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-13 h-13 bg-black rounded-full flex items-center justify-center">
                    <BsPlayFill className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h2 className="absolute bottom-7 left-4 text-white font-open-sans font-bold text-xl leading-none tracking-normal">
                  {sl.title}
                </h2>
              </div>
            ))}
      </div>
    </div>
  );
};

export default PerformanceCard;
