import React, { ReactNode } from "react";

import { classNames } from "@breadchain.xyz/utils";

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2
      className={classNames(
        "text-3xl font-redhat font-bold text-breadgray-200 flex items-center gap-2"
      )}
    >
      {children}
    </h2>
  );
}
