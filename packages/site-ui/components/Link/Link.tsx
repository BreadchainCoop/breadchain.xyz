import React, { ReactNode } from "react";

export function Link({
  children,
  href,
  isExternal,
}: {
  children: ReactNode;
  href: string;
  isExternal?: boolean;
}) {
  const classes = "text-breadpink-300 hover:text-breadpink-200";

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
