import React, { useRef, useState, useEffect } from "react";
import rcaLogo from "../../assets/images/company-logo.png";
import { LuUserRound } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import NavbarDetails from "./NavbarDetails";

export default function HeaderNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="fixed top-0 left-0  px-[32px] z-1 mt-[24px] h-[88px] w-full flex justify-between items-center">
      <img src={rcaLogo} alt="rca logo" className="h-[48px] w-[64px]"></img>
      <div className=" flex items-center " ref={dropdownRef}>
        <p className="font-semibold text-base">For professionals</p>
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-[32px] bg-[#1E1F22] h-[40px] w-[80px] rounded-[100px] relative flex justify-center items-center px-[4px] gap-[10.25px] "
        >
          <RxHamburgerMenu className="h-[32px] w-[20px] ml-[8.25px]" />
          {menuOpen && <NavbarDetails />}

          <div className="bg-[#101010] h-[32px] w-[32px] rounded-[100px] flex items-center justify-center ">
            <LuUserRound />
          </div>
        </div>
      </div>
    </div>
  );
}
