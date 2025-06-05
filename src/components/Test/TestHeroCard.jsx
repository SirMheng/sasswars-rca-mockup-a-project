import { useState, useEffect } from "react";
import EventsCard from "../Reusable-Components/EventsCard";
import EventCardLoader from "../Reusable-Components/EventsCardLoader";
import { getHeroCard } from "../../services/events.service";

export default function HeroCard() {
  const [heroCard, setHeroCard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHeroCard().then((data) => {
      setHeroCard(data);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      {loading ? (
        <EventCardLoader />
      ) : (
        heroCard.map((hc, index) => (
          <EventsCard
            key={index}
            title={hc.title}
            imageUrl={hc.imageUrl}
            description={hc.description}
            btnText={"Learn more"}
          />
        ))
      )}
    </div>
  );
}
