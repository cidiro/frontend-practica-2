import axios from "npm:axios";
import { Hero } from "./types.ts";

export const getHero = async (name: string): Promise<Hero | null> => {
  const response = await axios.get<Hero[]>(
    "https://supermondongo.deno.dev/" + name,
  );
  if (response.data.length === 0) {
    return null;
  }
  return response.data[0];
};

export const getAllHeros = async (): Promise<Hero[]> => {
  const response = await axios.get<Hero[]>(
    "https://supermondongo.deno.dev/",
  );
  return response.data;
};

export const getHeros = async (name: string): Promise<Hero[]> => {
    const response = await axios.get<Hero[]>(
      "https://supermondongo.deno.dev/" + name,
    );
    return response.data;
};

export const addHero = async (hero: Hero): Promise<void> => {
  await axios.post("https://supermondongo.deno.dev/", {
    name: hero.name,
    image: hero.image,
    sound: hero.sound,
    creator: "rodrigo"
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const deleteHero = async (name: string): Promise<void> => {
  await axios.delete("https://supermondongo.deno.dev/", {
    params: {
      name: name,
      creator: "rodrigo"
    }
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
};