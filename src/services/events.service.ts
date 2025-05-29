import eventsJson from "../data/popularEvents.json";

export const getPopularEvents = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(eventsJson);
    }, 1500);
  });
};
