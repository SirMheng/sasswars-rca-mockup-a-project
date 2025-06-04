import mockUpData from "../data/mockUpData.json";

const renderTime = 2000;

export const getCities = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUpData.cities);
    }, renderTime);
  });
};

export const getlatestNews = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUpData.latestNews);
    }, renderTime);
  });
};

export const getBackStage = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUpData.goBackStage);
    }, renderTime);
  });
};

export const getWinTickets = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUpData.winTickets);
    }, renderTime);
  });
};

export const getWinTicketsCard = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUpData.winTicketsCard);
    }, renderTime);
  });
};

// planning to use this when on master branch

// export const getAllMockUpData = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         cities:         mockUpData.cities,
//         latestNews:     mockUpData.latestNews,
//         goBackStage:    mockUpData.goBackStage,
//         winTickets:     mockUpData.winTickets,
//         winTicketsCard: mockUpData.winTicketsCard,
//       });
//     }, renderTime);
//   });
// };
