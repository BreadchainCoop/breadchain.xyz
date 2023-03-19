import React from "react";
import { Image } from "@astrojs/image/components";
import { TertiaryButtonLink } from "../TertiaryButtonLink";

export function MemberCard({
  name,
  info,
  link,
  logoSrc,
}: {
  name: string;
  info: string;
  link: string;
  logoSrc: string;
}) {
  return (
    <article className="max-w-sm m-auto col-span-3 md:col-span-1 h-full flex flex-col text-breadgray-100">
      <img className="w-full" src={logoSrc} alt="" />
      {/* <Image src={src} alt="alt text" sizes="" widths={[100, 200]} /> */}
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
