import Head from "next/head";

import { Header } from "@breadchain.xyz/website-ui";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="min-h-screen p-16 font-redhat">
        <h1 className="font-pressstart text-2xl">Home</h1>
        <p>
          Get started by editing&nbsp;
          <code>src/pages/index.tsx</code>
        </p>
      </main>
    </>
  );
}
