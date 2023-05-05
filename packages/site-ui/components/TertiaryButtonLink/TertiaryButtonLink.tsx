import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  href: string;
  isExternal?: boolean;
}

export function TertiaryButtonLink({ children, href, isExternal }: IProps) {
  const classes =
    "rounded-lg inline-block dark:bg-breadgray-600 dark:text-white border-2 border-breadpink-300 font-redhat font-bold text-center px-4 py-2.5 md:px-6 md:py-3 md:text-xl";

  if (isExternal)
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferer"
      >
        {children}
      </a>
    );

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
