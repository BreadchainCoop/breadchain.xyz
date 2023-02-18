import React, { ReactNode } from "react";

import { classNames } from "@breadchain.xyz/utils";
import { ButtonLink } from "../ButtonLink";
import { TertiaryLink } from "../TertiaryLink";

export function CTASectionLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="bg-primary-500 font-bold text-breadpink-300 rounded-full px-6 py-3"
    >
      {children}
    </a>
  );
}

export function CTASection() {
  return (
    <section className="pt-16 pb-32 px-4 sm:px-6 md:px-8">
      <div
        className={classNames(
          "max-w-4xl m-auto",
          "bg-gradient-to-r from-breadgray-cta-bg to blue-400 px-6 py-12 sm:px-12 flex flex-col gap-2"
        )}
      >
        <h2 className="text-breadgray-200 font-poppins text-5xl leading-relaxed tracking-wider">
          Bake <span className="font-bold">$BREAD</span> with us.
        </h2>
        <p>
          If you want to see a post-capitalist future, show your support by
          baking (minting) bread. If you’re a like-minded project creating a
          more progressive future, join us.
        </p>
        <div className="flex flex-wrap gap-6 pt-8 items-center">
          <ButtonLink href="https://app.breadchain.xyz" isExternal>
            Get Bread
          </ButtonLink>
          <TertiaryLink href="https://guild.xyz/breadchain" isExternal>
            Join the guild
          </TertiaryLink>
        </div>
      </div>
    </section>
  );
}
