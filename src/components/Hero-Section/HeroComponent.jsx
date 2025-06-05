import React from "react";
import heroImage from "../../assets/images/hero-image.jpg";
import HeaderNav from "./HeaderNav";

export default function HeroComponent() {
  return (
    <div className="bg-black h-[1590px] text-white">
      <HeaderNav />
      <img
        src={heroImage}
        alt="bg-img here"
        className="h-[900px] w-full object-fill"
      ></img>
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 "></div>
    </div>
  );
}
