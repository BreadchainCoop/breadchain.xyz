import { useEffect, useRef } from "react";
import { type MouseEvent } from "react";

import {
  MobileNavigationLink,
  MobileNavigationLinkWithRef,
} from "./MobileNavigationLink";
import clsx from "clsx";
import type { ToggleType } from "./MobileNavigationToggle";
import MobileNavigationToggle from "./MobileNavigationToggle";
import { ColorToggle } from "./ColorToggle";

function Overlay({
  isOpen,
  closeMenu,
}: {
  isOpen: boolean;
  closeMenu: () => void;
}) {
  function handleClick(event: MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
    closeMenu();
  }

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className={clsx(
        "bg-breadgray-ultra-white dark:bg-breadgray-800 transition-visibility absolute bottom-0 left-0 right-0  top-0 z-10 h-screen w-screen opacity-0 transition-opacity md:invisible",
        isOpen ? "block opacity-95" : "invisible"
      )}
      onClick={handleClick}
    />
  );
}

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
        id="mobile-navigation"
        className={clsx(
          "transition-display transition-delay-400 fixed right-0 top-0 z-10 flex w-auto transform flex-col gap-10 px-12 pl-12 transition-transform delay-100  md:hidden",
          isOpen ? "fixed translate-x-0" : "hidden translate-x-full"
        )}
      >
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
