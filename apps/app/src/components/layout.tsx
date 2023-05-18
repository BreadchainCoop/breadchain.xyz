import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header>header</header>
      <main className="grow">{children}</main>
      <footer>footer</footer>
    </>
  );
}
