import { useQuery, gql } from "@apollo/client";
import { formatUnits } from "ethers";
import BreadChart from "./BreadChart";
import AAVE from "./AAVE";
import Arrakis from "./Arrakis";

const GET_ECONOMY = gql`
  query GetEconomy {
    tokens {
      id
      minted
      burned
      transfers
      supply
    }
    account(id: "0x8a35d1eb766f4f0cb3bb34760b7628f3e04c1c0d") {
      balances {
        token {
          id
        }
        amount
      }
    }
    accounts {
      id
      balances {
        token {
          id
        }
        amount
      }
    }
  }
`;

export default function EconomyDisplay() {
  const { loading, data } = useQuery(GET_ECONOMY);

  return (
    <section className="bg-[#343434] mt-12 p-12 rounded w-full max-w-4xl m-auto">
      <section className="flex flex-row justify-between gap-4 mb-12">
        <h2 className="font-bold">The $BREAD Economy</h2>
        <figure>
          <span className="font-bold uppercase">1 bread = 1,01 usd</span>
        </figure>
        {/* {loading && <p>loading ...</p>}
        {data && (
          <dl className="grid grid-cols-2">
            <dt>Current Total BREAD Supply:</dt>
            <dd>{formatUnits(data.tokens[0].supply, 18)}</dd>
          </dl>
        )} */}
      </section>
      <BreadChart />
      {/* <AAVE /> */}
      {/* <Arrakis /> */}
    </section>
  );
}
