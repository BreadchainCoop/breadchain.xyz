import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  href: string;
  isExternal?: boolean;
}

export function ButtonLink({ children, href, isExternal }: IProps) {
  const classes =
    "rounded inline-block bg-breadpink-400 font-redhat font-bold px-4 py-2.5 md:px-6 md:py-3 text-neutral-300 md:text-xl";

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
