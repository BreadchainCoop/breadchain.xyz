import "@/styles/index.css";
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const SUBGRAPH_URL =
  "https://api.thegraph.com/subgraphs/name/breadchaincoop/bread-polygon";

// const SUBGRAPH_URL =
//   "http://localhost:8000/subgraphs/name/breadchaincoop/bread-polygon";

const client = new ApolloClient({
  uri: SUBGRAPH_URL,
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />;
    </ApolloProvider>
  );
}
