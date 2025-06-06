import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { popularEvents } from "../../data/mockUpData.json";

const PopularEventsCard = () => {
  const [events, setEvents] = useState(
    popularEvents.map((event) => ({
      ...event,
      isLiked: false,
      image: null,
    }))
  );

  useEffect(() => {
    const loadImages = async () => {
      const updatedEvents = await Promise.all(
        events.map(async (event) => {
          const imageModule = await import(
            `../../assets/images/${event.imageUrl.split("/").pop()}`
          );
          return {
            ...event,
            image: imageModule.default,
          };
        })
      );
      setEvents(updatedEvents);
    };

    loadImages();
  }, []);

  const handleLike = (eventId) => {
    setEvents((prevEvents) =>
      prevEvents.map((event, index) =>
        index === eventId ? { ...event, isLiked: !event.isLiked } : event
      )
    );
  };

  const dots = Array(6).fill(null);

  return (
    <div className="w-full">
      <div className="w-full h-[497px] mx-auto mt-[26px] flex justify-center gap-6">
        {events.map((event, index) => (
          <div key={index} className="flex-shrink-0">
            <div className="h-[450px] w-[282px] bg-black rounded-t-[10px] rounded-b-[10px]">
              <div className="w-[282px] h-[207px] rounded-t-[10px] overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-cover w-full h-full"
                />
                <div
                  className="absolute top-4 right-4 cursor-pointer"
                  onClick={() => handleLike(index)}
                >
                  <FaHeart
                    className="text-2xl transition-colors duration-200"
                    style={{
                      color: event.isLiked ? "#C22026" : "white",
                      WebkitTextStroke: "2px white",
                      opacity: event.isLiked ? 1 : 0.7,
                    }}
                  />
                </div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {dots.map((_, dotIndex) => (
                    <div
                      key={dotIndex}
                      className={`w-1 h-1 rounded-full bg-white ${
                        dotIndex === 0 ? "opacity-100" : "opacity-50"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-1 ml-[16px] mt-[16px]">
                <div className="flex justify-between items-start pr-4">
                  <div className="flex flex-col">
                    <div className="text-white">
                      <b>{event.title}</b>
                    </div>
                    <div className="text-white text-[12px] opacity-[60%] mt-[4px]">
                      {event.Location}
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-white mr-[16px]">
                      <b>{event.price}</b>
                    </div>
                    <div className="text-white text-[12px] opacity-[60%]">
                      <p>starts from</p>
                    </div>
                  </div>
                </div>
                <div className="text-white mt-[12px]">
                  <b>{event.dateRange}</b>
                </div>
                <div className="text-white text-[12px] opacity-[60%] mt-[12px] mr-[16px]">
                  <p>{event.description}</p>
                </div>

                <div className="flex gap-2 mt-3 mb-4">
                  {event.tags &&
                    event.tags.map((tag, tagIndex) => (
                      <div
                        key={tagIndex}
                        className="relative flex items-center justify-center px-4 py-2 text-white text-xs rounded-full border border-[#C22026] bg-[#C22026] overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-black opacity-80"></div>
                        <span className="relative z-10">{tag}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularEventsCard;
