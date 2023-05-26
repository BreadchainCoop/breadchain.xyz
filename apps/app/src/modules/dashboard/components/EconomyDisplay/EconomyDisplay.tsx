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
    <section>
      <section className="py-12 flex flex-col gap-4">
        <h2 className="font-bold">Economy</h2>
        {loading && <p>loading ...</p>}
        {data && (
          <dl className='grid grid-cols-2'>
            <dt>Current Total BREAD Supply:</dt>
            <dd>{formatUnits(data.tokens[0].supply, 18)}</dd>
        </dl>
        )}
      </section>
      <BreadChart />
      <AAVE />
      <Arrakis />
    </section>
  );
}
