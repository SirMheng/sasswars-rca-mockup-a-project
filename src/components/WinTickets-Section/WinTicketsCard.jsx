import { useState, useEffect } from "react";
import EventsCard from "../Reusable-Components/EventsCard";
import EventCardLoader from "../Reusable-Components/EventsCardLoader";
import { getAllMockUpData } from "../../services/events.service";

export default function WinTicketsCard() {
  const [wtCard, setWtCard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllMockUpData().then((data) => {
      setWtCard(data.winTicketsCard[0]);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      {loading ? (
        <EventCardLoader />
      ) : (
        <EventsCard
          title={wtCard.title}
          imageUrl={wtCard.imageUrl}
          description={wtCard.description}
          btnText={"Join today"}
        />
      )}
    </div>
  );
}
