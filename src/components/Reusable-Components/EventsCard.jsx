import React from "react";
import { FaPlay } from "react-icons/fa6";
import Buttons from "./Buttons";

export default function EventsCard({ title, imageUrl, description, btnText }) {
  return (
    <div className="w-[1200px] h-[417px] border-2 border-[#1E1F22] mt-[80px] flex justify-between rounded-3xl mx-auto">
      <section className="text-white mt-[77px] ml-[77px] w-[510px]">
        <h1 className="h-[108px] w-[501px]  font-bold text-[40px] leading-[54px]">
          {title}
        </h1>
        <p className="mt-[20px] w-[485px] h-[54px] font-semibold text-xl">
          {description}
        </p>
        <Buttons btnText={btnText} />
      </section>
      <section className="text-white m-[24px] relative ">
        <img
          src={imageUrl}
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
