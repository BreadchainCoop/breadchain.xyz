import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  href: string;
  isExternal?: boolean;
}

export function TertiaryLink({ children, href, isExternal }: IProps) {
  const classes =
    "inline-block font-redhat font-bold md:text-xl px-4 py-2.5 md:px-6 md:py-3 text-breadpink-500 hover:text-breadpink-600 active:text-breadpink-600 ";

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
