import classNames from "classnames";
import React from "react";
import type { ReactNode } from "react";

export function InfoCardGrid({ children }: { children: ReactNode }) {
  return (
    <div
      className={classNames(
        "m-auto px-4",
        "grid-cols-infocards-sm grid-rows-infocards-sm md:grid-cols-infocards-md md:grid-rows-infocards-md grid max-w-xl pt-8 pb-20 md:max-w-6xl md:gap-0 md:py-12"
      )}
    >
      {children}
    </div>
  );
}

export function InfoCard({ children }: { children: ReactNode }) {
  return (
    <div className={classNames("flex justify-center")}>
      <article
        className={classNames(
          "relative flex h-full w-full flex-col items-center gap-8 px-8 pt-14 pb-20 md:py-14"
        )}
      >
        {children}
      </article>
    </div>
  );
}

export function InfoCardHeading({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-redhat max-w-[22rem] text-2xl font-bold leading-normal md:max-w-[32rem]  md:leading-relaxed">
      {children}
    </h1>
  );
}

export function InfoCardTextContent({ children }: { children: ReactNode }) {
  return (
    <div className="flex max-w-2xl flex-col gap-2 text-center">{children}</div>
  );
}

export function InfoCardText({ children }: { children: ReactNode }) {
  return <p className="font-redhat text-regular  max-w-xs">{children}</p>;
}

export function InfoCardIcon({ children }: { children: ReactNode }) {
  return <div className="text-breadpink-shaded h-14">{children}</div>;
}
