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

  if (isExternal) {
    return (
      <a
        href={href}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferer"
      >
        {children}
      </a>
    );
  }
  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
}
