import { Header } from "@breadchain.xyz/website-ui";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="About Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="min-h-screen p-16 font-redhat">
        <h1 className="font-pressstart text-2xl">About</h1>
        <p>
          Get started by editing&nbsp;
          <code>src/pages/index.tsx</code>
        </p>
      </main>
    </>
  );
}
