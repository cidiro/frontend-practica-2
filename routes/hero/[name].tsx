import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { getHero } from "../../lib.ts";
import HeroView from "../../components/HeroView.tsx";
import { Hero } from "../../types.ts";


export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Hero>) => {
    const { name } = ctx.params;
    try {
      const hero = await getHero(name);
      if (!hero)
        return new Response("Hero not found", { status: 404 });
      
      return ctx.render(hero);
    } catch (error) {
      console.error(error);
      return new Response("Error", { status: 500 });
    }
  },
};

const Page = (props: PageProps<Hero>) => {
  return (
    <div class="container">
      <HeroView {...props.data} />
    </div>
  );
};

export default Page;
