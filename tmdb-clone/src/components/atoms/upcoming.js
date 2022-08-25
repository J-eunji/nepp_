import { atom } from "recoil";
import { getUpcoming } from "../../dataApi";

const getResults = async () => {
  let { results } = await getUpcoming();
  return results;
};

export const upcomingState = atom({
  key: "upcomingState",
  default: getResults,
});
