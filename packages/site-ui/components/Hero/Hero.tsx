import React, { ReactNode } from "react";

import { classNames } from "@breadchain.xyz/utils";
import { pageWrap, pageWrapPadding } from "../classStrings";
import { ButtonLink } from "../ButtonLink";
import { TertiaryLink } from "../TertiaryLink";
import { MidjourneyImage } from "./MidjourneyImage";

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
    <section className="relative">
      <div className="absolute right-0 top-0 bottom-0 h-full w-full flex items-center justify-end">
        <MidjourneyImage />
      </div>

      <div
        className={classNames(
          pageWrapPadding,
          "py-16 md:py-24 md:max-w-6xl md:m-auto flex flex-col gap-2 max-w-[18rem] sm:max-w-[26rem]"
        )}
      >
        <HeroTagline>
          <span className="font-semibold">$bread</span>chain
        </HeroTagline>
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
    <h1 className="font-poppins font-bold text-4xl sm:text-5xl max-w-[42rem] md:max-w-[32rem] leading-normal tracking-wide text-breadgray-200 md:text-6xl md:leading-relaxed">
      {children}
    </h1>
  );
}

export function HeroSubHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-poppins tracking-wider max-w-md text-breadgray-200 md:text-xl font-medium pt-2 pb-12 md:pt-4">
      {children}
    </h2>
  );
}

export function HeroCTA({ children }: { children: ReactNode }) {
  return <div className="flex flex-row gap-4 items-center">{children}</div>;
}

export function HeroTagline({ children }: { children: ReactNode }) {
  return (
    <span className="uppercase font-regular font-redhat text-breadpink-100 md:text-xl">
      {children}
    </span>
  );
}
