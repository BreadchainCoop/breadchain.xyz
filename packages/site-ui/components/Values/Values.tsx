import React from "react";

import { classNames } from "@breadchain.xyz/utils";
import { pageWrap, pageWrapPadding } from "../classStrings";
import { SectionTitle, ValuesTitle } from "../SectionTitle";
import { SectionSubtitle } from "../SectionSubtitle";
import { ValueCard, ValueIcons } from "./ValueCard";
import { ValuesCenter } from "../Graphics";
import { ValuesBackgroundGraphics, ValuesLarge } from "../Graphics/Values";

interface IValue {
  title: string;
  details: string;
  icon: keyof typeof ValueIcons;
}

export function Values({ values }: { values: IValue[] }) {
  return (
    <section id="values" className="pb-32 sm:pb-42 pt-20">
      <div
        className={classNames(
          "flex flex-col sm:items-center gap-4 pb-16 px-4 sm:text-left"
        )}
      >
        <div className="flex flex-col gap-4 items-start max-w-sm m-auto sm:max-w-full">
          <ValuesTitle>
            <span className="font-normal inline-block pr-2">Currency</span>
            <span>with a conscience</span>
          </ValuesTitle>
          <SectionSubtitle>
            Here are the principles that guide Breadchain projects and their
            missions.
          </SectionSubtitle>
        </div>
      </div>
      <div className={classNames("relative overflow-x-visible px-4")}>
        <ValuesBackgroundGraphics />
        <div className="max-w-4xl m-auto grid grid-cols-2 gap-4 sm:gap-16 md:gap-x-48 text-center relative">
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
      </div>
    </section>
  );
}
