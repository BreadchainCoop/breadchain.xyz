import React from "react";
import { CheckmarkIcon, CoinIcon, UsersIcon } from "../Icons";
import {
  InfoCardGrid,
  InfoCard,
  InfoCardHeading,
  InfoCardIcon,
  InfoCardText,
  InfoCardTextContent,
} from "./ui";
import { CardSVGs } from "./ui/svg";

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
    <InfoCardGrid>
      {infoCards.map(({ title, infotext, icon }, i) => {
        const BackgroundSVG = CardSVGs[i];
        return (
          <InfoCard key={`infocard_${i}`}>
            <BackgroundSVG />
            <InfoCardIcon>{icon}</InfoCardIcon>
            <InfoCardTextContent>
              <InfoCardHeading>{title}</InfoCardHeading>
              <InfoCardText>{infotext}</InfoCardText>
            </InfoCardTextContent>
          </InfoCard>
        );
      })}
    </InfoCardGrid>
  );
}
