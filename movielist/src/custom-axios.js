import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDE4NWNhZWNmOTE4MTJkODc4NDcxNTFlZjYyMjZiYiIsInN1YiI6IjYyZmRlYjY0NzUxMTBkMDA4NDJmMTAyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9yOctkSxpvyNEW7cKuJzV3t5rdqUTfaHpk_QOVrwsHk",
  },
});

// https://developers.themoviedb.org/3/movies/get-popular-movies
// language 가져오기
// params 라는 key값에 넣어야 함

export const getPopularMovie = async () => {
  let { data } = await instance.get("movie/popular", {
    params: {
      language: "ko-KR",
    },
  });
  return data;
};

export const getPopularTV = async () => {
  let { data } = await instance.get("tv/popular", {
    params: {
      language: "ko-KR",
    },
  });
  return data;
};
