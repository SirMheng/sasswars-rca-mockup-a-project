import citiesJson from "../data/cities.json";

export const getCities = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(citiesJson);
    }, 1500);
  });
};
