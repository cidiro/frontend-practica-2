import { FunctionComponent } from "preact";
import HeroCard from "./HeroCard.tsx";
import { Hero } from "../types.ts";


type HerosViewProps = {
  heros: Hero[];
};

const HerosView: FunctionComponent<HerosViewProps> = ({ heros }) => {
  return (
    <div class="flex-row flex-around">
      {heros.map((char: Hero) => (
        <a href={"/hero/" + char.name}>
          <HeroCard
            name={char.name}
            image={char.image}
            sound={char.sound}
          />
        </a>
      ))}
    </div>
  );
};

export default HerosView;
