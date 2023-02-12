import React, { ReactNode } from "react";

import { classNames } from "@breadchain.xyz/utils";

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <section
      className={classNames("text-2xl font-pressstart text-breadgray-200")}
    >
      {children}
    </section>
  );
}
