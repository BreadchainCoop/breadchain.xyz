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
      <div className="absolute right-0 top-0 bottom-0 h-full w-full">
        <MidjourneyImage />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 692 726"
          className="absolute h-full right-0 top-0 bottom-0"
        >
          <mask id="b" fill="#fff">
            <path
              fill-rule="evenodd"
              d="M52.523 71.46C19.649 75.63-3.62 105.661.55 138.534l12.64 99.63c4.17 32.873 34.2 56.142 67.074 51.971l42.175-5.35 52.6 414.615c2.085 16.437 17.1 28.071 33.537 25.986l415.063-52.657c16.437-2.085 28.071-17.1 25.986-33.537l-52.6-414.615 42.174-5.351c32.874-4.17 56.142-34.2 51.972-67.074l-12.64-99.63c-4.17-32.873-34.2-56.141-67.074-51.97L52.523 71.46Z"
              clip-rule="evenodd"
            />
          </mask>
          <path
            fill="url(#a)"
            d="m122.44 284.785 4.96-.629-.629-4.961-4.961.63.63 4.96Zm52.6 414.615-4.961.629 4.961-.629Zm421.986-474.823-.629-4.96-4.96.629.629 4.96 4.96-.629Zm42.174-5.351.629 4.961-.629-4.961ZM5.512 137.905c-3.823-30.134 17.506-57.662 47.64-61.484L51.894 66.5C16.28 71.018-8.926 103.551-4.41 139.164l9.92-1.259Zm12.639 99.629-12.64-99.629-9.92 1.259 12.64 99.629 9.92-1.259Zm61.485 47.641c-30.134 3.823-57.662-17.506-61.485-47.641l-9.92 1.259c4.518 35.613 37.05 60.821 72.663 56.303l-1.258-9.921Zm42.174-5.35-42.174 5.35 1.258 9.921 42.175-5.351-1.259-9.92ZM180 698.771l-52.6-414.615-9.921 1.258 52.6 414.615 9.921-1.258Zm27.947 21.654c-13.697 1.738-26.21-7.957-27.947-21.654l-9.921 1.258c2.433 19.176 19.951 32.75 39.127 30.317l-1.259-9.921Zm415.064-52.656-415.064 52.656 1.259 9.921 415.064-52.657-1.259-9.92Zm21.655-27.948c1.738 13.697-7.958 26.21-21.655 27.948l1.259 9.92c19.176-2.433 32.749-19.95 30.316-39.127l-9.92 1.259Zm-52.6-414.615 52.6 414.615 9.92-1.259-52.599-414.614-9.921 1.258Zm46.505-10.94-42.174 5.351 1.259 9.92 42.173-5.35-1.258-9.921Zm47.64-61.485c3.823 30.135-17.506 57.662-47.64 61.485l1.258 9.921c35.613-4.518 60.821-37.051 56.303-72.664l-9.921 1.258Zm-12.639-99.629 12.639 99.629 9.921-1.258-12.639-99.63-9.921 1.26Zm-61.485-47.64c30.135-3.823 57.662 17.506 61.485 47.64l9.921-1.258c-4.518-35.613-37.051-60.82-72.664-56.303l1.258 9.92ZM53.152 76.42 612.087 5.51l-1.258-9.92L51.894 66.5l1.258 9.92Z"
            mask="url(#b)"
          />
          <defs>
            <linearGradient
              id="a"
              x1="-85.314"
              x2="750.782"
              y1="4.722"
              y2="773.918"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#C463CA" />
              <stop offset="1" stop-color="#FF99E2" />
            </linearGradient>
          </defs>
          <clipPath id="heroClipPath">
            <path d="M52.5229 71.4602C19.6493 75.6307 -3.61915 105.661 0.551335 138.534L13.1907 238.164C17.3612 271.037 47.3913 294.306 80.2649 290.135L122.44 284.785L175.04 699.4C177.125 715.837 192.14 727.471 208.577 725.386L623.64 672.729C640.077 670.644 651.711 655.629 649.626 639.192L597.026 224.577L639.2 219.226C672.074 215.056 695.342 185.026 691.172 152.152L678.532 52.5229C674.362 19.6493 644.332 -3.61916 611.458 0.551321L52.5229 71.4602Z" />
          </clipPath>
        </svg>
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
