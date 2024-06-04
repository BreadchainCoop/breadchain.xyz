"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export function BakeryPage() {
  const { address } = useAccount();

  return (
    <main>{!address ? <ConnectButton /> : <p>Connected as {address}</p>}</main>
  );
}
