import React, { ReactNode } from "react";

import { classNames } from "@breadchain.xyz/utils";
import { pageWrap } from "./classStrings";

export function Hero({ children }: { children: ReactNode }) {
  return (
    <section>
      <div className={classNames(pageWrap, "py-24")}>
        <h1 className="font-pressstart text-2xl">{children}</h1>
      </div>
    </section>
  );
}
