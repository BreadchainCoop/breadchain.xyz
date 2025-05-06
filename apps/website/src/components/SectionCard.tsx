import type { ReactNode } from "react";

export function SectionCard({
  children,
  id,
}: {
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="px-4 pt-16 pb-16 sm:px-6 md:px-8">
      <div className="m-auto max-w-[1040px] border dark:border-breadgray-toast rounded-2xl dark:bg-breadgray-darkest dark:from-breadgray-cta-bg flex flex-col gap-2 bg-white px-6 py-4 dark:bg-gradient-to-r sm:px-12">
        {children}
      </div>
    </section>
  );
}
