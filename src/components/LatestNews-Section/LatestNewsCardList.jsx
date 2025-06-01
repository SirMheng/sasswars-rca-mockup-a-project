import { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";

import LatestNewsArticle from "./LatestNewsArticle";
import { getlatestNews } from "../../services/events.service";
import Cards from "../Reusable-Component/Cards";

export default function LatestNewsCardList() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getlatestNews().then((data) => {
      setNews(data);
      setLoading(false);
    });
  }, []);
  return (
    <div className="h-[282px] mt-[24px] flex justify-between">
      {loading
        ? Array.from({ length: 2 }).map((_, idx) => <Cards idx={idx} />)
        : news.map((news, index) => (
            <LatestNewsArticle
              key={index}
              title={news.title}
              description={news.description}
              date={news.date}
              imageUrl={news.imageUrl}
            />
          ))}
    </div>
  );
}
