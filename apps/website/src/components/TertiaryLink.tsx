import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  href: string;
  isExternal?: boolean;
}

export function TertiaryLink({ children, href, isExternal }: IProps) {
  const classes =
    "inline-block bg-breadpink-shaded/10 font-redhat font-bold text-xl px-4 py-2.5 md:px-6 md:py-3 text-breadpink-shaded hover:border-2 border-2 border-breadpink-shaded/0 hover:border-breadpink-shaded active:text-breadpink-600 transition-all duration-300";

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
