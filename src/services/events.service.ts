import eventsJson from "../data/artOrganizationsData.json";

export const getPopularEvents = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(eventsJson);
    }, 1500);
  });
};
