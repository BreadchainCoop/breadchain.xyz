export type MemberProjectKeys =
  | "cca"
  | "laborDao"
  | "symbiota"
  | "citizenWallet"
  | "refiDao"
  | "breadchainCore"
  | "breadchainTreasury";

export type MemberProject = {
  name: string;
  account: `0x${string}`;
  homepage: `https://${string}`;
  description: string;
};

export const memberProjects: {
  [key in MemberProjectKeys]: MemberProject;
} = {
  cca: {
    name: "Crypto Commons Association",
    account: "0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097",
    homepage: "https://www.crypto-commons.org/",
    description:
      "An organization producing research and events related to decentralized technologies and the commons.",
  },
  laborDao: {
    name: "Labour DAO",
    account: "0xcd3B766CCDd6AE721141F452C550Ca635964ce71",
    homepage: "https://www.thelabordao.com",
    description:
      "A DAO supporting workers who want to organize, strike and collectively bargain.",
  },
  symbiota: {
    name: "Symbiota",
    account: "0x2546BcD3c84621e976D8185a91A922aE77ECEc30",
    homepage: "https://symbiota.coop",
    description:
      "A collective of event-focused organisations devoted to new forms of culture and enquiry, structured as a not-for-profit worker co-operative.",
  },
  citizenWallet: {
    name: "Citizen Wallet",
    account: "0x9c8C8513974d22E8eA9F74f2860833Db107111E6",
    homepage: "https://citizenwallet.xyz/",
    description:
      "Citizen Wallet provides tools for communities to manage local currencies. We focus on simplicity, seamless onboarding, and accessibility—even for those without phones or apps.",
  },
  refiDao: {
    name: "ReFi DAO",
    account: "0x68060388C7D97B4bF779a2Ead46c86e5588F073f",
    homepage: "https://www.refidao.com/",
    description:
      "A global network driving the Regenerative Finance (ReFi) movement, leveraging Web3 to regenerate ecosystems and foster economic systems that prioritize ecological and social well-being.",
  },
  breadchainCore: {
    name: "Breadchain Core",
    account: "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E",
    homepage: "https://breadchain.xyz",
    description: "????",
  },
  breadchainTreasury: {
    name: "Breadchain Treasury",
    account: "0xdD2FD4581271e230360230F9337D5c0430Bf44C0",
    homepage: "https://breadchain.xyz",
    description: "????",
  },
};
