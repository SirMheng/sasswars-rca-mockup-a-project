import React from "react";
import heroCardImg from "../../assets/images/hero-card-image.jpg";

export default function HeroContent() {
  return (
    <div className="absolute z-1 w-full px-[120px]">
      <div className="max-w-[1200px] mx-auto">
        <section className="absolute h-[191px] w-[507px] mt-[378px] ">
          <h1 className="font-bold text-7xl w-[491px] tracking-normal">
            Your source for the arts.
          </h1>
          <p className="font-semibold text-[20px] mt-[20px] h-[27px] w-[506px] ">
            Search events,concerts,artists and much more.
          </p>
        </section>
        <section
          className="absolute top-[749px] w-[1200px] h-[417px] bg-black/64 backdrop-blur-md 
          border-2 border-[#1E1F22] rounded-3xl"
        >
          <div className=" flex justify-between items-start ">
            <div className="ml-[77px] mt-[77px]  ">
              <h1 className="h-[108px] w-[510px] font-bold text-[40px]">
                Get your brand featured on RCA today!
              </h1>
              <p className="mt-[20px] h-[54px] text-[20px] font-semibold w-[485px]">
                Looking for more exposure? Need help selling tickets? We got
                your back.
              </p>
              <button className="mt-[32px] w-[180px] h-[48px] rounded-[100px] bg-gradient-to-r from-[#c22026] to-[#c400cb] ">
                Learn more
              </button>
            </div>

            <img
              src={heroCardImg}
              alt="card image here"
              className="ml-[127px] w-[462px] h-[369px] p-[24px] rounded-[50px]"
            ></img>
          </div>
          <div className="flex justify-center gap-2 mt-[60px]">
            <span className="block w-2 h-2 bg-gray-500 rounded-full"></span>
            <span className="block w-2 h-2 bg-[#C22026] rounded-full"></span>
            <span className="block w-2 h-2 bg-gray-500 rounded-full"></span>
          </div>
        </section>
      </div>
    </div>
  );
}
