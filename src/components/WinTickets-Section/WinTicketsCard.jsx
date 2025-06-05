import { useState, useEffect } from "react";
import EventsCard from "../Reusable-Components/EventsCard";
import EventCardLoader from "../Reusable-Components/EventsCardLoader";
import { getWinTicketsCard } from "../../services/events.service";

export default function WinTicketsCard() {
  const [wtCard, setWtCard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWinTicketsCard().then((data) => {
      setWtCard(data);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      {loading ? (
        <EventCardLoader />
      ) : (
        wtCard.map((wtc, index) => (
          <EventsCard
            key={index}
            title={wtc.title}
            imageUrl={wtc.imageUrl}
            description={wtc.description}
            btnText={"join today"}
          />
        ))
      )}
    </div>
  );
}
