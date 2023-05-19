import React from "react";
import { TertiaryButtonLink } from "../TertiaryButtonLink";
import { z } from "zod";

export const ZMemberCardProps = z.object({
  name: z.string(),
  info: z.string(),
  link: z.string(),
  logo: z.string(),
});

export type TMemberCardProps = z.infer<typeof ZMemberCardProps>;

export function MemberCard({ name, info, link, logo }: TMemberCardProps) {
  return (
    <article className="col-span-3 m-auto flex h-full max-w-sm flex-col md:col-span-1">
      <img className="w-full" src={logo} alt="" />
      <div className="flex grow flex-col gap-2 p-8 pb-12">
        <h3 className="font-redhat text-2xl font-medium">{name}</h3>
        <p>{info}</p>
      </div>
      <TertiaryButtonLink href={link} isExternal>
        Learn More
      </TertiaryButtonLink>
    </article>
  );
}
