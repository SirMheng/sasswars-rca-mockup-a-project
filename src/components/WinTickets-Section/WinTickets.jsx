import { useState, useEffect } from "react";
import wtBG from "../../assets/winTickets-image/gambino.jpg";
import { getAllMockUpData } from "../../services/events.service";
import Buttons from "../Reusable-Components/Buttons";

export default function WinTickets() {
  const [winTickets, setWinTickets] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllMockUpData().then((data) => {
      setWinTickets(data.winTickets[0]);
      setLoading(false);
    });
  }, []);
  return (
    <div className="relative h-[600px] mt-[82px]">
      {loading ? (
        <div className="text-white absolute inset-0 flex flex-col items-center justify-center z-20 animate-pulse">
          <div className="w-[588px] h-[108px] mb-[20px] bg-gray-700 rounded-md"></div>
          <div className=" w-[486px] h-[27px] mb-[32px] bg-gray-600 rounded-md"></div>
          <div className="w-[167.5px] h-[48px] bg-gray-700 rounded-full"></div>
        </div>
      ) : (
        <div className="text-white absolute inset-0 flex flex-col items-center justify-center z-20">
          <h1 className="font-bold text-[48px] w-[588px] h-[108px] mb-[20px] leading-[54px]">
            {winTickets.title}
          </h1>
          <p className="font-semibold text-[20px] w-[486px] h-[27px] mb-[32px] leading-[100%]">
            {winTickets.description}
          </p>
          <Buttons btnText={"Get Started"} />
        </div>
      )}

      <img
        src={wtBG}
        alt=""
        className="overflow-hidden inset-0 w-full h-full object-cover "
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
    </div>
  );
}
