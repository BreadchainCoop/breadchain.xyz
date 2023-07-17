import { ReactNode } from "react";

export default function Header() {
  return (
    <header className="bg-breadgray-charcoal px-8 py-6">
      <div className="max-w-4xl m-auto flex justify-between">
        <span>logo</span>
        <nav>
          <a href="#">Bake</a>
          <a href="#">Dashboard</a>
        </nav>
      </div>
    </header>
  );
}
