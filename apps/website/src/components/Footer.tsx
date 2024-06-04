import clsx from "clsx";
import type { ReactNode } from "react";
import { WRAPPER_CLASSES } from "../utils";
import { LogoSVG } from "@breadchain.xyz/shared/icons";

function FooterSection({ children }: { children: ReactNode }) {
  return (
    <div className="col-span-1 flex flex-col gap-6 sm:col-span-1 md:col-span-1">
      {children}
    </div>
  );
}

function SocialsSection({ children }: { children: ReactNode }) {
  return (
    <div className="col-span-1 flex flex-col gap-6 sm:col-span-1 md:col-span-2">
      {children}
    </div>
  );
}

function FooterLogoSection({ children }: { children: ReactNode }) {
  return (
    <div className="footer-sm:pt-0 footer-lg:order-first order-last flex flex-col items-center gap-2 pt-6">
      {children}
    </div>
  );
}

function FooterSectionTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="dark:text-breadgray-ultra-white footer-md:text-left font-medium">
      {children}
    </h3>
  );
}

function FooterSectionList({ children }: { children: ReactNode }) {
  return (
    <ul className="footer-lg:flex-row footer-lg:gap-8 flex flex-col gap-4">
      {children}
    </ul>
  );
}

function FooterGrid({ children }: { children: ReactNode }) {
  return (
    <div className="footer-sm:flex-wrap footer-sm:justify-around footer-md:flex-row-reverse footer-lg:items-center flex flex-col gap-12 px-4">
      {children}
    </div>
  );
}

export function FooterLink({
  children,
  href,
  isExternal,
}: {
  children: ReactNode;
  href: string;
  isExternal?: boolean;
}) {
  const classes =
    "dark:text-breadgray-white dark:hover:text-breadgray-ultra-white";

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

export function Footer() {
  return (
    <footer className="border-breadpink-300 border-t-[1.5px]">
      <div className={clsx(WRAPPER_CLASSES, "pb-16 pt-12")}>
        <FooterGrid>
          <FooterLogoSection>
            <a
              href="/"
              className="flex flex-row items-center gap-4"
              aria-label="home"
            >
              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center">
                  <LogoSVG />
                </div>
                <h3 className="dark:text-breadgray-ultra-white text-2xl font-bold">
                  Breadchain
                </h3>
              </div>
            </a>
            <p>Funding post-capitalism</p>
            <a
              href="mailto:contact@breadchain.xyz"
              className="text-breadgray-charcoal  dark:text-breadgray-200 dark:hover:text-breadgray-100 hover:text-breadgray-darkest font-medium underline"
            >
              contact@breadchain.xyz
            </a>
          </FooterLogoSection>
          <FooterSection>
            <div className="footer-md:text-left text-center">
              <FooterSectionTitle>Navigate</FooterSectionTitle>
            </div>
            <FooterSectionList>
              <li className="footer-md:text-left text-center">
                <FooterLink href="#about">About</FooterLink>
              </li>
              <li className="footer-md:text-left text-center">
                <FooterLink href="#projects">Projects</FooterLink>
              </li>
              <li className="footer-md:text-left text-center">
                <FooterLink href="#values">Values</FooterLink>
              </li>
            </FooterSectionList>
          </FooterSection>

          <SocialsSection>
            <div className="footer-md:text-left text-center">
              <FooterSectionTitle>Socials</FooterSectionTitle>
            </div>
            <FooterSectionList>
              <li className="footer-md:text-left text-center">
                <FooterLink
                  isExternal
                  href="https://breadchain.mailchimpsites.com/"
                >
                  Newsletter
                </FooterLink>
              </li>

              <li className="footer-md:text-left text-center">
                <FooterLink isExternal href="https://twitter.com/breadchain_">
                  Twitter
                </FooterLink>
              </li>
              <li className="footer-md:text-left text-center">
                <FooterLink isExternal href="https://cryptoleftists.xyz">
                  Discord
                </FooterLink>
              </li>
              <li className="footer-md:text-left text-center">
                <FooterLink isExternal href="https://breadchain.mirror.xyz/">
                  Mirror
                </FooterLink>
              </li>
              <li className="footer-md:text-left text-center">
                <FooterLink
                  isExternal
                  href="https://opencollective.com/breadchain-cooperative"
                >
                  Open Collective
                </FooterLink>
              </li>
            </FooterSectionList>
          </SocialsSection>
        </FooterGrid>
      </div>
    </footer>
  );
}
