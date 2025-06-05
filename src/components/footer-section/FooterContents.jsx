import React from "react";
import RedCurtainLogo from "../../assets/images/red-curtain.png";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";

const FooterContents = () => {
  return (
    <div className="mt-[48.5px]">
      <div className="absolute text-white flex flex-col gap-4">
        <img
          className="ml-[120px] w-[64px] h-[48px]"
          src={RedCurtainLogo}
          alt="red-curtain-logo.png"
        />

        <div className="font-sans font-normal text-base leading-none tracking-normal">
          <p className="ml-[120px] mt-[140px] ">© Red Curtain Addict 2021</p>
        </div>
      </div>

      <div className="absolute text-white flex flex-col gap-6 ml-[324px]">
        <p className="font-sans font-normal text-base leading-none tracking-normal">
          Events
        </p>
        <p className="font-sans font-normal text-base leading-none tracking-normal">
          News
        </p>
        <p className="font-sans font-normal text-base leading-none tracking-normal">
          Episodes
        </p>
      </div>

      <div className="absolute text-white flex flex-col gap-6 ml-[528px]">
        <p className="font-sans font-normal text-base leading-none tracking-normal">
          For Professionals
        </p>
        <p className="font-sans font-normal text-base leading-none tracking-normal">
          About us
        </p>
        <p className="font-sans font-normal text-base leading-none tracking-normal">
          Contact us
        </p>
        <p className="font-sans font-normal text-base leading-none tracking-normal">
          Terms & Conditions
        </p>
      </div>

      <div className="absolute text-white flex flex-col gap-4 ml-[836px]">
        <p className="w-[382px] h-[44px] font-sans font-normal text-base leading-none tracking-normal">
          Follow us on social media and join our growing community of performing
          arts enthusiasts.
        </p>

        <div className="flex flex-row gap-4 mt-2">
          <div className="w-10 h-10 rounded-full bg-[#1E1F22] flex items-center justify-center">
            <FaInstagram size={20} color="white" />
          </div>
          <div className="w-10 h-10 rounded-full bg-[#1E1F22] flex items-center justify-center">
            <FiFacebook size={20} color="white" />
          </div>
          <div className="w-10 h-10 rounded-full bg-[#1E1F22] flex items-center justify-center">
            <FiTwitter size={20} color="white" />
          </div>
          <div className="w-10 h-10 rounded-full bg-[#1E1F22] flex items-center justify-center">
            <FiYoutube size={20} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContents;
