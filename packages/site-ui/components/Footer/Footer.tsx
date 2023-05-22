import React, { ReactNode } from "react";

import classNames from "classnames";
import { pageWrap, pageWrapPadding } from "../classStrings";
import { Logo } from "../Logo/Logo";

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
    <div className="order-last flex flex-col items-center gap-2 pt-6 footer-sm:pt-0 footer-lg:order-first">
      {children}
    </div>
  );
}

function FooterSectionTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="dark:text-breadgray-ultra-white font-medium footer-md:text-left">{children}</h3>
  );
}

function FooterSectionList({ children }: { children: ReactNode }) {
  return (
    <ul className="flex flex-col gap-4 footer-lg:flex-row footer-lg:gap-8">
      {children}
    </ul>
  );
}

function FooterGrid({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-12 px-4 footer-sm:flex-wrap footer-sm:justify-around footer-md:flex-row-reverse footer-lg:items-center">
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
      <div className={classNames(pageWrap, pageWrapPadding, "pt-12 pb-16")}>
        <FooterGrid>
          <FooterLogoSection>
            <div className="flex flex-row gap-4">
              <div className="w-8">
                <Logo />
              </div>
              <h3 className="dark:text-breadgray-ultra-white text-2xl font-bold">
                Breadchain
              </h3>
            </div>
            <p>Funding post-capitalism</p>
            <a
              href="mailto:contact@breadchain.xyz"
              className="text-breadgray-charcoal  dark:text-breadgray-200 dark:hover:text-breadgray-100 hover:text-breadgray-darkest font-medium underline"
            >
              contact@breadchain.xyz
            </a>
          </FooterLogoSection>
          <FooterSection>
            <div className="text-center footer-md:text-left">
              <FooterSectionTitle>Navigate</FooterSectionTitle>
            </div>
            <FooterSectionList>
              <div className="text-center footer-md:text-left">
                <FooterLink href="#about">About</FooterLink>
              </div>
              <div className="text-center footer-md:text-left">
                <FooterLink href="#projects">Projects</FooterLink>
              </div>
              <div className="text-center footer-md:text-left">
                <FooterLink href="#values">Values</FooterLink>
              </div>
            </FooterSectionList>
          </FooterSection>

          <SocialsSection>
            <div className="text-center footer-md:text-left">
              <FooterSectionTitle>Socials</FooterSectionTitle>
            </div>
            <FooterSectionList>
              <div className="text-center footer-md:text-left">
                <FooterLink isExternal href="https://breadchain.mailchimpsites.com/">
                  Newsletter
                </FooterLink>
              </div>

              <div className="text-center footer-md:text-left">
                <FooterLink isExternal href="https://twitter.com/breadchain_">
                  Twitter
                </FooterLink>
              </div>
              <div className="text-center footer-md:text-left">
                <FooterLink isExternal href="https://cryptoleftists.xyz">
                  Discord
                </FooterLink>
              </div>
              <div className="text-center footer-md:text-left">
                <FooterLink isExternal href="https://breadchain.mirror.xyz/">
                  Mirror
                </FooterLink>
              </div>
              <div className="text-center footer-md:text-left">
                <FooterLink
                  isExternal
                  href="https://opencollective.com/breadchain-cooperative"
                >
                  Open Collective
                </FooterLink>
              </div>
            </FooterSectionList>
          </SocialsSection>
        </FooterGrid>
      </div>
    </footer>
  );
}
