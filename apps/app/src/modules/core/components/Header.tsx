import { ReactNode } from "react";

export default function Header({ children }: { children: ReactNode }) {
  return (
      <header className="bg-breadgray-charcoal px-8 py-6">{children}</header>
  );
}
