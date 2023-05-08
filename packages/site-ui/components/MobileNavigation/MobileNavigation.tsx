import React from "react";

import { classNames } from "@breadchain.xyz/utils";
import Overlay from "../Overlay";
import { MobileNavigationLink } from "./MobileNavLink";
import { ColorToggle } from "../ColorToggle/ColorToggle";

interface IProps {
  isOpen: boolean;
  handleNavToggle: () => void;
}

export function MobileNavigation({ isOpen, handleNavToggle }: IProps) {
  return (
    <>
      <Overlay closeMenu={() => handleNavToggle()} isOpen={isOpen}>
        <section
          className={classNames(
            "transform px-12 pl-12 pt-32 transition-transform md:hidden flex flex-col gap-14",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className={classNames(" flex  flex-col items-end gap-10")}>
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
            <div className="md:hidden">
              <ColorToggle />
            </div>
          </nav>
        </section>
      </Overlay>
    </>
  );
}
