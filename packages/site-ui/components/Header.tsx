import React from "react";

import { classNames } from "@breadchain.xyz/utils";
import { pageWrap } from "./classStrings";

export function Header() {
  return (
    <header>
      <div className={classNames(pageWrap, "py-6 flex justify-between")}>
        <span>logo</span>
        <nav className="flex gap-4">
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
      </div>
    </header>
  );
}
