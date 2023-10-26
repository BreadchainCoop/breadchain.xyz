import classNames from "classnames";
import React from "react";

import { MouseEvent } from "react";

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
        "bg-breadgray-ultra-white dark:bg-breadgray-800 transition-visibility absolute bottom-0 left-0 right-0  top-0 z-10 h-screen w-screen opacity-0 transition-opacity md:invisible",
        isOpen ? "block opacity-95" : "invisible"
      )}
      onClick={handleClick}
    />
  );
}

Overlay.defaultProps = {
  children: null,
};

export default Overlay;
