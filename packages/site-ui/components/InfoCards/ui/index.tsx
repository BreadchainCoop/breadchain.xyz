import { classNames } from "@breadchain.xyz/utils";
import React, { ReactNode } from "react";

export function InfoCardGrid({ children }: { children: ReactNode }) {
  return (
    <div
      className={classNames(
        "m-auto px-4",
        "max-w-6xl py-12 flex flex-col gap-16 md:gap-0 md:flex-row"
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
          "px-16 py-14 flex flex-col items-center gap-8 w-full h-full relative"
        )}
      >
        {children}
      </article>
    </div>
  );
}

export function InfoCardHeading({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-redhat font-bold text-2xl max-w-[22rem] md:max-w-[32rem] leading-normal text-breadgray-200 md:leading-relaxed">
      {children}
    </h1>
  );
}

export function InfoCardTextContent({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2 max-w-2xl text-center">{children}</div>
  );
}

export function InfoCardText({ children }: { children: ReactNode }) {
  return (
    <p className="font-redhat text-regular text-breadgray-200 max-w-xs">
      {children}
    </p>
  );
}

export function InfoCardIcon({ children }: { children: ReactNode }) {
  return <div className="text-shadedviolet h-14">{children}</div>;
}
