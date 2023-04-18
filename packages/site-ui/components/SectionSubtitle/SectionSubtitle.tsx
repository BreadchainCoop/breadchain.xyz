import React, { ReactNode } from "react";

export function SectionSubtitle({ children }: { children: ReactNode }) {
  return (
    <section className="max-w-sm m-auto sm:max-w-full">{children}</section>
  );
}
