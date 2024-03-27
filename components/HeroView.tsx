import { FunctionComponent } from "preact";
import HeroCard from "./HeroCard.tsx";
import { Hero } from "../types.ts";


type HeroViewProps = Hero;

const HeroView: FunctionComponent<HeroViewProps> = (props) => {
	const { name, image, sound } = props;
  return (
    <div class="flex-row flex-around">
      <HeroCard
        name={name}
        image={image}
        sound={sound}
      />
    </div>
  );
};

export default HeroView;