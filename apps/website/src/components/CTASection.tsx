import { ButtonLink } from "./ButtonLink";
import { TertiaryLink } from "./TertiaryLink";
import { SectionCard } from "./SectionCard";

export function CTASection() {
  return (
    <SectionCard id="cta">
      <h2 className="py-4 text-4xl leading-relaxed tracking-wider md:text-5xl">
        Bake <span className="font-bold">$BREAD</span> with us.
      </h2>
      <p>
        If you want to see a post-capitalist future, show your support by baking
        (minting) bread. If you’re a like-minded project creating a more
        progressive future, join us.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-6 pt-8">
        <ButtonLink href="https://app.breadchain.xyz" isExternal>
          Get Bread
        </ButtonLink>
        <TertiaryLink href="https://guild.xyz/breadchain" isExternal>
          Join the guild
        </TertiaryLink>
      </div>
    </SectionCard>
  );
}
