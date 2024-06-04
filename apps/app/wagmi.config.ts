import { defineConfig } from "@wagmi/cli";
import { react } from "@wagmi/cli/plugins";
import { Abi } from "viem";

import breadToken from "./src/abi/breadToken.json";

export default defineConfig({
  out: "src/wagmi/generated.ts",
  contracts: [
    {
      name: "Bread",
      address: "0xa555d5344f6FB6c65da19e403Cb4c1eC4a1a5Ee3",
      abi: breadToken as Abi,
    },
  ],
  plugins: [react()],
});
