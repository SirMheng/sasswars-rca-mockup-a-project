import React from "react";

export default function Buttons({ btnText }) {
  return (
    <button className="w-[167.5px] h-[48px] mt-[32px] rounded-[100px] bg-gradient-to-r from-[#c22026] to-[#c400cb] filter hover:brightness-200 transition-[filter] hover:cursor-pointer duration-200">
      {btnText}
    </button>
  );
}
