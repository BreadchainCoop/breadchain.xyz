import React, { ReactNode } from "react";

import { classNames } from "@breadchain.xyz/utils";
import { ButtonLink } from "../ButtonLink";

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
    <section className="py-16 px-4 sm:px-6 md:px-8">
      <div
        className={classNames(
          "max-w-4xl m-auto",
          "bg-breadgray-700 p-12 flex flex-col gap-8"
        )}
      >
        <h2 className="text-breadgray-200 font-pressstart text-2xl">
          Bake $BREAD with us.
        </h2>
        <p>
          If you want to see a post-capitalist future, show your support by
          baking (minting) bread. If you’re a like-minded project creating a
          more progressive future, join us.
        </p>
        <div className="flex gap-6 items-center">
          <ButtonLink href="#">Get Bread</ButtonLink>
          <CTASectionLink href="#">Join the guild</CTASectionLink>
        </div>
      </div>
    </section>
  );
}
