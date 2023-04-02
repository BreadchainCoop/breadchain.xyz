import { ZValueCardProps } from "@breadchain.xyz/site-ui/components/Values/ValueCard";
import { z } from "zod";

import * as edUnsafe from "./economic-democracy.md";
import * as maUnsafe from "./mutual-aid.md";
import * as dpUnsafe from "./dual-power.md";
import * as tgUnsafe from "./transparent-governance.md";

const ZValues = z.object({
  frontmatter: ZValueCardProps,
});

const { frontmatter: ed } = ZValues.parse(edUnsafe);
const { frontmatter: tg } = ZValues.parse(tgUnsafe);
const { frontmatter: dp } = ZValues.parse(dpUnsafe);
const { frontmatter: ma } = ZValues.parse(maUnsafe);

const values = [ed, tg, ma, dp];

export { values };
