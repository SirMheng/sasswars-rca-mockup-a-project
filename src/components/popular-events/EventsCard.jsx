import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import eventsData from "../../data/popularEvents.json";
import bookOfMormon from "../../assets/images/book-of-mormon.png";
import hamilton from "../../assets/images/hamilton.png";
import sfSoundbox from "../../assets/images/sf-soundbox.png";
import moulinRouge from "../../assets/images/moulin-rouge.png";

const imageMap = {
  "/src/assets/images/book-of-mormon.png": bookOfMormon,
  "/src/assets/images/hamilton.png": hamilton,
  "/src/assets/images/sf-soundbox.png": sfSoundbox,
  "/src/assets/images/moulin-rouge.png": moulinRouge,
};

const EventCard = () => {
  const [events] = useState(eventsData);
  const [likedEvents, setLikedEvents] = useState({});

  const handleLike = (eventId) => {
    setLikedEvents((prev) => ({
      ...prev,
      [eventId]: !prev[eventId],
    }));
  };

  // Generate 6 dots for the carousel indicator
  const dots = Array(6).fill(null);

  return (
    <div className="absolute top-[165px] px-[120px] w-full z-20">
      <div className="w-full h-[497px] mx-auto flex justify-between items-center">
        {events.map((event, index) => (
          <div key={index}>
            <div className="h-[450px] w-[282px] bg-black rounded-t-[10px] rounded-b-[10px]">
              <div className="w-[282px] h-[207px] rounded-t-[10px] overflow-hidden relative">
                <img
                  src={imageMap[event.imageUrl]}
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
                      color: likedEvents[index] ? "#C22026" : "white",
                      WebkitTextStroke: "2px white",
                      opacity: likedEvents[index] ? 1 : 0.7,
                    }}
                  />
                </div>

                {/* Carousel Dots */}
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
                <div className="flex justify-between items-center pr-4">
                  <div className="text-white">
                    <b>{event.title}</b>
                  </div>
                  <div className="flex flex-col items-end text-white">
                    <div className="font-bold text-lg mr-[10px]">
                      {event.price}
                    </div>
                    <div className="absolute mt-[30px] mb-[151px] text-xs opacity-80">
                      Start from
                    </div>
                  </div>
                </div>
                <div className="text-white mb-[12px]">{event.location}</div>
                <div className="text-white">
                  <b>{event.dateRange}</b>
                </div>
                <div className="text-white text-[12px] opacity-[60%]">
                  <p>{event.description}</p>
                </div>

                {/* Tags */}
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

export default EventCard;
