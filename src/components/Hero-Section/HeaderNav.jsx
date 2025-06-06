import { useRef, useState, useEffect } from "react";
import { LuUserRound } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import HeaderDetails from "./HeaderDetails";
import rcaLogo from "../../assets/images/company-logo.png";

export default function HeaderNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [showHeader, setShowHeader] = useState(true);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const lastScrollY = useRef(0);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // If we are at the very top, reset hasScrolled → false
      if (currentY === 0) {
        setHasScrolled(false);
        setIsScrollingUp(false);
        setShowHeader(true);
      } else {
        // Once we've moved off the top, mark hasScrolled = true
        if (!hasScrolled && currentY > 0) {
          setHasScrolled(true);
        }

        // Only compare direction if hasScrolled is true
        if (hasScrolled) {
          if (currentY < lastScrollY.current) {
            // Scrolled up
            setIsScrollingUp(true);
            setShowHeader(true);
          } else if (currentY > lastScrollY.current) {
            // Scrolled down
            setIsScrollingUp(false);
            setShowHeader(false);
          }
        }
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [menuOpen]);

  return (
    <div
      className={`fixed top-0 left-0 px-[32px] z-30  h-[88px] w-full flex justify-between items-center transition-transform duration-300 transform ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }
      ${isScrollingUp ? "backdrop-blur-sm" : ""}  `}
    >
      <img src={rcaLogo} alt="rca logo" className="h-[48px] w-[64px]" />
      <div ref={dropdownRef} className=" text-white flex items-center ">
        <p className="font-semibold text-base">For professionals</p>
        <div
          onClick={() => setMenuOpen((prev) => !prev)}
          className="ml-[32px] bg-[#1E1F22] h-[40px] w-[80px] rounded-[100px] relative flex justify-center items-center px-[4px] gap-[10.25px] "
        >
          <RxHamburgerMenu className="h-[32px] w-[20px] ml-[8.25px]" />
          {menuOpen && (
            <div className="absolute top-full right-0 mt-2">
              <HeaderDetails />
            </div>
          )}

          <div className="bg-[#101010] h-[32px] w-[32px] rounded-[100px] flex items-center justify-center ">
            <LuUserRound />
          </div>
        </div>
      </div>
    </div>
  );
}
