import spotlightJson from "../data/spotlightData.json";

export const getSpotlightData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(spotlightJson);
    }, 1500);
  });
};
