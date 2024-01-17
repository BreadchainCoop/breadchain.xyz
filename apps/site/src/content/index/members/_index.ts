import { ZMemberCardProps } from "@breadchain.xyz/site-ui/components/Members/MemberCard";
import { z } from "zod";

import * as ccaUnsafe from "./CCA.md";
import * as laborDaoUnsafe from "./laborDAO.md";
import * as symbiotaUnsafe from "./symbiota.md";

const ZMemberCard = z.object({
  frontmatter: ZMemberCardProps,
});

const { frontmatter: cca } = ZMemberCard.parse(ccaUnsafe);
const { frontmatter: laborDao } = ZMemberCard.parse(laborDaoUnsafe);
const { frontmatter: symbiota } = ZMemberCard.parse(symbiotaUnsafe);

export { cca, laborDao, symbiota };
