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
      className="font-redhat dark:text-breadgray-white dark:hover:text-breadgray-ultra-white text-breadgray-burnt hover:text-breadgray-charcoal active:text-breadgray-violet flex items-center px-2 text-xl font-bold leading-none tracking-wider min-[810px]:px-4"
      {...remainingProps}
    >
      {children}
    </a>
  );
}

export function DesktopNavigation() {
  return (
    <nav className="hidden gap-2 md:flex lg:gap-6">
      <DesktopNavigationLink href="#about">About</DesktopNavigationLink>
      <DesktopNavigationLink href="#projects">Projects</DesktopNavigationLink>
      <DesktopNavigationLink
        href="https://breadchain.mirror.xyz/"
        target="_blank"
        rel="noopener noreferer"
      >
        Blog
      </DesktopNavigationLink>
    </nav>
  );
}
