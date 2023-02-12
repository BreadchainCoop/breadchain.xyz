import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  href: string;
  isExternal?: boolean;
}

export function TertiaryLink({ children, href, isExternal }: IProps) {
  const classes =
    "inline-block font-redhat font-bold px-4 py-2.5 md:px-6 md:py-3 text-breadpink-300 hover:text-breadpink-200 active:text-breadpink-200 ";

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
