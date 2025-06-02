import React from "react";
import EventsCard from "../Reusable-Components/EventsCard";

export default function GoBackStageCard({
  title,
  imageUrl,
  description,
  btnText,
}) {
  return (
    <EventsCard
      title={title}
      imageUrl={imageUrl}
      description={description}
      btnText={btnText}
    />
  );
}
