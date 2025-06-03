import React from "react";

export default function CardsLoader({ idx }) {
  return (
    <section
      key={`placeholder-${idx}`}
      className="w-[588px] bg-[#1E1F22] rounded-3xl flex items-center animate-pulse"
    >
      <div className="ml-[16px]">
        <div className="h-[251px] w-[251px] bg-gray-700 rounded-3xl"></div>
      </div>

      <article className="h-[251px] w-[285px] ml-[20px] space-y-4">
        <div className="h-[24px] w-[285px] bg-gray-700 rounded"></div>
        <div className="h-[48px] w-[285px] bg-gray-700 rounded mt-[35px]"></div>
        <div className="mt-[52px] space-y-2">
          <div className="h-[12px] w-[64px] bg-gray-600 rounded"></div>
          <div className="h-[16px] w-[120px] bg-gray-700 rounded"></div>
        </div>
      </article>
    </section>
  );
}
