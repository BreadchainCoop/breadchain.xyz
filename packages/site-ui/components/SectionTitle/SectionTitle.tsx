import React, { ReactNode } from "react";

import { classNames } from "@breadchain.xyz/utils";

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2
      className={classNames(
        "text-5xl w-full font-redhat text-left font-bold max-w-sm m-auto sm:max-w-full flex flex-col md:flex-row md:gap-4"
      )}
    >
      {children}
    </h2>
  );
}

export function InfoCardsTitle({ children }: { children: ReactNode }) {
  return (
    <h2
      className={classNames(
        "text-4xl md:text-5xl font-redhat font-bold inline max-w-sm m-auto sm:max-w-full"
      )}
    >
      {children}
    </h2>
  );
}

export function ValuesTitle({ children }: { children: ReactNode }) {
  return (
    <h2
      className={classNames(
        "text-4xl sm:text-5xl w-full font-redhat text-left font-bold max-w-sm sm:max-w-full flex flex-col md:flex-row gap-3 md:gap-0"
      )}
    >
      {children}
    </h2>
  );
}
