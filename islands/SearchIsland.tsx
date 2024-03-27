import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import { getHeros } from "../lib.ts";
import HerosView from "../components/HerosView.tsx";
import { Hero } from "../types.ts";


const SearchIsland: FunctionComponent = () => {
  const [name, setName] = useState<string>("");
  const [searchData, setSearchData] = useState<Hero[]>([]);

  const fetchHeroData = async (name: string) => {
    try {
      const heroData = await getHeros(name);
      setSearchData(heroData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div class="container">
        <div class="wordForm">
          <input
            type="text"
            placeholder="Type a name"
            value={name}
            onInput={(e) => {
              setName(e.currentTarget.value);
            }}
          />
          <button
            onClick={() => fetchHeroData(name)}
          >
            Search
          </button>
        </div>
      </div>
      {searchData &&  <div class="flex-column"><HerosView heros={searchData} /></div>}
    </>
  );
};

export default SearchIsland;