import PopularList from "./PopularList";

export default function Home() {
  return (
    <>
      <PopularList title="인기 영화" type="movie" />
      <PopularList title="인기 TV" type="tv" />
    </>
  );
}
