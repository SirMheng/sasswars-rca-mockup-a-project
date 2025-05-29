import React from "react";
// import EventsCard from "../Popular-Events/EventsCard.jsx";
import Background from "../../assets/images/EventBackground.png";
import EventsCard from "../Popular-Events/EventsCard.jsx";
import EventsCardNav from "../Popular-Events/EventsCardNav.jsx";

const PopularEvents = () => {
  return (
    <div className="h-[652px] ">
      <EventsCardNav className="mr-[120px]" />
      <img src={Background} alt="test" className="w-full object-fill" />
      <div className="backdrop-blur-xl top-0 left-0 fixed bg-black/64 w-full h-full"></div>
      <EventsCard />
    </div>
  );
};

export default PopularEvents;
