import React from "react";
import { z } from "zod";
import { EyeIcon, MessageIcon, ReloadIcon } from "../Icons";
import { VerticalArrowsIcon } from "../Icons/VerticalArrows";

export const ValueIcons = {
  MESSAGE: <MessageIcon />,
  EYE: <EyeIcon />,
  RELOAD: <ReloadIcon />,
  VERTICAL_ARROWS: <VerticalArrowsIcon />,
};

export type TValueIcons = keyof typeof ValueIcons;

function PrincipleIcon({ icon }: { icon: TValueIcons }) {
  return (
    <figure className="text-breadpink-shaded h-12">{ValueIcons[icon]}</figure>
  );
}

export const ZValueCardProps = z.object({
  title: z.string(),
  details: z.string(),
  icon: z.union([
    z.literal("MESSAGE"),
    z.literal("EYE"),
    z.literal("RELOAD"),
    z.literal("VERTICAL_ARROWS"),
  ]),
});

export type TValueCardProps = z.infer<typeof ZValueCardProps>;

export function ValueCard({
  title,
  details,
  icon,
}: {
  title: string;
  details: string;
  icon: keyof typeof ValueIcons;
}) {
  return (
    <article className="col-span-2 sm:col-span-1">
      <div className="flex flex-col gap-2 py-8 text-center">
        <PrincipleIcon icon={icon} />
        <h3 className="font-redhat text-2xl font-medium">{title}</h3>
        <p className="m-auto max-w-sm md:w-auto">{details}</p>
      </div>
    </article>
  );
}
