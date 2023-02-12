import { classNames } from "@breadchain.xyz/utils";
import React from "react";
import { CheckmarkIcon, CoinIcon, UsersIcon } from "../Icons";
import {
  InfoCard,
  InfoCardHeading,
  InfoCardIcon,
  InfoCardText,
  InfoCardTextContent,
} from "./ui";

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
    <section
      id="about"
      className={classNames(
        "m-auto px-4",
        "max-w-[60rem] py-12 flex flex-col gap-12 md:gap-20"
      )}
    >
      {infoCards.map(({ title, infotext, icon }, i) => {
        const float = i % 2 !== 0 ? "left" : "right";

        return (
          <InfoCard key={`infocard_${i}`} float={float}>
            {float === "right" && <InfoCardIcon>{icon}</InfoCardIcon>}
            <InfoCardTextContent>
              <InfoCardHeading>{title}</InfoCardHeading>
              <InfoCardText>{infotext}</InfoCardText>
            </InfoCardTextContent>
            {float === "left" && <InfoCardIcon>{icon}</InfoCardIcon>}
          </InfoCard>
        );
      })}
    </section>
  );
}
