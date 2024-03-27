import HeroCard from "../components/HeroCard.tsx";
import { getAllHeros } from "../lib.ts";
import HerosView from "../components/HerosView.tsx";


export default async function Home() {
  try {
    const heros = await getAllHeros();
    return (
      <div class="flex-column">
        <h1 class="mainTitle">Heros</h1>
        <HerosView heros={heros} />
      </div>
    );
  } catch (error) {
    return <div>{error.message}</div>;
  }
}
