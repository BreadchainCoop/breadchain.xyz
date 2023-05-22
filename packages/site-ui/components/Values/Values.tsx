import React from "react";
import classNames from "classnames";

import { ValuesTitle } from "../SectionTitle";
import { SectionSubtitle } from "../SectionSubtitle";
import { ValueCard, ValueIcons } from "./ValueCard";
import { ValuesBackgroundGraphics } from "../Graphics/Values";

interface IValue {
  title: string;
  details: string;
  icon: keyof typeof ValueIcons;
}

export function Values({ values }: { values: IValue[] }) {
  return (
    <section id="values" className="sm:pb-42 pb-32 pt-20">
      <div
        className={classNames(
          "flex flex-col gap-4 px-4 pb-16 sm:items-center sm:text-left"
        )}
      >
        <div className="m-auto flex max-w-sm flex-col items-start gap-4 sm:max-w-full">
          <ValuesTitle>
            <span className="inline-block pr-2 font-normal">Currency</span>
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
        <div className="relative m-auto grid max-w-4xl grid-cols-2 gap-4 text-center sm:gap-16 md:gap-x-48">
          {values.map(({ title, details, icon }, i) => {
            return (
              <>
                {i !== 0 && (
                  <div className="col-span-2 flex h-32 justify-center sm:hidden">
                    <svg
                      className={classNames(
                        "m-auto h-full w-72",
                        i % 2 === 0 && "rotate-180 transform"
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
                        strokeOpacity="0.5"
                        strokeWidth="0.8"
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
                          <stop stopColor="#ED7BC7" stopOpacity="0" />
                          <stop offset="1" stopColor="#ED7BC7" />
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
