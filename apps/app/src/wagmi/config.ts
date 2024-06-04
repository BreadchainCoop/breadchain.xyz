import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { gnosis } from "wagmi/chains";

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;
if (!projectId)
  throw new Error("Missing env var: NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID");

export const wagmiConfig = getDefaultConfig({
  appName: "Breadchain Crowdstaking",
  projectId,
  chains: [gnosis],
});
