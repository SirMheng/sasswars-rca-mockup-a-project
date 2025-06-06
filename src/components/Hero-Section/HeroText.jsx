import { useState, useEffect } from "react";
import { getAllMockUpData } from "../../services/events.service";

export default function HeroText() {
  const [heroText, setHeroText] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllMockUpData().then((data) => {
      setHeroText(data.heroText[0]);
      setLoading(false);
    });
  }, []);

  return (
    <div className="absolute inset-0 mt-[378px] h-[191px] text-white z-20 max-w-[1200px]  mx-auto">
      {loading ? (
        <section className="text-white w-[507px] animate-pulse">
          <div
            className="bg-gray-700 h-[144px] w-[491px]   
          rounded-3xl"
          ></div>
          <div className=" bg-gray-600 mt-[20px] h-[27px] w-[506px] rounded-3xl"></div>
        </section>
      ) : (
        <section className="text-white w-[507px]">
          <h1 className="text-white  font-bold text-[72px] leading-[72px] h-[144px] w-[491px] tracking-normal">
            {heroText.title}
          </h1>
          <p className="text-white font-semibold text-[20px] mt-[20px] h-[27px] w-[506px]">
            {heroText.description}
          </p>
        </section>
      )}
    </div>
  );
}
