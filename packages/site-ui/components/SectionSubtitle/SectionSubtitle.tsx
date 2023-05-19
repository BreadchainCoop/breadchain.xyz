import React, { ReactNode } from "react";

export function SectionSubtitle({ children }: { children: ReactNode }) {
  return <section className="sm:max-w-full">{children}</section>;
}
