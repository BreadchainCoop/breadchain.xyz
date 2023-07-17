import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow px-8 w-full">{children}</main>
      <Footer />
    </div>
  );
}
