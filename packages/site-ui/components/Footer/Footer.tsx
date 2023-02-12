import React, { ReactNode } from "react";

import { classNames } from "@breadchain.xyz/utils";
import { pageWrap, pageWrapPadding } from "../classStrings";
import { Link } from "../Link";
import { Logo } from "../Logo/Logo";

function FooterSection({ children }: { children: ReactNode }) {
  return (
    <div className="col-span-1 sm:col-span-2 md:col-span-1 flex flex-col gap-4">
      {children}
    </div>
  );
}

function FooterLogoSection({ children }: { children: ReactNode }) {
  return (
    <div className="col-span-1 sm:col-span-5 md:col-span-1 flex flex-col gap-4">
      {children}
    </div>
  );
}

function FooterSectionTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-xl font-medium text-breadgray-200">{children}</h3>;
}

function FooterSectionList({ children }: { children: ReactNode }) {
  return <ul className="flex flex-col gap-2">{children}</ul>;
}

function FooterGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 gap-6 md:gap-12">
      {children}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t-[1.5px] border-breadpink-300">
      <div className={classNames(pageWrap, pageWrapPadding, "pt-12 pb-16")}>
        <FooterGrid>
          <FooterLogoSection>
            <Logo />
            <p className="text-breadgray-200">Funding post-capitalism</p>
          </FooterLogoSection>
          <FooterSection>
            <FooterSectionTitle>Breadchain</FooterSectionTitle>
            <FooterSectionList>
              <Link href="#">About</Link>
              <Link href="#">Projects</Link>
              <Link href="#">Values</Link>
            </FooterSectionList>
          </FooterSection>
          <FooterSection>
            <FooterSectionTitle>Policies</FooterSectionTitle>
            <FooterSectionList>
              <Link href="#">About</Link>
              <Link href="#">Projects</Link>
              <Link href="#">Values</Link>
            </FooterSectionList>
          </FooterSection>
          <FooterSection>
            <FooterSectionTitle>Resources</FooterSectionTitle>
            <FooterSectionList>
              <Link href="#">About</Link>
              <Link href="#">Projects</Link>
              <Link href="#">Values</Link>
            </FooterSectionList>
          </FooterSection>
          <FooterSection>
            <FooterSectionTitle>Socials</FooterSectionTitle>
            <FooterSectionList>
              <Link href="#">About</Link>
              <Link href="#">Projects</Link>
              <Link href="#">Values</Link>
            </FooterSectionList>
          </FooterSection>
        </FooterGrid>
      </div>
    </footer>
  );
}
