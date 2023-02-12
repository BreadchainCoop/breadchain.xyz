import React from "react";

import { classNames } from "@breadchain.xyz/utils";
import { pageWrap } from "../classStrings";
import { SectionTitle } from "../SectionTitle";
import { SectionSubTitle } from "../SectionSubtitle";
import { PrincipleCard } from "./PrincipleCard";

interface IPrinciple {
  title: string;
  details: string;
  icon: string;
}

export function Principles({ principles }: { principles: IPrinciple[] }) {
  return (
    <section className={classNames(pageWrap, "py-16")}>
      <div className="flex flex-col items-center text-center gap-6">
        <SectionTitle>
          Currency
          <span className="font-redhat text-3xl font-bold">
            {" "}
            with a conscience
          </span>
        </SectionTitle>
        <SectionSubTitle>
          Here are the principles that guide Breadchain projects and their
          missions.
        </SectionSubTitle>
      </div>
      <div className="max-w-4xl m-auto grid grid-cols-2 py-16 gap-4 sm:gap-16 md:gap-x-48 text-center">
        {principles.map(({ title, details, icon }, i) => {
          return (
            <PrincipleCard
              key={`principlecard_${i}`}
              title={title}
              details={details}
              iconString={icon}
            />
          );
        })}
      </div>
    </section>
  );
}
