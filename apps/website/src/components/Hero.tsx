import clsx from "clsx";
import type { ReactNode } from "react";
import { WRAPPER_CLASSES } from "../utils";
import { ButtonLink } from "./ButtonLink";
import { TertiaryLink } from "./TertiaryLink";

export function Hero() {
  return (
    <section>
      <div
        className={clsx(
          WRAPPER_CLASSES,
          "relative overflow-x-clip md:overflow-x-visible"
        )}
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 flex h-full w-full items-center justify-end">
          <MidjourneyImage />
        </div>

        <div className="flex max-w-[18rem] flex-col gap-2 pt-6 sm:max-w-[26rem] md:max-w-[42rem] md:pt-20">
          <HeroTagline>
            <span className="font-semibold">$bread</span>chain
          </HeroTagline>
          <HeroHeading>The currency for solidarity</HeroHeading>
          <HeroSubHeading>
            Get $BREAD and use it anywhere - all while supporting a
            post-capitalist future.
          </HeroSubHeading>
        </div>
        <div className="flex flex-col gap-2 pb-16 md:pb-24">
          <HeroCTA>
            <ButtonLink href="https://app.breadchain.xyz" isExternal>
              Get Bread
            </ButtonLink>
            <TertiaryLink
              href="https://breadchain.notion.site/4d496b311b984bd9841ef9c192b9c1c7?v=2eb1762e6b83440f8b0556c9917f86ca"
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
    <h1 className="font-poppins dark:text-breadgray-ultra-white max-w-[42rem] text-4xl font-bold leading-normal tracking-wide dark:drop-shadow-lg sm:text-5xl  sm:leading-normal md:max-w-[32rem] md:text-6xl  md:leading-normal">
      {children}
    </h1>
  );
}

export function HeroSubHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-poppins max-w-md pb-12  pt-2 font-medium tracking-wider md:pt-4 md:text-xl">
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
      <span className="font-regular font-redhat from-breadpink-400 to-breadpink-500 inline-block bg-gradient-to-r from-20% to-100% bg-clip-text uppercase text-transparent dark:from-[#ED7BC7] dark:to-[#F2A8D9] md:text-xl">
        {children}
      </span>
    </div>
  );
}

function MidjourneyImage() {
  return (
    <>
      <img
        className="hero-image:translate-x-42 hero-image:opacity-100 w-[24rem] -translate-y-14 translate-x-48 transform opacity-80 dark:hidden min-[490px]:translate-x-32 sm:-translate-y-8 sm:translate-x-24 md:w-[40rem] md:translate-x-64 lg:translate-x-32"
        src="/hero_bread_light.png"
        alt=""
      />
      <img
        className="hero-image:translate-x-42 hero-image:opacity-100 hidden w-[24rem] -translate-y-14 translate-x-48 transform opacity-70 dark:block min-[490px]:translate-x-32 sm:-translate-y-8 sm:translate-x-24 md:w-[40rem] md:translate-x-64 lg:translate-x-32"
        src="/hero_bread_dark.png"
        alt=""
      />
    </>
  );
}
