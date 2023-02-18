import React, { ReactNode } from "react";

import { classNames } from "@breadchain.xyz/utils";

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2
      className={classNames(
        "text-3xl md:text-5xl font-redhat font-bold text-breadgray-200 inline"
      )}
    >
      {children}
    </h2>
  );
}
