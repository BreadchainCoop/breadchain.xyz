import React from "react";

import { classNames } from "@breadchain.xyz/utils";
import Overlay from "../Overlay";
import { MobileNavigationLink } from "./MobileNavLink";

interface IProps {
  isOpen: boolean;
  handleNavToggle: () => void;
}

export function MobileNavigation({ isOpen, handleNavToggle }: IProps) {
  return (
    <>
      <Overlay closeMenu={() => handleNavToggle()} isOpen={isOpen} />
      <nav
        className={classNames(
          "fixed right-0 top-0 z-10 flex h-screen w-auto transform flex-col gap-12 px-12 pl-12 pt-32 transition-transform md:hidden font-pressstart",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <MobileNavigationLink
          handleNavToggle={handleNavToggle}
          href="#about"
          isOnPage
        >
          About
        </MobileNavigationLink>

        <MobileNavigationLink
          handleNavToggle={handleNavToggle}
          href="#projects"
          isOnPage
        >
          Projects
        </MobileNavigationLink>

        <MobileNavigationLink
          handleNavToggle={handleNavToggle}
          href="https://breadchain.mirror.xyz/"
          isExternal
        >
          Blog
        </MobileNavigationLink>
      </nav>
    </>
  );
}
