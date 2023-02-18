import React, { ReactNode } from "react";

import { classNames } from "@breadchain.xyz/utils";

export function SectionSubtitle({ children }: { children: ReactNode }) {
  return <section className={classNames("")}>{children}</section>;
}
