import React, { ReactNode } from "react";

import { classNames } from "@breadchain.xyz/utils";
import { pageWrap, pageWrapPadding } from "../classStrings";
import { ButtonLink } from "../ButtonLink";
import { TertiaryLink } from "../TertiaryLink";

interface IHeroData {
  tagline: string;
  heading: string;
  subheading: string;
}

export function Hero({
  heroData: { tagline, subheading, heading },
}: {
  heroData: IHeroData;
}) {
  return (
    <section>
      <div
        className={classNames(
          pageWrap,
          pageWrapPadding,
          "py-16 md:py-24 flex flex-col gap-2"
        )}
      >
        <HeroTagline>{tagline}</HeroTagline>
        <HeroHeading>{heading}</HeroHeading>
        <HeroSubHeading>{subheading}</HeroSubHeading>
        <HeroCTA>
          <ButtonLink href="https://app.breadchain.xyz" isExternal>
            Get Bread
          </ButtonLink>
          <TertiaryLink
            href="https://breadchain.mirror.xyz/nwQx4CqPAcwZ5zSNB2_K25N1quOF1NGcKaYcS3S33CA"
            isExternal
          >
            Learn more
          </TertiaryLink>
        </HeroCTA>
      </div>
    </section>
  );
}

export function HeroHeading({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-pressstart text-2xl max-w-[22rem] md:max-w-[32rem] leading-normal text-breadgray-200 md:text-4xl md:leading-relaxed">
      {children}
    </h1>
  );
}

export function HeroSubHeading({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-redhat text-regular max-w-md text-breadgray-200 md:text-xl font-medium pt-2 pb-16 md:pt-4 md:pb-24">
      {children}
    </h1>
  );
}

export function HeroCTA({ children }: { children: ReactNode }) {
  return <div className="flex flex-row gap-4 items-center">{children}</div>;
}

export function HeroTagline({ children }: { children: ReactNode }) {
  return (
    <span className="uppercase font-bold font-redhat text-breadpink-100 md:text-xl">
      {children}
    </span>
  );
}
