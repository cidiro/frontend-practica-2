import { FunctionComponent, JSX } from "preact";
import { useState } from "preact/hooks";
import { Hero } from "../types.ts";
import HeroView from "../components/HeroView.tsx";
import { deleteHero } from "../lib.ts";


type HeroIslandProps = Hero;

const HeroIsland: FunctionComponent<HeroIslandProps> = (props) => {
  const { name, image, sound } = props;
  const [deleted, setDeleted] = useState<boolean>(false);

  const deleteHandler = async () => {

    const creator = globalThis.prompt(
      `Enter the creator name`, '');

    if (!creator) return;

    setDeleted(true);
    await deleteHero(name, creator);
  };

  return (
    <div class="container">
      <div class="hero-island">
        <HeroView name={name} image={image} sound={sound} />
        <button onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {deleted && <p class="deleted">Hero "{name}" deleted</p>}
    </div>
  );
};

export default HeroIsland;
