import { FunctionComponent } from "preact";
import { Hero } from "../types.ts";


type HeroCardProps = Hero;

const HeroCard: FunctionComponent<HeroCardProps> = (props) => {
  const { name, image, sound } = props;
  return (
    <div class="characterContainer">
      <h2 class="text-overflow">{name}</h2>
      <img class="img-m half-rounded" src={image} />
      <audio controls>
        <source src={sound} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default HeroCard;