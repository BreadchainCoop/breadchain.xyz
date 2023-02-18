import React from "react";

import { classNames } from "@breadchain.xyz/utils";
import { pageWrap, pageWrapPadding } from "../classStrings";
import { SectionTitle } from "../SectionTitle";
import { SectionSubtitle } from "../SectionSubtitle";
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
      className={classNames(pageWrap, pageWrapPadding, "py-16 pt-64")}
    >
      <div className="flex flex-col gap-4 items-start">
        <SectionTitle>
          Co-operative
          <span className="font-normal inline-block pl-2 md:pl-3">
            by design
          </span>
        </SectionTitle>
        <SectionSubtitle>
          Learn more about the project you would support.{" "}
        </SectionSubtitle>
      </div>
      <div className="grid grid-cols-3 pt-16 gap-16 place-items-start">
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
