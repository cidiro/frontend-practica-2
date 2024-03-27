import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import AddFormIsland from '../islands/AddFormIsland.tsx';
import { Hero } from '../types.ts';
import { getHeros } from '../lib.ts';
import HerosView from "../components/HerosView.tsx";
import { addHero } from '../lib.ts';


export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext<unknown, Hero>) => {
    try {
      const params = await req.formData();
      const { name, image, sound } = Object.fromEntries(params) as { 
        name: string, image: string, sound: string };
      
      await addHero({ name, image, sound });
      return ctx.render({ name, image, sound });
    } catch(e) {
      console.error(e);
      return new Response("Error", { status: 500 });
    }
  },
};


const Page = (props: PageProps<Hero>) => {
  return (
    <div class="container">
      <AddFormIsland />
      {/* {!!props.data && (
        <div class="flex-column">
          <HerosView heros={props.data} />
        </div>
      )} */}
    </div>
  );
};

export default Page;