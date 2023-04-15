import React, { ReactNode } from "react";

import { classNames } from "@breadchain.xyz/utils";
import { pageWrap, pageWrapPadding } from "../classStrings";
import { Logo } from "../Logo/Logo";

function FooterSection({ children }: { children: ReactNode }) {
  return (
    <div className="col-span-1 sm:col-span-1 md:col-span-1 flex flex-col gap-6">
      {children}
    </div>
  );
}

function SocialsSection({ children }: { children: ReactNode }) {
  return (
    <div className="col-span-1 sm:col-span-1 md:col-span-2 flex flex-col gap-6">
      {children}
    </div>
  );
}

function FooterLogoSection({ children }: { children: ReactNode }) {
  return (
    <div className="order-last min-[1075px]:order-first flex flex-col items-center gap-4 pt-6 min-[580px]:pt-0">
      {children}
    </div>
  );
}

function FooterSectionTitle({ children }: { children: ReactNode }) {
  return <h3 className="font-medium text-breadgray-100">{children}</h3>;
}

function FooterSectionList({ children }: { children: ReactNode }) {
  return (
    <ul className="flex flex-col min-[1075px]:flex-row gap-4 min-[1075px]:gap-8">
      {children}
    </ul>
  );
}

function FooterGrid({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-12 min-[600px]:flex-row min-[580px]:flex-wrap min-[1075px]:items-center min-[580px]:justify-around px-4">
      {children}
    </div>
  );
}

export function Link({
  children,
  href,
  isExternal,
}: {
  children: ReactNode;
  href: string;
  isExternal?: boolean;
}) {
  const classes = "text-breadgray-200 hover:text-breadgray-100";

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
    <footer className="border-t-[1.5px] border-breadpink-300">
      <div className={classNames(pageWrap, pageWrapPadding, "pt-12 pb-16")}>
        <FooterGrid>
          <FooterLogoSection>
            <div className="w-24">
              <Logo />
            </div>
            {/* <p className="text-breadgray-200">Funding post-capitalism</p> */}
            <h3 className="text-2xl font-medium text-breadgray-100">
              Breadchain
            </h3>
            <p>Funding post-capitalism</p>
            <a
              href="mailto:contact@breadchain.xyz"
              className="text-breadgray-200 underline font-medium hover:text-breadgray-100"
            >
              contact@breadchain.xyz
            </a>
          </FooterLogoSection>
          <FooterSection>
            <div className="text-center min-[600px]:text-left">
              <FooterSectionTitle>Navigate</FooterSectionTitle>
            </div>
            <FooterSectionList>
              <div className="text-center min-[600px]:text-left">
                <Link href="#about">About</Link>
              </div>
              <div className="text-center min-[600px]:text-left">
                <Link href="#projects">Projects</Link>
              </div>
              <div className="text-center min-[600px]:text-left">
                <Link href="#values">Values</Link>
              </div>
            </FooterSectionList>
          </FooterSection>

          <SocialsSection>
            <div className="text-center min-[600px]:text-left">
              <FooterSectionTitle>Socials</FooterSectionTitle>
            </div>
            <FooterSectionList>
              <div className="text-center min-[600px]:text-left">
                <Link isExternal href="https://breadchain.mailchimpsites.com/">
                  Newsletter
                </Link>
              </div>

              <div className="text-center min-[600px]:text-left">
                <Link isExternal href="https://twitter.com/breadchain_">
                  Twitter
                </Link>
              </div>
              <div className="text-center min-[600px]:text-left">
                <Link isExternal href="https://cryptoleftists.xyz">
                  Discord
                </Link>
              </div>
              <div className="text-center min-[600px]:text-left">
                <Link isExternal href="https://breadchain.mirror.xyz/">
                  Mirror
                </Link>
              </div>
              <div className="text-center min-[600px]:text-left">
                <Link
                  isExternal
                  href="https://opencollective.com/breadchain-cooperative"
                >
                  Open Collective
                </Link>
              </div>
            </FooterSectionList>
          </SocialsSection>
        </FooterGrid>
      </div>
    </footer>
  );
}
