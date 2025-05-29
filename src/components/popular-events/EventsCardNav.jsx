import React from "react";

const EventsCardNav = () => {
  return (
    <div className="absolute top-0 left-0 px-[120px] mt-[77px] h-[88px] w-full flex justify-between items-center z-20">
      <h1 className="text-2xl font-bold text-white">Popular Events</h1>
      <div className="flex items-center gap-8">
        <button className="text-white">See all</button>
        <div className="flex gap-4">
          <button className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center">
            {/* Add ChevronLeft icon here */}
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center">
            {/* Add ChevronRight icon here */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsCardNav;

//Popular Events, See all, Chevron Icons

//Insert Icons sa button
