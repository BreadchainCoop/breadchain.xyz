import React, { ReactNode } from "react";

export function SectionSubtitle({ children }: { children: ReactNode }) {
  return <section className="w-full md:text-center">{children}</section>;
}
