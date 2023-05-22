import { useQuery, gql } from "@apollo/client";
import { useMemo } from "react";

const GET_ECONOMY = gql`
  query GetEconomy {
    tokens {
      id
      minted
      burned
      transfers
    }
    account(id: "0x8a35D1EB766f4f0Cb3Bb34760B7628f3e04c1c0d") {
      balances {
        token {
          id
        }
        amount
      }
    }
    accounts {
      id
    }
  }
`;

export default function EconomyDisplay() {
  const { loading, error, data } = useQuery(GET_ECONOMY);

  const reducedData = useMemo(() => {
    if (data) {
      // console.log(data.transfers.length);
      console.log(data.accounts.length);
      // console.log(data.approvals.length);
      return data;
    }
  }, [data]);

  console.log({ reducedData });

  return (
    <section>
      <h2>Economy Display</h2>
      {loading && <p>loading ...</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </section>
  );
}
