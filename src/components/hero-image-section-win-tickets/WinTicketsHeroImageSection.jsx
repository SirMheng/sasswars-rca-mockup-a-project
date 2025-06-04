import React from "react";
import BackgroundImg from "../../assets/images/win-tickets-merch-image.svg";
import TextContent from "./TextContent";
import CTAButton from "./CTAButton";

const WinTicketsHeroImageSection = () => {
  return (
    <section
      className="w-[1440px] h-[600px] w-screen bg-cover bg-center flex items-center justify-center text-white text-center font-openSans"
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
      <div>
        <TextContent />
        <CTAButton />
      </div>
    </section>
  );
};

export default WinTicketsHeroImageSection;
