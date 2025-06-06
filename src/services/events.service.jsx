import HeroText from "../components/Test/TestHeroText";
import mockUpData from "../data/mockUpData.json";

const renderTime = 2000;

// export const getlatestNews = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(mockUpData.latestNews);
//     }, renderTime);
//   });
// };

// export const getBackStage = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(mockUpData.goBackStage);
//     }, renderTime);
//   });
// };

// export const getWinTickets = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(mockUpData.winTickets);
//     }, renderTime);
//   });
// };

// export const getWinTicketsCard = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(mockUpData.winTicketsCard);
//     }, renderTime);
//   });
// };

// planning to use this when on master branch

export const getAllMockUpData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        heroText: mockUpData.heroText,
        heroCard: mockUpData.heroCard,
        cities: mockUpData.cities,
        popularEvents: mockUpData.popularEvents,
        performanceSpotlight: mockUpData.performanceSpotlight,
        artOrganizations: mockUpData.artOrganizations,
        latestNews: mockUpData.latestNews,
        goBackStage: mockUpData.goBackStage,
        winTickets: mockUpData.winTickets,
        winTicketsCard: mockUpData.winTicketsCard,
      });
    }, renderTime);
  });
};
