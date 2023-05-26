import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">    
      <header className="bg-breadgray-charcoal px-8 py-6">Breadboard</header>
      <main className="grow bg-breadgray-darkest px-8">{children}</main>
      <footer className="bg-breadgray-charcoal p-8">footer</footer>
    </div>
  );
}
