import React from "react";

import { classNames } from "@breadchain.xyz/utils";
import { pageWrap } from "../classStrings";
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
    <section className={classNames(pageWrap, "py-32")}>
      <div className="flex flex-col items-center md:items-start">
        <SectionTitle>Co-operative</SectionTitle>
        <SectionSubTitle>
          Learn more about the project you would support.{" "}
        </SectionSubTitle>
      </div>
      <div className="flex flex-col md:flex-row py-16 gap-4 md:gap-8">
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
