import clsx from "clsx";
import { LogoSVG } from "@breadchain.xyz/shared";
import { WRAPPER_CLASSES } from "../utils";
import { ButtonLink } from "./ButtonLink";
import { DesktopNavigation } from "./DesktopNavigation";
import { ColorToggle } from "./ColorToggle";

export function Header() {
  return (
    <header>
      <div
        className={clsx(
          WRAPPER_CLASSES,
          "flex items-center gap-6 py-6 md:py-8 lg:gap-10"
        )}
      >
        <div className="w-8">
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
        {/* <ButtonLink href="https://app.breadchain.xyz">Get Bread</ButtonLink> */}
      </div>
      {/* <MobileNavigation
        isOpen={isMobNavOpen}
        handleNavToggle={handleNavToggle}
        toggleType={toggleType}
        clearToggleType={clearToggleType}
      /> */}
    </header>
  );
}