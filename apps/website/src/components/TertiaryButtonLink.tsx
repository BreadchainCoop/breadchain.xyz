import type { ReactNode } from "react";

export function TertiaryButtonLink({
  children,
  href,
  isExternal,
}: {
  children: ReactNode;
  href: string;
  isExternal?: boolean;
}) {
  const classes =
    "flex justify-center items-center rounded-lg inline-block bg-breadpink-200 dark:bg-breadpink-600 text-breadviolet-violet dark:text-breadpink-shaded border border-transparent hover:border-breadpink-300 font-redhat font-bold text-center px-4 py-2.5 md:px-6 md:py-3 md:text-xl";

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
