import React from "react";
import type { ReactNode } from "react";
import { z } from "zod";

import classNames from "classnames";
import { pageWrap, pageWrapPadding } from "../classStrings";
import { ButtonLink } from "../ButtonLink";
import { TertiaryLink } from "../TertiaryLink";
import { MidjourneyImage } from "./MidjourneyImage";

export const ZHeroProps = z.object({
  heading: z.string(),
  subheading: z.string(),
});

export type THeroProps = z.infer<typeof ZHeroProps>;

export function Hero({ subheading, heading }: THeroProps) {
  return (
    <section>
      <div className="relative m-auto max-w-6xl overflow-x-clip md:overflow-x-visible">
        <div className="absolute left-0 right-0 top-0 bottom-0 -z-10 flex h-full w-full items-center justify-end">
          <MidjourneyImage />
        </div>

        <div
          className={classNames(
            pageWrapPadding,
            "flex max-w-[18rem] flex-col gap-2 py-16 sm:max-w-[26rem] md:max-w-[42rem] md:py-24"
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
      </div>
    </section>
  );
}

export function HeroHeading({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-poppins max-w-[42rem] text-4xl font-bold leading-normal tracking-wide dark:drop-shadow-lg sm:text-5xl  md:max-w-[32rem] md:text-6xl md:leading-relaxed">
      {children}
    </h1>
  );
}

export function HeroSubHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-poppins max-w-md pt-2  pb-12 font-medium tracking-wider md:pt-4 md:text-xl">
      {children}
    </h2>
  );
}

export function HeroCTA({ children }: { children: ReactNode }) {
  return <div className="flex flex-row items-center gap-4">{children}</div>;
}

export function HeroTagline({ children }: { children: ReactNode }) {
  return (
    <div>

      <span className="inline-block font-regular font-redhat bg-gradient-to-r from-breadpink-400 dark:from-[#ED7BC7] from-20% to-breadpink-500 dark:to-[#F2A8D9] to-100% uppercase md:text-xl text-transparent bg-clip-text">
        {children}
      </span>
    </div>
  );
}
