import React, { useEffect, useState } from "react";
import { getCities } from "../../services/events.service";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Skeleton } from "@mui/material";

export default function HeroCityGuides() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCities().then((data) => {
      setCities(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="absolute w-full z-1 mt-[1246px] px-[120px]">
      <div className="mx-auto h-[252px] w-[1200px]">
        <div className="flex justify-between">
          <h1 className="w-[135px] h-[33px]font-bold text-[24px]">
            City Guides
          </h1>
          <div className="flex gap-2">
            <button className="w-[48px] h-[48px] rounded-full bg-[#1E1F22] flex items-center justify-center">
              <FaChevronLeft className="text-white text-xl" />
            </button>
            <button className="w-[48px] h-[48px] rounded-full bg-[#1E1F22] flex items-center justify-center">
              <FaChevronRight className="text-white text-xl" />
            </button>
          </div>
        </div>
        <div className="mt-[31px] h-[180px] overflow-hidden flex justify-between ">
          {loading
            ? Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={`placeholder-${idx}`}
                  className="flex flex-col-reverse justify-center items-center w-[180px] h-full"
                >
                  <Skeleton
                    sx={{ bgcolor: "grey.900" }}
                    variant="rounded"
                    width={180}
                    height={180}
                  ></Skeleton>
                </div>
              ))
            : cities.map((city) => (
                <div
                  key={city.title}
                  className="flex-col-reverse justify-center items-center"
                >
                  <img
                    src={city.imageUrl}
                    alt={city.title}
                    className="h-[130px] w-[180px] object-cover rounded-t-xl"
                  />

                  <div className="w-[180px] h-[50px] pb-[20px] bg-[#1E1F22] rounded-b-xl">
                    <p className="pl-[16px] py-[16px] text-[14px] font-semibold tracking-wide">
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
