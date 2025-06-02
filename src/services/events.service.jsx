import citiesJson from "../data/cities.json";
import gbsJson from "../data/goBackStage.json";
import lnJson from "../data/latestNews.json";

const renderTime = 2000;

export const getCities = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(citiesJson);
    }, renderTime);
  });
};

export const getlatestNews = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(lnJson);
    }, renderTime);
  });
};

export const getBackStage = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(gbsJson);
    }, renderTime);
  });
};
