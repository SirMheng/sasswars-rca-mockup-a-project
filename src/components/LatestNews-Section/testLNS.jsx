import React from "react";
import { HiChevronLeft, HiChevronRight, HiPlay } from "react-icons/hi";

// Replace these with your actual imports or URLs
import backstageImg from "../../assets/city-image/chicago.png";
import interview1Img from "../../assets/city-image/chicago.png";
import interview2Img from "../../assets/city-image/chicago.png";

export default function FeaturedAndNewsSection() {
  const newsItems = [
    {
      title: "An exclusive interview with David Brown – Mr. Piano Man",
      description:
        "1-on-1 interview with the legendary band and an inside look at their journey through the years. A read you won’t want to miss!",
      date: "04/18/2021",
      img: interview1Img,
    },
    {
      title: "An exclusive interview with David Brown – Mr. Piano Man",
      description:
        "1-on-1 interview with the legendary band and an inside look at their journey through the years. A read you won’t want to miss!",
      date: "04/18/2021",
      img: interview2Img,
    },
  ];

  return (
    <div className="bg-black min-h-screen py-12">
      {/* -------------------------------------------------- */}
      {/* 1) Hero Card */}
      {/* -------------------------------------------------- */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[120px]">
        <div className="w-full bg-[#1E1F22] border border-[#272727] rounded-3xl overflow-hidden flex flex-col lg:flex-row items-center">
          {/* Left Text Block */}
          <div className="flex-1 p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-snug">
              Go backstage and behind the curtains!
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Experience VIP backstage access to digital events around the
              world. Watch our latest episode!
            </p>
            <button className="mt-6 bg-gradient-to-r from-[#E12C3D] to-[#C400CB] text-white py-3 px-8 rounded-full font-semibold hover:opacity-90 transition-opacity">
              Watch
            </button>
          </div>

          {/* Right Image + Play Icon Overlay */}
          <div className="relative w-full lg:w-1/2 h-[260px] lg:h-[300px]">
            <img
              src={backstageImg}
              alt="Backstage sneak peek"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
              <div className="bg-black/60 p-3 rounded-full hover:bg-black/80 transition-colors">
                <HiPlay className="text-white w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------- */}
      {/* 2) Latest News Section */}
      {/* -------------------------------------------------- */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[120px] mt-16">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-white">Latest news</h3>
          <div className="flex items-center space-x-2">
            <button className="w-9 h-9 bg-[#272727] rounded-full flex items-center justify-center hover:bg-[#3a3a3a] transition-colors">
              <HiChevronLeft className="text-white w-5 h-5" />
            </button>
            <button className="w-9 h-9 bg-[#272727] rounded-full flex items-center justify-center hover:bg-[#3a3a3a] transition-colors">
              <HiChevronRight className="text-white w-5 h-5" />
            </button>
          </div>
        </div>

        {/* News Cards */}
        <div className="flex flex-col md:flex-row gap-6">
          {newsItems.map((item, idx) => (
            <div
              key={idx}
              className="flex-1 bg-[#1E1F22] rounded-2xl overflow-hidden flex"
            >
              {/* Image */}
              <div className="flex-shrink-0 w-36 md:w-48 h-36 md:h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-white text-lg font-semibold leading-snug">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <p className="mt-4 text-gray-500 text-xs">
                  Published: {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
