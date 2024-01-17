import React, { useEffect, useState } from "react";

import classNames from "classnames";
import { pageWrap, pageWrapPadding } from "./classStrings";
import { DesktopNavigation } from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import MobileNavigationToggle from "./MobileNavigation/MobileNavigationToggle";
import { Logo } from "./Logo/Logo";
import { ButtonLink } from "./ButtonLink";
import { ColorToggle } from "./ColorToggle/ColorToggle";

export type ToggleType = "CLICK" | "KEYPRESS" | null;

export function Header() {
  const [isMobNavOpen, setIsMobNavOpen] = useState(false);
  const [toggleType, setToggleType] = useState<ToggleType>(null);

  const handleNavToggle = (type: ToggleType | undefined) => {
    if (type) setToggleType(type);
    setIsMobNavOpen(!isMobNavOpen);
  };

  function clearToggleType() {
    setToggleType(null);
  }

  return (
    <header>
      <div
        className={classNames(
          pageWrap,
          pageWrapPadding,
          "flex items-center gap-6 py-6 md:py-8 lg:gap-10"
        )}
      >
        <div className="w-24 md:w-28">
          <Logo />
        </div>

        <div className="flex grow gap-4 lg:gap-6">
          <DesktopNavigation />
          <div className="hidden md:block">
            <ColorToggle />
          </div>
        </div>
        <div className="hidden md:block">
          <ButtonLink href="https://app.breadchain.xyz" isExternal>
            Get Bread
          </ButtonLink>
        </div>
        {/* <ButtonLink href="https://app.breadchain.xyz">Get Bread</ButtonLink> */}
      </div>
      <MobileNavigation
        isOpen={isMobNavOpen}
        handleNavToggle={handleNavToggle}
        toggleType={toggleType}
        clearToggleType={clearToggleType}
      />
    </header>
  );
}
