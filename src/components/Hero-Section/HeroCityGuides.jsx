import { useEffect, useState } from "react";
import { getAllMockUpData } from "../../services/events.service";
import EventsNav from "../Reusable-Components/EventsNav";

export default function HeroCityGuides() {
  const [cities, setCities] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllMockUpData().then((data) => {
      setCities(data.cities);
      setLoading(false);
    });
  }, []);

  return (
    <div className="absolute w-full z-20 mt-[1246px] px-[120px]">
      <div className="mx-auto h-[252px] w-[1200px]">
        <EventsNav navLabel={"City Guides"} />
        <div className="mt-[31px] h-[180px] overflow-hidden flex justify-between ">
          {loading
            ? Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={`placeholder-${idx}`}
                  className="flex flex-row justify-center items-center w-[180px] h-[180px]"
                >
                  <div className="h-[180px] w-[180px] rounded-2xl bg-gray-700 animate-pulse"></div>
                </div>
              ))
            : cities.map((city) => (
                <div
                  key={city.title}
                  className="relative w-[180px] h-[180px] rounded-2xl overflow-hidden"
                >
                  <img
                    src={city.imageUrl}
                    alt={city.title}
                    className="object-cover"
                  />

                  <div className="absolute bottom-0 left-0 w-[180px] bg-[#1E1F22] h-[50px]  flex items-center justify-start">
                    <p className="text-white text-[14px] font-semibold tracking-wide ml-[16px]">
                      {city.title}
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
