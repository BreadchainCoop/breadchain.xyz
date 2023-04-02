import React from "react";

import { classNames } from "@breadchain.xyz/utils";
import { pageWrap, pageWrapPadding } from "../classStrings";
import { SectionTitle } from "../SectionTitle";
import { SectionSubtitle } from "../SectionSubtitle";
import { ValueCard, ValueIcons } from "./ValueCard";

interface IValue {
  title: string;
  details: string;
  icon: keyof typeof ValueIcons;
}

export function Values({ values }: { values: IValue[] }) {
  return (
    <section
      id="values"
      className={classNames(pageWrap, pageWrapPadding, "py-16")}
    >
      <div className="flex flex-col sm:items-center gap-4">
        <div className="flex flex-col items-start sm:flex-row gap-2">
          <SectionTitle>
            <span className="font-normal inline-block pr-2">Currency</span>
            <span>with a conscience</span>
          </SectionTitle>
        </div>
        <SectionSubtitle>
          Here are the principles that guide Breadchain projects and their
          missions.
        </SectionSubtitle>
      </div>
      <div className="max-w-4xl m-auto grid grid-cols-2 pt-16 gap-4 sm:gap-16 md:gap-x-48 text-center">
        {values.map(({ title, details, icon }, i) => {
          return (
            <ValueCard
              key={`principlecard_${i}`}
              title={title}
              details={details}
              icon={icon}
            />
          );
        })}
      </div>
    </section>
  );
}
