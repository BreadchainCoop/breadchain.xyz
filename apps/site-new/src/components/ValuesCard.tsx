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
        <figure className="text-breadpink-shaded h-12">
          {ValueIcons[icon]}
        </figure>
        <h3 className="font-redhat text-2xl font-medium">{title}</h3>
        <p className="m-auto max-w-sm md:w-auto">{details}</p>
      </div>
    </article>
  );
}

export const ValueIcons = {
  MESSAGE: <MessageIcon />,
  EYE: <EyeIcon />,
  RELOAD: <ReloadIcon />,
  VERTICAL_ARROWS: <VerticalArrowsIcon />,
};

export type ValueIcon = keyof typeof ValueIcons;

export function MessageIcon() {
  return (
    <svg
      className="h-full w-full fill-current"
      viewBox="0 0 51 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.166 4.1665H8.83269H4.66602H4.66602V8.33317H4.66602V45.8332H8.83269V8.33317H42.166V33.3332H12.9994V37.4998L8.8332 37.4998V41.6665H12.9999V37.4998H42.166L46.3327 37.4998V33.3332V8.33317V4.1665H42.166ZM12.9994 14.5832H37.9994V18.7498H12.9994V14.5832ZM29.666 22.9165H12.9994V27.0832H29.666V22.9165Z"
      />
    </svg>
  );
}
export function ReloadIcon() {
  return (
    <svg
      viewBox="0 0 44 40"
      className="h-full w-full fill-current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 0h-4v4h4v4H6v4H2v10h4V12h24v4h-4v4h4v-4h4v-4h4V8h-4V4h-4V0ZM10 36h4v4h4v-4h-4v-4h24v-4h4V18h-4v10H14v-4h4v-4h-4v4h-4v4H6v4h4v4Z"
      />
    </svg>
  );
}

export function VerticalArrowsIcon() {
  return (
    <svg
      viewBox="0 0 50 50"
      className="h-full w-full fill-current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.917 22.917h4.167v-8.334h4.167v4.167h4.166v-4.167h-4.166v-4.166h-4.167V6.25h-4.167v4.167h-4.166v4.166h-4.167v4.167h4.167v-4.167h4.166v8.334Zm0 4.166h4.167v8.334h4.167v4.166h-4.167v4.167h-4.167v-4.167h-4.166v-4.166h4.166v-8.334Zm-4.166 8.334V31.25h-4.167v4.167h4.167Zm12.5 0V31.25h4.166v4.167h-4.166Z"
      />
    </svg>
  );
}

export function EyeIcon() {
  return (
    <svg
      className="h-full w-full fill-current"
      viewBox="0 0 51 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.167 12.5h16.666v4.167H17.167V12.5Zm-8.334 8.333v-4.166h8.334v4.166H8.833ZM4.667 25v-4.167h4.166V25H4.667Zm0 4.167V25H.5v4.167h4.167Zm4.166 4.166H4.667v-4.166h4.166v4.166Zm8.334 4.167H8.833v-4.167h8.334V37.5Zm16.666 0v4.167H17.167V37.5h16.666Zm8.334-4.167V37.5h-8.334v-4.167h8.334Zm4.166-4.166v4.166h-4.166v-4.166h4.166Zm0-4.167H50.5v4.167h-4.167V25Zm-4.166-4.167h4.166V25h-4.166v-4.167Zm0 0v-4.166h-8.334v4.166h8.334Zm-20.834 2.084h8.334v8.333h-8.334v-8.333Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M.5 0h50v50H.5z" />
        </clipPath>
      </defs>
    </svg>
  );
}
