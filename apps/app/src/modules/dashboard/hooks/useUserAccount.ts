const SUBGRAPH_URL = "https://api.thegraph.com/subgraphs/name/jaimehgb/aave-v3-polygon"

const aaveClient = new ApolloClient({
    uri: SUBGRAPH_URL,
    cache: new InMemoryCache(),
  });

const USER_ACCOUNT_QUERY = gql`
  query UserAccount($address: String) {
    account(id: $address) {
      id
      balances {
        amount
      }
      balancesSnapshot(orderBy: timestamp, orderDirection: desc) {
        amount
        timestamp
      }
    }
  }
`;

import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import { formatUnits } from 'ethers';
import { useMemo } from 'react';

export default function useUserAccount(address: string) {
    const { data: apolloData, loading } = useQuery(USER_ACCOUNT_QUERY, { variables: { address } }); 

    const data = apolloData

    console.log({data})

    return {
        data,
        loading
    }
}