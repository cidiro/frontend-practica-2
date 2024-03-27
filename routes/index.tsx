import { getAllHeros } from "../lib.ts";
import HerosView from "../components/HerosView.tsx";


export default async function Home() {
  try {
    const heros = await getAllHeros();
    return (
      <div class="container">
        <HerosView heros={heros} />
      </div>
    );
  } catch (error) {
    return <div>{error.message}</div>;
  }
}
