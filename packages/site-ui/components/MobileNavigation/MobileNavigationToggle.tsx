import React from "react";

function MobileNavigationToggle({ handleClick }: { handleClick: () => void }) {
  return (
    <button
      onClick={handleClick}
      type="button"
      className="touch:stroke-breadpink-400 dark:touch:stroke-breadpink-300 z-20 h-10 w-10 p-1 dark:stroke-breadpink-500 hover:stroke-breadpink-300 dark:stroke-breadpink-500 dark:hover:stroke-breadpink-300 md:hidden stroke-breadpink-500"
    >

      <svg width="29" viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.0625 14.5H23.9375" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.0625 7.25H23.9375" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.0625 21.75H23.9375" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    </button>
  );
}

export default MobileNavigationToggle;
