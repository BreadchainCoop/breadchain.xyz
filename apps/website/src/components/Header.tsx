import { useState } from "react";
import clsx from "clsx";

import { LogoSVG } from "@breadchain.xyz/shared/icons";

import { ButtonLink } from "./ButtonLink";
import { DesktopNavigation } from "./DesktopNavigation";
import { ColorToggle } from "./ColorToggle";
import { MobileNavigation } from "./MobileNavigation";
import type { ToggleType } from "./MobileNavigationToggle";
import { WRAPPER_CLASSES } from "../utils";

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
        className={clsx(
          WRAPPER_CLASSES,
          "flex items-center gap-6 py-6 md:py-8 lg:gap-10"
        )}
      >
        <div className="w-8 h-8">
          <LogoSVG />
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
