import { z } from "zod";

import { ZHeroProps } from "@breadchain.xyz/site-ui";

import * as heroUnsafe from "./hero.md";

const ZHero = z.object({
  frontmatter: ZHeroProps,
});
const {
  frontmatter: { tagline, heading, subheading },
} = ZHero.parse(heroUnsafe);

export { tagline, heading, subheading };
