import { useEffect, useState } from "react";
import GoBackStageCard from "./GoBackStageCard";
import LatestNewsCard from "./LatestNewsCard";
import { getAllMockUpData } from "../../services/events.service";

import EventsCardLoader from "../Reusable-Components/EventsCardLoader";

export default function LatestNewsComponent() {
  const [backStage, setbackStage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllMockUpData().then((data) => {
      setbackStage(data.goBackStage[0]);
      setLoading(false);
    });
  }, []);

  return (
    <div className="relative h-[981px] bg-black flex flex-col justify-center px-[120px]">
      {loading ? (
        Array.from({ length: 1 }).map((_, idx) => (
          <EventsCardLoader key={idx} idx={idx} />
        ))
      ) : (
        <GoBackStageCard
          title={backStage.title}
          imageUrl={backStage.imageUrl}
          description={backStage.description}
          btnText={"Watch"}
        />
      )}

      <LatestNewsCard />
    </div>
  );
}
