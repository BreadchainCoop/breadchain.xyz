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
    <article className="max-w-sm m-auto col-span-3 md:col-span-1 h-full flex flex-col text-breadgray-100">
      <img className="w-full" src={logo} alt="" />
      <div className="p-8 pb-12 flex flex-col gap-2 grow">
        <h3 className="font-redhat text-2xl font-medium">{name}</h3>
        <p>{info}</p>
      </div>
      <TertiaryButtonLink href={link} isExternal>
        Learn More
      </TertiaryButtonLink>
    </article>
  );
}
