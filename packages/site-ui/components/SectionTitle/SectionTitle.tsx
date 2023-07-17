import React, { ReactNode } from "react";

import classNames from "classnames";

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2
      className={classNames(
        "font-redhat m-auto flex w-full max-w-sm flex-col text-left text-5xl font-bold sm:max-w-full md:flex-row md:gap-4"
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
        "font-redhat m-auto inline max-w-sm text-4xl font-bold sm:max-w-full md:text-5xl"
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
        "font-redhat flex w-full max-w-sm flex-col gap-3 text-left text-4xl font-bold sm:max-w-full sm:text-5xl md:flex-row md:gap-0"
      )}
    >
      {children}
    </h2>
  );
}
