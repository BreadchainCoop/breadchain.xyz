import React from "react";
import { Image } from "@astrojs/image/components";

export function MemberCard({
  name,
  info,
  logoSrc,
}: {
  name: string;
  info: string;
  logoSrc: string;
}) {
  return (
    <article className="max-w-sm m-auto col-span-3 md:col-span-1 h-full">
      <img className="w-full" src={logoSrc} alt="" />
      {/* <Image src={src} alt="alt text" sizes="" widths={[100, 200]} /> */}
      <div className="p-8 flex flex-col gap-2">
        <h3 className="font-redhat text-2xl font-medium text-breadgray-200">
          {name}
        </h3>
        <p>{info}</p>
      </div>
    </article>
  );
}
