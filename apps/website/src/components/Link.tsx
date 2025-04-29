import type { ReactNode } from "react";
import { useRef } from "react";

export function Link({
  children,
  href,
  isExternal,
  isInternal,
}: {
  children: ReactNode;
  href: string;
  isExternal?: boolean;
  isInternal?: boolean;
}) {
  const targetRef = useRef<HTMLElement | null>(null);

  const classes =
    "text-breadpink-300 hover:text-breadpink-200 hover:text-breadpink-200 tracking-wider font-bold text-xl";

  const handleClick = (e: React.MouseEvent) => {
    if (isInternal && href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.slice(1);
      targetRef.current = document.getElementById(targetId);
      if (targetRef.current) {
        targetRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (isExternal)
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
  return (
    <a href={href} className={classes} onClick={handleClick}>
      {children}
    </a>
  );
}
