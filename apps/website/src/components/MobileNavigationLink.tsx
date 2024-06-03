import { forwardRef, type ReactNode, type Ref } from "react";

const classes =
  "font-redhat font-bold text-xl dark:text-breadgray-grey dark:hover:text-breadgray-white text-breadgray-toast hover:text-breadgray-burnt px-4 py-2";

export interface MobileNavigationLinkProps {
  children: ReactNode;
  href: string;
  isExternal?: boolean;
  handleNavToggle: (type: "CLICK" | "KEYPRESS") => void;
  ref?: Ref<HTMLAnchorElement>;
}

export function MobileNavigationLink(props: MobileNavigationLinkProps) {
  const { children, href, isExternal, handleNavToggle, ref } = props;

  function handleClick() {
    console.log("link being clicked");
    handleNavToggle("CLICK");
  }

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferer"
        className={classes}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={classes} onClick={handleClick} ref={ref}>
      {children}
    </a>
  );
}

export const MobileNavigationLinkWithRef = forwardRef<
  HTMLAnchorElement,
  MobileNavigationLinkProps
>(({ children, href, handleNavToggle }, ref) => {
  if (!children) throw new Error("Must pass a child component!");

  // return null;
  // if (!isValidElement(children)) return null;
  return (
    <a
      href={href}
      ref={ref}
      className={classes}
      onClick={() => handleNavToggle("CLICK")}
    >
      {children}
    </a>
  );
});
