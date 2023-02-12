import React, { useState } from "react";

import { classNames } from "@breadchain.xyz/utils";
import { pageWrap, pageWrapPadding } from "./classStrings";
import { DesktopNavigation } from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import MobileNavigationToggle from "./MobileNavigation/MobileNavigationToggle";
import { ButtonLink } from "./ButtonLink";
import { Logo } from "./Logo/Logo";

export function Header() {
  const [isMobNavOpen, setIsMobNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsMobNavOpen(!isMobNavOpen);
  };

  return (
    <header>
      <MobileNavigation
        isOpen={isMobNavOpen}
        handleNavToggle={handleNavToggle}
      />
      <div
        className={classNames(
          pageWrap,
          pageWrapPadding,
          "py-6 md:py-8 flex gap-10 items-center"
        )}
      >
        <Logo />
        <div className="grow">
          <DesktopNavigation />
        </div>
        {/* <ButtonLink href="https://app.breadchain.xyz">Get Bread</ButtonLink> */}
        <MobileNavigationToggle handleClick={handleNavToggle} />
      </div>
    </header>
  );
}
