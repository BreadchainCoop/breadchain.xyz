import clsx from "clsx";
import { useRef, useState } from "react";

export type ToggleType = "CLICK" | "KEYPRESS" | null;

function MobileNavigationToggle({
  handleClick,
  navIsOpen,
}: {
  navIsOpen: boolean;
  handleClick: (type: ToggleType) => void;
}) {
  const [isKeypress, setIsKeypress] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  function handleKeyDown() {
    setIsKeypress(true);
  }

  function handleClickHere() {
    if (isKeypress) {
      handleClick("KEYPRESS");
    } else {
      buttonRef.current?.blur();
      handleClick("CLICK");
    }
  }
  return (
    <button
      onClick={handleClickHere}
      onKeyDown={() => handleKeyDown()}
      type="button"
      className={clsx(
        " h-10 w-10 rounded stroke-neutral-500 p-1 dark:fill-neutral-500 dark:stroke-neutral-500 dark:hover:fill-neutral-300 dark:hover:stroke-neutral-300 md:hidden"
        // navIsOpen && "hidden"
      )}
      ref={buttonRef}
      aria-expanded={navIsOpen}
      // aria-haspopup="true"
      aria-controls="mobile-navigation"
      aria-label="mobile navigation toggle"
      // tabIndex={navIsOpen ? -1 : 0}
      // aria-hidden={navIsOpen}
    >
      <svg width="29" viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.0625 14.5H23.9375"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.0625 7.25H23.9375"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.0625 21.75H23.9375"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default MobileNavigationToggle;
