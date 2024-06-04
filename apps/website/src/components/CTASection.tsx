import { ButtonLink } from "./ButtonLink";
import { TertiaryLink } from "./TertiaryLink";

export function CTASection() {
  return (
    <section className="px-4 pt-16 pb-32 sm:px-6 md:px-8">
      <div className="m-auto max-w-4xl rounded-cta dark:bg-breadgray-darkest dark:from-breadgray-cta-bg flex flex-col gap-2 bg-white px-6 py-12 dark:bg-gradient-to-r sm:px-12">
        <h2 className="font-poppins text-4xl leading-relaxed tracking-wider md:text-5xl">
          Bake <span className="font-bold">$BREAD</span> with us.
        </h2>
        <p>
          If you want to see a post-capitalist future, show your support by
          baking (minting) bread. If you’re a like-minded project creating a
          more progressive future, join us.
        </p>
        <div className="flex flex-wrap items-center gap-6 pt-8">
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
