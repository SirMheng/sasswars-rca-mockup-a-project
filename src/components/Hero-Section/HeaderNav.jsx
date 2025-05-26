import React from "react";
import rcaLogo from "../../assets/images/company-logo.png";
import { LuUserRound } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";

export default function HeaderNav() {
  return (
    <div className="fixed top-0 left-0  px-[32px] z-1 mt-[24px] h-[88px] w-full flex justify-between items-center">
      <img src={rcaLogo} alt="rca logo" class="h-[48px] w-[64px]"></img>
      <div class=" flex items-center ">
        <p class="font-semibold text-base">For professionals</p>
        <button class="ml-[32px] bg-[#1E1F22] h-[40px] w-[80px] rounded-[100px] flex justify-center px-[4px] gap-[10.25px] items-center">
          <RxHamburgerMenu class="h-[32px] w-[20px] ml-[8.25px]" />

          <div class="bg-[#101010] h-[32px] w-[32px] rounded-[100px] flex items-center justify-center ">
            <LuUserRound />
          </div>
        </button>
      </div>
    </div>
  );
}
