import React from "react";

import { classNames } from "@breadchain.xyz/utils";
import { pageWrap, pageWrapPadding } from "../classStrings";
import { SectionTitle } from "../SectionTitle";
import { SectionSubTitle } from "../SectionSubtitle";
import { MemberCard } from "./MemberCard";

interface IMember {
  name: string;
  info: string;
  logo: any;
}

export function Members({ members }: { members: IMember[] }) {
  return (
    <section
      id="projects"
      className={classNames(pageWrap, pageWrapPadding, "py-16")}
    >
      <div className="flex flex-col gap-4 items-center md:items-start">
        <SectionTitle>Co-operative</SectionTitle>
        <SectionSubTitle>
          Learn more about the project you would support.{" "}
        </SectionSubTitle>
      </div>
      <div className="grid grid-cols-3 pt-16 gap-4 md:gap-16 place-items-start">
        {members.map(({ name, info, logo }, i) => {
          return (
            <MemberCard
              key={`membercard_${i}`}
              name={name}
              info={info}
              logoSrc={logo}
            />
          );
        })}
      </div>
    </section>
  );
}
