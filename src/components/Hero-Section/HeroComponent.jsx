import React from "react";
import heroImage from "../../assets/images/hero-image.jpg";
import HeaderNav from "./HeaderNav";
import HeroContent from "./HeroContent";

export default function HeroComponent() {
  return (
    <div class="bg-black h-[1590px] text-white">
      <HeaderNav />
      <HeroContent />
      <img
        src={heroImage}
        alt="bg-img here"
        class="h-[900px] w-full object-fill"
      ></img>
      <div class="fixed top-0 left-0 w-full h-full bg-black/50 "></div>
    </div>
  );
}
