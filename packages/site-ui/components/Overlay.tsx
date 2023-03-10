import React from "react";

import { MouseEvent } from "react";
import { classNames } from "@breadchain.xyz/utils";

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
      className={classNames(
        "z-10 fixed top-0 bottom-0 left-0 right-0 h-screen w-screen bg-breadgray-800 opacity-0 transition-opacity md:hidden",
        isOpen ? "block opacity-95" : "hidden"
      )}
      onClick={handleClick}
    />
  );
}

Overlay.defaultProps = {
  children: null,
};
export default Overlay;
