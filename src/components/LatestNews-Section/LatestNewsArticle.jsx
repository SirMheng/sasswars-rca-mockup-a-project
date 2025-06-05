import React from "react";

export default function LatestNewsArticle({
  title,
  description,
  date,
  imageUrl,
}) {
  return (
    <section className="w-[588px] bg-[#1E1F22] rounded-3xl flex items-center ">
      <div className="ml-[16px]">
        <img
          src={imageUrl}
          alt="image here"
          className="h-[251px] w-[251px] object-cover rounded-3xl"
        ></img>
      </div>

      <article className="h-[251px] w-[285px]  ml-[20px]">
        <h1 className="text-white h-[54px] w-[285px] font-[600px] text-xl ">
          {title}
        </h1>
        <p className="text-white/60 text-[14px] mt-[35px]">{description}</p>
        <div className="mt-[52px] font-[400px] text-white h-[44px] w-[164px] ">
          <p className="text-[12px]">Published: </p>
          <p className="text-[16px]">{date}</p>
        </div>
      </article>
    </section>
  );
}
