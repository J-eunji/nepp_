import Title from "../common/Title";
import PopularList from "./PopularList";

export default function Home() {
  return (
    <>
      <Title title="인기영화" />
      <PopularList />
      <Title title="인기TV" />
      <PopularList />
    </>
  );
}
