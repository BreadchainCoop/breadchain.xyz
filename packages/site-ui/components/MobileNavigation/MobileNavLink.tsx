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
    "font-redhat font-bold text-xl dark:text-breadgray-white dark:hover:text-breadgray-ultra-white text-breadgray-burnt hover:text-breadgray-charcoal";

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
