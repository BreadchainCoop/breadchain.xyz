import React from "react";
import { CheckmarkIcon, CoinIcon, UsersIcon } from "../Icons";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { SectionSubtitle } from "../SectionSubtitle/SectionSubtitle";
import {
  InfoCardGrid,
  InfoCard,
  InfoCardHeading,
  InfoCardIcon,
  InfoCardText,
  InfoCardTextContent,
} from "./ui";
import { CardSVGs } from "./ui/svg";
import { classNames } from "@breadchain.xyz/utils";
import { pageWrapPadding } from "../classStrings";

const infoCards = [
  {
    title: "Get consistent value",
    infotext:
      "$BREAD is linked to $DAI which is a stablecoin with equal value to USD. So $1 = 1 $BREAD.",
    icon: <CheckmarkIcon />,
  },
  {
    title: "Built on solidarity",
    infotext:
      "A solidarity primitive is a building block for solidarity through code. Build with $BREAD to have a tech stack with values.",
    icon: <UsersIcon />,
  },
  {
    title: "Fund the future",
    infotext:
      "Earnings from the minting of $BREAD go to supporting a co-operative of post-capitalist web3 projects. ",
    icon: <CoinIcon />,
  },
];

export function InfoCards() {
  return (
    <section id="about" className="pb-48">
      <div
        className={classNames(
          pageWrapPadding,
          "text-center flex flex-col gap-2 py-8"
        )}
      >
        <SectionTitle>
          <span className="font-normal">Get that</span> $BREAD
        </SectionTitle>
        <SectionSubtitle>
          See why $BREAD is the best thing since sliced, well, you know.
        </SectionSubtitle>
      </div>
      <InfoCardGrid>
        {infoCards.map(({ title, infotext, icon }, i) => {
          // const BackgroundSVG = CardSVGs[i];
          return (
            <InfoCard key={`infocard_${i}`}>
              {/* <BackgroundSVG /> */}
              <InfoCardIcon>{icon}</InfoCardIcon>
              <InfoCardTextContent>
                <InfoCardHeading>{title}</InfoCardHeading>
                <InfoCardText>{infotext}</InfoCardText>
              </InfoCardTextContent>
            </InfoCard>
          );
        })}
      </InfoCardGrid>
    </section>
  );
}
