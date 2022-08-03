let movieList = [
  {
    id: 1,
    title: "강아지",
    actors: "카카, 몽실",
    star: 5,
  },
  {
    id: 2,
    title: "고양이",
    actors: "멍구, 꿀떡",
    star: 5,
  },
  {
    id: 3,
    title: "친칠라",
    actors: "오늘, 내일",
    star: 5,
  },
];

function Movie({ movie01 }) {
  let { title, actors, star } = movie01;
  return (
    <li>
      <h2>제목: {title}</h2>
      <div>주연: {actors}</div>
      <div>별점: {star}점</div>
    </li>
  );
}

function MovieList() {
  return (
    <ul>
      {/* jsx 안에 배열 값 넣으면 순서대로 출력
      Array.prototype.map으로 데이터를 jsx 형식으로
      만들어 새로운 배열 반환*/}
      {movieList.map((movie) => {
        return <Movie movie01={movie} />;
      })}
    </ul>
  );
}

export default MovieList;
