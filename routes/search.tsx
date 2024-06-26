import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import SearchIsland from '../islands/SearchIsland.tsx';
import { Hero } from '../types.ts';
import { getHeros } from '../lib.ts';
import HerosView from "../components/HerosView.tsx";


export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext<unknown, Hero[]>) => {
    try {
      const params = await req.formData();
      const { name } = Object.fromEntries(params) as { name: string };
      
      const heroData = await getHeros(name);
      return ctx.render(heroData);
    } catch(e) {
      console.error(e);
      return new Response("Error", { status: 500 });
    }
  },
};


const Page = (props: PageProps<Hero[]>) => {
  return (
    <div class="container">
      <SearchIsland />
      {!!props.data && (
        <div class="flex-column">
          <HerosView heros={props.data} />
        </div>
      )}
    </div>
  );
};

export default Page;