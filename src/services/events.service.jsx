import citiesJson from "../data/cities.json";

export const getCities = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(citiesJson);
    }, 3000);
  });
};

// export const getLatestNews = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(citiesJson);
//     }, 3000);
//   });
// };
