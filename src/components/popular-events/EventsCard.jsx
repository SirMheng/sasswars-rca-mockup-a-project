import React from "react";
//import { FaHeart } from "react-icons/fa";
import PopularEvent1 from "../../assets/images/book-of-mormon.png";
import eventsData from "../../data/popularEvents.json";

const EventCard = () => {
  return (
    <div className="absolute top-[165px] px-[120px] w-full z-20">
      <div className="w-full h-[497px] mx-auto flex justify-between items-center">
        {eventsData.events.map((event, index) => (
          <div
            key={index}
            className="h-[423px] w-[282px]  bg-black rounded-t-[10px] rounded-b-[10px]"
          >
            <div className="w-[282px] h-[207px] rounded-t-[10px] overflow-hidden">
              <img
                src={PopularEvent1}
                alt={event.title}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-1 ml-[16px] mt-[16px]">
              <div className="text-white">
                <b>{event.title}</b>
              </div>
              <div className="text-white mb-[12px]">{event.location}</div>
              <div className="text-white">
                <b>{event.dateRange}</b>
              </div>
              <div className="text-white text-[12px] opacity-[60%]">
                <p>
                  First staged in 2011, the play is a satirical examination of
                  the beliefs and practices of The Church of Jesus Christ of
                  Latter-day ...
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCard;

//EventCard handler,
//
// Image, Heart,
// title,
// price,
// description,

// align
