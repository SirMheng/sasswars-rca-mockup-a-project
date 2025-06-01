import React from "react";
import LatestNewsNav from "./LatestNewsNav";
import LatestNewsCardList from "./LatestNewsCardList";

export default function LatestNewsCard() {
  return (
    <div className="w-[1200px] h-[354px] mt-[48px] border-2 border-red-500 mx-auto">
      <LatestNewsNav />
      <LatestNewsCardList />
    </div>
  );
}
