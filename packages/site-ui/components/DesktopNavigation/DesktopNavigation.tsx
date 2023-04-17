import React, { ReactNode } from "react";

function DesktopNavigationLink(props: {
  children: ReactNode;
  href: string;
  rel?: string;
  target?: string;
}) {
  const { children, ...remainingProps } = props;
  return (
    <a
      className="font-redhat dark:text-breadgray-white dark:hover:text-breadgray-ultra-white text-breadgray-burnt hover:text-breadgray-charcoal active:text-breadgray-violet font-bold text-xl tracking-wider px-4 leading-none flex items-center"
      {...remainingProps}
    >
      {children}
    </a>
  );
}

export function DesktopNavigation() {
  return (
    <nav className="gap-6 hidden md:flex">
      <DesktopNavigationLink href="#about">About</DesktopNavigationLink>
      <DesktopNavigationLink href="#projects">Projects</DesktopNavigationLink>
      <DesktopNavigationLink
        href="https://mirror.xyz"
        target="_blank"
        rel="noopener noreferer"
      >
        Blog
      </DesktopNavigationLink>
    </nav>
  );
}
