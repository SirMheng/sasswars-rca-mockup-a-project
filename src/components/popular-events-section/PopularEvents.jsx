import React from "react";
import PopularEventsNav from "./PopularEventsNav";
import PopularEventsCard from "./PopularEventsCard";
import PopularEventsBackground from "../../assets/images/popular-events-background.png";

const PopularEvents = () => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <img
            src={PopularEventsBackground}
            alt="popular-event-background.png"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/64 backdrop-blur-xl"></div>
        </div>
      </div>
      <div className="relative z-10 h-[652px] w-[1200px] mx-auto flex flex-col justify-center ">
        <PopularEventsNav />
        <PopularEventsCard />
      </div>
    </div>
  );
};

export default PopularEvents;
