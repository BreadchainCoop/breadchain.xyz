import type { ReactNode } from "react";
import { useRef } from "react";
function DesktopNavigationLink(props: {
  children: ReactNode;
  href: string;
  rel?: string;
  target?: string;
}) {
  const { children, ...remainingProps } = props;
  const targetRef = useRef<HTMLElement | null>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetId = remainingProps.href.slice(1);
    targetRef.current = document.getElementById(targetId);
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <a
      className="font-redhat dark:text-breadgray-light-grey dark:hover:text-breadgray-white text-breadgray-toast hover:text-breadgray-burnt active:text-breadgray-violet flex items-center px-2 text-xl font-bold leading-none tracking-wider min-[810px]:px-4"
      {...remainingProps}
      onClick={handleClick}
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
