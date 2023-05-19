import React, { ReactNode } from "react";

export function MobileNavigationLink({
  children,
  href,
  isOnPage,
  isExternal,
  handleNavToggle,
}: {
  children: ReactNode;
  href: string;
  isOnPage?: boolean;
  isExternal?: boolean;
  handleNavToggle: () => void;
}) {
  function handleClick() {
    if (isOnPage) {
      handleNavToggle();
    }
  }

  const classes =
    "font-redhat font-bold text-xl dark:text-breadgray-grey dark:hover:text-breadgray-white text-breadgray-toast hover:text-breadgray-burnt";

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferer"
        className={classes}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }
  return (
    <a href={href} className={classes} onClick={handleClick}>
      {children}
    </a>
  );
}
