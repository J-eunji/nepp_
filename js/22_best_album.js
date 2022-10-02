// 장르, 플레이 수
// 모든 장르는 재생된 횟수가 다르다.
// 베스트앨범 기준
// 속한 노래가 많이 재생된 장르를 두 개씩 모은다.
// 장르 내에서 많이 재생된 노래
// 장르 내에서 재생횟수가 같으면 고유번호가 낮은 노래를 수록
// 베스트앨범에 들어갈 노래의 고유번호 리턴

function solution(genres, plays) {
  const genreMap = new Map();
  genres
    .map((genre, index) => [genre, plays[index]])
    .forEach(([genre, play], index) => {
      const data = genreMap.get(genre) || { total: 0, songs: [] };
      genreMap.set(genre, {
        total: data.total + play,
        songs: [...data.songs, { play, index }]
          .sort((a, b) => b.play - a.play)
          .slice(0, 2),
      });
    });
  return [...genreMap]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((item) => item[1].songs)
    .map((song) => song.index);
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);

let arr = [
  { play: 500, index: 0 },
  { play: 150, index: 2 },
  { play: 800, index: 3 },
];
console.log(arr.sort((a, b) => b.play - a.play));
