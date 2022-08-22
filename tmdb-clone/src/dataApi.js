import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDE4NWNhZWNmOTE4MTJkODc4NDcxNTFlZjYyMjZiYiIsInN1YiI6IjYyZmRlYjY0NzUxMTBkMDA4NDJmMTAyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9yOctkSxpvyNEW7cKuJzV3t5rdqUTfaHpk_QOVrwsHk",
  },
});

export const getPopular = async () => {
  let results = await instance.get("/movie/popular", {
    params: {
      Language: "ko-KR",
    },
  });
  return results;
};
