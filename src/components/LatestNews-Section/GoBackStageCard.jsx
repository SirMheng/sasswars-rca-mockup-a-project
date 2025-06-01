import React from "react";
import gbsImage from "../../assets/latestNews-image/davidGilmour.jpg";
import { FaPlay } from "react-icons/fa";

export default function GoBackStageCard() {
  return (
    <div className="w-[1200px] h-[417px] border-2 border-[#1E1F22] mt-[80px] flex justify-between rounded-3xl mx-auto">
      <section className="text-white mt-[77px] ml-[77px] w-[510px]">
        <h1 className="h-[108px] w-[501px]  font-bold text-[40px] leading-[54px]">
          Go backstage and behind the curtains!
        </h1>
        <p className="mt-[20px] w-[485px] h-[54px] font-semibold text-xl">
          Experience VIP backstage access to digital events around the world.
          Watch our latest episode!
        </p>
        <button className="w-[167.5px] h-[48px] mt-[32px] rounded-[100px] bg-gradient-to-r from-[#c22026] to-[#c400cb] filter hover:brightness-110 transition-[filter] hover:cursor-pointer duration-200">
          Watch
        </button>
      </section>
      <section className="text-white m-[24px] relative ">
        <img
          src={gbsImage}
          alt="image here"
          className="w-[463px] h-[369px] object-cover rounded-3xl"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[48px] h-[48px] bg-black/60 p-3 rounded-full border-1 hover:bg-black/80 transition-colors flex items-center justify-center hover:cursor-pointer">
            <FaPlay className="w-[18px] h-[19px] ml-[4px]" />
          </div>
        </div>
      </section>
    </div>
  );
}
