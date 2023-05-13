import React from "react";

function MobileNavigationToggle({ handleClick }: { handleClick: () => void }) {
  return (
    <button
      onClick={handleClick}
      type="button"
      className="fill touch:text-neutral-600 dark:touch:text-neutral-300 z-20 h-10 w-10 p-1 text-neutral-500 hover:text-neutral-600 dark:text-neutral-600 dark:hover:text-neutral-300 md:hidden"
    >
      <svg className="fill-current" viewBox="0 0 24 24">
        <path d="M3 18h18v-2H3v2Zm0-5h18v-2H3v2Zm0-7v2h18V6H3Z" />
      </svg>
    </button>
  );
}

export default MobileNavigationToggle;
