import React, {
  Children,
  ReactElement,
  ReactNode,
  RefObject,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";

import classNames from "classnames";
import Overlay from "../Overlay";
import {
  MobileNavigationLink,
  MobileNavigationLinkProps,
  MobileNavigationLinkWithRef,
} from "./MobileNavLink";
import { ColorToggle } from "../ColorToggle/ColorToggle";
import { ToggleType } from "../Header";
import MobileNavigationToggle from "./MobileNavigationToggle";

/*

Navigation

hidden and removed from a11y tree when not open

toggle button can be activated by click or keyboard

expected behavior is for first menu item to become focused

menu can close when last link is tabbed away from

link top current page has aria-current="page" 

escape key should close menu

*/

interface IProps {
  isOpen: boolean;
  handleNavToggle: (type: ToggleType | undefined) => void;
  toggleType: ToggleType;
  clearToggleType: () => void;
}

export function MobileNavigation({
  isOpen,
  handleNavToggle,
  toggleType,
  clearToggleType,
}: IProps) {
  const firstElement = useRef<HTMLAnchorElement>(null);
  const lastElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!firstElement.current) {
      return;
    }
    if (isOpen && toggleType === "KEYPRESS") {
      firstElement.current.focus();
      clearToggleType();
    }
  }, [isOpen, toggleType]);

  return (
    <>
      <div
        className="absolute right-0 top-0 z-20 p-4"
        onKeyDown={(event) => {
          if (isOpen && event.code === "Tab" && event.shiftKey) {
            handleNavToggle("KEYPRESS");
          }
        }}
      >
        <MobileNavigationToggle
          navIsOpen={isOpen}
          handleClick={handleNavToggle}
        />
      </div>
      <Overlay closeMenu={() => handleNavToggle("CLICK")} isOpen={isOpen} />

      <nav
        className={classNames(
          "transition-display transition-delay-400 fixed right-0 top-0 z-10 flex w-auto transform flex-col gap-10 px-12 pl-12 transition-transform delay-100  md:hidden",
          isOpen ? "fixed translate-x-0" : "hidden translate-x-full"
        )}
      >
        {/* <button className="">toggle</button> */}
        <menu
          aria-hidden={!isOpen}
          aria-label="Site Navigation"
          className="flex flex-col gap-4 pt-32"
        >
          <MobileNavigationLinkWithRef
            ref={firstElement}
            handleNavToggle={handleNavToggle}
            href="#about"
          >
            About
          </MobileNavigationLinkWithRef>

          <MobileNavigationLink
            handleNavToggle={handleNavToggle}
            href="#projects"
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
          <div
            aria-hidden={true}
            className="md:hidden"
            onKeyDown={(event) => {
              if (event.code === "Tab" && !event.shiftKey) {
                handleNavToggle("KEYPRESS");
              }
            }}
          >
            <ColorToggle />
          </div>
        </menu>
      </nav>
    </>
  );
}
