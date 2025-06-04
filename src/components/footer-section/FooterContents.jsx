import React from "react";
import RedCurtainLogo from "../../assets/images/red-curtain.png";

const FooterContents = () => {
  return (
    <div className="absolute text-white flex flex-col gap-4">
      <img
        className="w-[64px] h-[48px]"
        src={RedCurtainLogo}
        alt="red-curtain-logo.png"
      />
      <div>test1</div>
    </div>
  );
};

export default FooterContents;
