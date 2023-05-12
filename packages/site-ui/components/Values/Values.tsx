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
              <>
                {i !== 0 && (
                  <div className="col-span-2 h-32 flex justify-center sm:hidden">
                    <svg
                      className={classNames(
                        "w-72 m-auto h-full",
                        i % 2 === 0 && "transform rotate-180"
                      )}
                      viewBox="0 0 100 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.4"
                        y="5.15176"
                        width="4.33107"
                        height="99.2"
                        rx="0.6"
                        transform="rotate(-90 0.4 5.15176)"
                        stroke="url(#paint0_linear_1367_1420)"
                        stroke-opacity="0.5"
                        stroke-width="0.8"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1367_1420"
                          x1="2.56554"
                          y1="5.55176"
                          x2="2.56554"
                          y2="105.552"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#ED7BC7" stop-opacity="0" />
                          <stop offset="1" stop-color="#ED7BC7" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                )}
                <ValueCard
                  key={`principlecard_${i}`}
                  title={title}
                  details={details}
                  icon={icon}
                />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
