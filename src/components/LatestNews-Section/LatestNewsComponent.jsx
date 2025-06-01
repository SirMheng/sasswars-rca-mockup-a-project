import React from "react";
import GoBackStageCard from "./GoBackStageCard";
import LatestNewsCard from "./LatestNewsCard";

export default function LatestNewsSection() {
  return (
    <div className="h-[981px] bg-black flex flex-col justify-center px-[120px]">
      <GoBackStageCard />
      <LatestNewsCard />
    </div>
  );
}
