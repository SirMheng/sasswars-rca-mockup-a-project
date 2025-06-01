import React from "react";
import dbImage from "../../assets/latestNews-image/davidBrown.jpg";
import bImage from "../../assets/latestNews-image/beatles.jpg";

export default function LatestNewsCardList() {
  return (
    <div className="h-[282px] mt-[24px] flex justify-between">
      <section className="w-[588px] bg-[#1E1F22] rounded-3xl flex items-center ">
        <div className="ml-[16px]">
          <img
            src={dbImage}
            alt="image here"
            className="h-[251px] w-[251px] object-cover"
          ></img>
        </div>

        <article className="h-[251px] w-[285px]  ml-[20px]">
          <h1 className="text-white h-[54px] w-[285px] font-[600px] text-xl ">
            An exclusive interview with David Brown - Mr. Piano man
          </h1>
          <p className="text-white/60 text-[14px] mt-[35px]">
            1-on-1 interview with the legendary band and an inside look at their
            jouney through the years. A read you won’t want to miss!
          </p>
          <div className="mt-[52px] font-[400px] text-white h-[44px] w-[164px] ">
            <p className="text-[12px]">Published: </p>
            <p className="text-[16px]">04/18/2021</p>
          </div>
        </article>
      </section>

      <section className="w-[588px] bg-[#1E1F22] rounded-3xl flex items-center ">
        <div className="ml-[16px]">
          <img
            src={bImage}
            alt="image here"
            className="h-[251px] w-[251px] object-cover"
          ></img>
        </div>

        <article className="h-[251px] w-[285px]  ml-[20px]">
          <h1 className="text-white h-[54px] w-[285px] font-[600px] text-xl">
            An exclusive interview with David Brown - Mr. Piano man
          </h1>
          <p className="text-white/60 text-[14px] mt-[35px]">
            1-on-1 interview with the legendary band and an inside look at their
            jouney through the years. A read you won’t want to miss!
          </p>
          <div className="mt-[52px] font-[400px] text-white h-[44px] w-[164px]">
            <p className="text-[12px]">Published: </p>
            <p className="text-[16px]">04/18/2021</p>
          </div>
        </article>
      </section>
    </div>
  );
}
