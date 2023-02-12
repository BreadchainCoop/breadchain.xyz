import React from "react";

import { classNames } from "@breadchain.xyz/utils";
import { pageWrap } from "./classStrings";

export function Footer() {
  // TODO everything
  return (
    <footer>
      <div className={classNames(pageWrap, "py-6")}>footer</div>
    </footer>
  );
}