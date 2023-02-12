import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  href: string;
}

export function ButtonLink({ children, href }: IProps) {
  return (
    <a
      href={href}
      className="rounded inline-block bg-breadpink-400 font-pressstart px-4 py-2.5 md:px-6 md:py-3 text-xs md:text-sm text-neutral-300"
    >
      {children}
    </a>
  );
}
