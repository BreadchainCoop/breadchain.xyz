import { classNames } from "@breadchain.xyz/utils";
import React, { ReactNode } from "react";

export function InfoCard({
  children,
  float,
}: {
  children: ReactNode;
  float: "left" | "right";
}) {
  return (
    <div
      className={classNames(
        "flex justify-center",
        float === "left" ? "md:justify-start" : "md:justify-end"
      )}
    >
      <article
        className={classNames(
          "rounded-xl from-[#C463CAa1] to-[#C463CA00] p-[1px]",
          float === "left" ? "bg-gradient-to-l" : "bg-gradient-to-r"
        )}
      >
        <div
          className={classNames(
            "rounded-xl bg-breadgray-800 px-10 py-8 flex flex-col sm:flex-row md:items-center gap-8 md:gap-16",
            float === "left" ? "flex-col-reverse" : ""
          )}
        >
          {children}
        </div>
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
  return <div className="flex flex-col gap-2 max-w-2xl">{children}</div>;
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
