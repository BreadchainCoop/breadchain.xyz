import React from "react";

import { classNames } from "@breadchain.xyz/utils";
import { pageWrap, pageWrapPadding } from "../classStrings";
import { SectionTitle } from "../SectionTitle";
import { SectionSubtitle } from "../SectionSubtitle";
import { MemberCard, TMemberCardProps } from "./MemberCard";
import { MembersBackgroundGraphic } from "../Graphics/MembersBackgroundGraphic";

export function Members({ members }: { members: TMemberCardProps[] }) {
  return (
    <section
      id="projects"
      className={classNames(
        pageWrap,
        pageWrapPadding,
        "relative pb-64 sm:pb-[22rem]"
      )}
    >
      <div className="flex flex-col gap-4 justify-self-start max-w-sm m-auto md:max-w-full">
        <SectionTitle>
          <span>Co-operative</span>
          <span className="font-normal">by design</span>
        </SectionTitle>

        <SectionSubtitle>
          Learn more about the project you would support.{" "}
        </SectionSubtitle>
      </div>
      <div className="grid grid-cols-3 pt-16 gap-24 md:gap-12 place-items-start">
        {members.map(({ name, info, logo, link }, i) => {
          return (
            <MemberCard
              key={`membercard_${i}`}
              name={name}
              info={info}
              logo={logo}
              link={link}
            />
          );
        })}
      </div>
      <MembersBackgroundGraphic />
    </section>
  );
}
