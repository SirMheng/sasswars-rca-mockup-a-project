import { useState, useEffect } from "react";
import EventsCard from "../Reusable-Components/EventsCard";
import EventCardsLoader from "../Reusable-Components/EventsCardLoader";
import { getAllMockUpData } from "../../services/events.service";

export default function HeroCard() {
  const [heroCard, setHeroCard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllMockUpData().then((data) => {
      setHeroCard(data.heroCard[0]);
      setLoading(false);
    });
  }, []);
  return (
    <div className="absolute inset-0 z-20 px-[120px] mt-[669px]">
      {loading ? (
        <div className="w-[1200px] h-[417px] rounded-3xl bg-black/64 backdrop-blur-md mx-auto">
          <EventCardsLoader />
        </div>
      ) : (
        <div className="w-[1200px] h-[417px] rounded-3xl bg-black/64 backdrop-blur-md mx-auto">
          <EventsCard
            title={heroCard.title}
            imageUrl={heroCard.imageUrl}
            description={heroCard.description}
            btnText={"Learn more"}
          />
        </div>
      )}
      <div className="flex justify-center gap-2 mt-[24px]">
        <span className="block w-2 h-2 bg-gray-500 rounded-full"></span>
        <span className="block w-2 h-2 bg-[#C22026] rounded-full"></span>
        <span className="block w-2 h-2 bg-gray-500 rounded-full"></span>
      </div>
    </div>
  );
}
