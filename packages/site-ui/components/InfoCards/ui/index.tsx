import { classNames } from "@breadchain.xyz/utils";
import React from "react";
import type { ReactNode } from "react";

export function InfoCardGrid({ children }: { children: ReactNode }) {
  return (
    <div
      className={classNames(
        "m-auto px-4",
        "max-w-xl md:max-w-6xl py-8 md:py-12 grid-cols-infocards-sm grid-rows-infocards-sm grid md:gap-0 md:grid-cols-infocards-md md:grid-rows-infocards-md"
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
          "px-8 py-12 md:py-14 flex flex-col items-center gap-8 w-full h-full relative last:pb-24"
        )}
      >
        {children}
      </article>
    </div>
  );
}

export function InfoCardHeading({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-redhat font-bold text-2xl max-w-[22rem] md:max-w-[32rem] leading-normal  md:leading-relaxed">
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
  return <p className="font-redhat text-regular  max-w-xs">{children}</p>;
}

export function InfoCardIcon({ children }: { children: ReactNode }) {
  return <div className="text-breadpink-shaded h-14">{children}</div>;
}
