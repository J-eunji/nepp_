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
// async 비동기를 동기처리처럼 받아오는 함수

export const getPopular = async (category, page) => {
  let { data } = await instance.get(`/${category}/popular`, {
    params: {
      language: "ko-KR",
      page,
    },
  });
  return data;
};

// https://developers.themoviedb.org/3/movies/get-movie-details

export const getDetails = async (url) => {
  let results = await instance.get(url, {
    params: {
      language: "ko-KR",
    },
  });
  return results;
};

export const getSearch = async (query) => {
  try {
    let result = await instance.get("/search/multi", {
      params: {
        language: "ko-KR",
        query,
      },
    });
    return result;
  } catch (e) {
    console.log(e);
  }
};
