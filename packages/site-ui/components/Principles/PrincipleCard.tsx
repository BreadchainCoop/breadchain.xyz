import React from "react";
import { EyeIcon, MessageIcon, ReloadIcon } from "../Icons";
import { VerticalArrowsIcon } from "../Icons/VerticalArrows";

const Icons = {
  MESSAGE: <MessageIcon />,
  EYE: <EyeIcon />,
  RELOAD: <ReloadIcon />,
  VERTICAL_ARROWS: <VerticalArrowsIcon />,
};

function PrincipleIcon({ iconString }) {
  return (
    <figure className="h-12 text-breadpink-300">{Icons[iconString]}</figure>
  );
}

export function PrincipleCard({
  title,
  details,
  iconString,
}: {
  title: string;
  details: string;
  iconString: string;
}) {
  return (
    <article className="col-span-2 sm:col-span-1">
      <div className="py-8 flex flex-col gap-4">
        <PrincipleIcon iconString={iconString} />
        <h3 className="font-redhat text-2xl pt-4 font-medium text-breadgray-200">
          {title}
        </h3>
        <p>{details}</p>
      </div>
    </article>
  );
}
