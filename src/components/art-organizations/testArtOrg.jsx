import React, { useState, useEffect } from "react";
import { getAllMockUpData } from "../../services/events.service";
import ArtOrgCardLoader from "../Reusable-Components/ArtOrgCardLoader";
import { FaHeart } from "react-icons/fa";

const OrganizationsCard = () => {
  const [artOrg, setArtOrg] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllMockUpData().then((data) => {
      const withLikes = data.artOrganizations.map((event) => ({
        ...event,
        isLiked: false,
      }));
      setArtOrg(withLikes);
      setLoading(false);
    });
  }, []);

  const handleLike = (idx) => {
    setArtOrg((prevEvents) =>
      prevEvents.map((event, index) =>
        index === idx ? { ...event, isLiked: !event.isLiked } : event
      )
    );
  };

  const dots = Array(6).fill(null);

  return (
    <div className="w-full mx-auto flex justify-between items-center mt-[24px] ">
      {loading
        ? Array.from({ length: 4 }).map((_, idx) => (
            <ArtOrgCardLoader key={idx} />
          ))
        : artOrg.map((event, index) => (
            <div key={index}>
              <div className="h-[406px] w-[282px] bg-[#111112] rounded-[16px]  ">
                <div className="w-[282px] h-[207px] rounded-t-[10px] overflow-hidden relative">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="object-cover w-full h-full"
                  />

                  {/* Heart Icon  */}
                  <div
                    className="absolute top-4 right-4 cursor-pointer"
                    onClick={() => handleLike(index)}
                  >
                    <FaHeart
                      className="text-2xl transition-colors duration-100"
                      style={{
                        color: event.isLiked ? "#C22026" : "white",
                        WebkitTextStroke: "2px white",
                        opacity: event.isLiked ? 1 : 0.7,
                      }}
                    />
                  </div>

                  {/* dots */}

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

                {/* bottom discription container */}

                <div className="flex flex-col justify-start gap-1 ml-[16px] ">
                  <div className="flex flex-col justify-start mt-[16px]">
                    <h1 className="text-white font-[600px] text-[16px]">
                      <b>{event.title}</b>
                    </h1>
                    <p className="text-white/60 mb-[12px]">{event.location}</p>
                  </div>

                  <div className="text-white/60  w-[250px] text-[12px] opacity-[60%]">
                    <p>{event.description}</p>
                  </div>

                  <div className="flex gap-2 mt-[16px]">
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

                {/* divider */}
              </div>
            </div>
          ))}
      {/* map div */}
    </div>
  );
};

export default OrganizationsCard;
