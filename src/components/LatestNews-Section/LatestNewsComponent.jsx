import { useEffect, useState } from "react";
import GoBackStageCard from "./GoBackStageCard";
import LatestNewsCard from "./LatestNewsCard";
import { getBackStage } from "../../services/events.service";
import EventsCardLoader from "../Reusable-Components/EventsCardLoader";

export default function LatestNewsSection() {
  const [backStage, setbackStage] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBackStage().then((data) => {
      setbackStage(data);
      setLoading(false);
    });
  }, []);
  return (
    <div className="h-[981px] bg-black flex flex-col justify-center px-[120px]">
      {loading
        ? Array.from({ length: 1 }).map((_, idx) => (
            <EventsCardLoader key={idx} idx={idx} />
          ))
        : backStage.map((backStage, index) => (
            <GoBackStageCard
              key={index}
              title={backStage.title}
              imageUrl={backStage.imageUrl}
              description={backStage.description}
              btnText={"Watch"}
            />
          ))}

      <LatestNewsCard />
    </div>
  );
}
