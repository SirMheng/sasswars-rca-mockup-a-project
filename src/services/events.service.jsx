import citiesJson from "../data/cities.json";
import gbsJson from "../data/goBackStage.json";
import lnJson from "../data/latestNews.json";

export const getCities = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(citiesJson);
    }, 3000);
  });
};

export const getlatestNews = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(lnJson);
    }, 3000);
  });
};

export const getBackStage = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(gbsJson);
    }, 3000);
  });
};
