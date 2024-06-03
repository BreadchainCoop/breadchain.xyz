import clsx from "clsx";

import { ValueCard, type ValueIcon } from "./ValuesCard";

const values: Array<{
  title: string;
  details: string;
  icon: ValueIcon;
}> = [
  {
    title: "Dual Power",
    details:
      "We must build parallel tech institutions from the grassroots because technology without direct social intervention only favors those in power.",
    icon: "VERTICAL_ARROWS",
  },
  {
    title: "Economic Democracy",
    details:
      "We strive for an economy in which resources are allocated democratically rather than through market forces.",
    icon: "MESSAGE",
  },
  {
    title: "Mutual Aid",
    details:
      "We believe in communal solidarity through reciprocal exchange for mutual benefit so everyone can live a dignified life.",
    icon: "RELOAD",
  },
  {
    title: "Transparent Governance",
    details:
      "Everyone should have a say and those given power by the community must be held responsible for their decisions for all to see.",
    icon: "EYE",
  },
];

export function ValuesSection() {
  return (
    <section id="values" className="sm:pb-42 pb-32 pt-20">
      <div className="flex flex-col gap-4 px-4 pb-16 sm:items-center sm:text-left">
        <div className="m-auto flex max-w-sm flex-col items-start gap-4 sm:max-w-full">
          <h2 className="font-redhat flex w-full max-w-sm flex-col gap-3 text-left text-4xl font-bold sm:max-w-full sm:text-5xl md:flex-row md:gap-0">
            <span className="inline-block pr-2 font-normal">Currency</span>
            <span>with a conscience</span>
          </h2>
          <div className="w-full">
            Here are the principles that guide Breadchain projects and their
            missions.
          </div>
        </div>
      </div>
      <div className="relative overflow-x-visible px-4">
        <ValuesBackgroundGraphics />
        <div className="relative m-auto grid max-w-4xl grid-cols-2 gap-4 text-center sm:gap-16 md:gap-x-48">
          {values.map(({ title, details, icon }, i) => {
            return (
              <>
                {i !== 0 && (
                  <div className="col-span-2 flex h-32 justify-center sm:hidden">
                    <svg
                      className={clsx(
                        "m-auto h-full w-72",
                        i % 2 === 0 && "rotate-180 transform"
                      )}
                      viewBox="0 0 100 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.4"
                        y="5.15176"
                        width="4.33107"
                        height="99.2"
                        rx="0.6"
                        transform="rotate(-90 0.4 5.15176)"
                        stroke="url(#paint0_linear_1367_1420)"
                        strokeOpacity="0.5"
                        strokeWidth="0.8"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1367_1420"
                          x1="2.56554"
                          y1="5.55176"
                          x2="2.56554"
                          y2="105.552"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#ED7BC7" stopOpacity="0" />
                          <stop offset="1" stopColor="#ED7BC7" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                )}
                <ValueCard
                  key={`principlecard_${i}`}
                  title={title}
                  details={details}
                  icon={icon}
                />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ValuesBackgroundGraphics() {
  return (
    <div className="absolute -left-96 -right-96 -top-16 -bottom-16 m-auto flex items-center justify-center">
      <ValuesLarge isRightSide={false} />
      <ValuesCenter />
      <ValuesLarge isRightSide={true} />
    </div>
  );
}

function ValuesLarge({ isRightSide }: { isRightSide: boolean }) {
  return (
    <div className="-z-20 hidden h-full w-auto sm:block">
      <svg
        viewBox="0 0 735 735"
        className={clsx(
          "h-full w-full",
          isRightSide
            ? "translate-x-28 rotate-180 transform"
            : "-translate-x-28 transform"
        )}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity=".5">
          <mask id="values_large_b">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="m360.386 692.839 331.53-329.28L373.941 43.411l-331.53 329.28 317.975 320.148Zm338.625-330.675 34.153-33.92a2 2 0 0 0 .01-2.829l-320.81-323a2 2 0 0 0-2.828-.01l-34.153 33.92L340.049.75a2 2 0 0 0-2.829-.01L1.413 334.268a2 2 0 0 0-.01 2.829l35.336 35.576-35.576 35.334a2 2 0 0 0-.01 2.828l320.81 323.001a2 2 0 0 0 2.828.01l35.576-35.334 35.334 35.575a2 2 0 0 0 2.828.01l335.807-333.528a2 2 0 0 0 .01-2.828l-35.335-35.577Z"
            />
          </mask>
          <path
            d="m360.386 692.839-.709.705.704.709.71-.704-.705-.71Zm331.53-329.28.705.71.709-.705-.704-.71-.71.705ZM373.941 43.411l.709-.705-.704-.71-.71.706.705.71Zm-331.53 329.28-.705-.709-.71.704.705.71.71-.705Zm656.6-10.527-.704-.709-.71.705.705.709.709-.705Zm34.153-33.92.705.709-.705-.709ZM375.383 36.326l-.709.704.704.71.71-.705-.705-.71ZM340.049.75l.709-.705-.709.705ZM36.739 372.673l.704.709.71-.704-.705-.71-.71.705Zm323.628 325.839.709-.705-.704-.709-.71.704.705.71Zm38.162 35.585-.704-.709.704.709Zm335.807-333.528.705.709-.705-.709Zm-373.245 292.98 331.53-329.28-1.41-1.419-331.529 329.28 1.409 1.419Zm12.14-649.433 317.976 320.148 1.419-1.41L374.65 42.707l-1.419 1.409ZM43.116 373.4l331.529-329.28-1.409-1.42-331.53 329.281 1.41 1.419Zm317.98 318.733L43.12 371.987l-1.419 1.409 317.976 320.148 1.419-1.41Zm338.62-329.26 34.153-33.921-1.41-1.419-34.152 33.921 1.409 1.419Zm34.153-33.921a3 3 0 0 0 .014-4.242l-1.419 1.409a1 1 0 0 1-.005 1.414l1.41 1.419Zm.014-4.242L413.074 1.71l-1.419 1.409L732.464 326.12l1.419-1.409ZM413.074 1.71a3 3 0 0 0-4.243-.015l1.41 1.42a1 1 0 0 1 1.414.004l1.419-1.41Zm-4.243-.015-34.152 33.921 1.409 1.42 34.153-33.922-1.41-1.419Zm-32.738 33.926L340.758.045l-1.419 1.41 35.335 35.575 1.419-1.41ZM340.758.045a3 3 0 0 0-4.242-.014l1.409 1.419a1 1 0 0 1 1.414.004l1.419-1.409Zm-4.242-.014L.709 333.559l1.409 1.419L337.925 1.45 336.516.03ZM.709 333.559a3 3 0 0 0-.015 4.242l1.42-1.409a1 1 0 0 1 .004-1.414l-1.41-1.419Zm-.015 4.242 35.335 35.577 1.419-1.41-35.335-35.576-1.419 1.409Zm35.34 34.162L.459 407.297l1.409 1.419 35.575-35.334-1.41-1.419ZM.459 407.297a3 3 0 0 0-.015 4.243l1.42-1.41a1 1 0 0 1 .004-1.414l-1.41-1.419Zm-.015 4.243 320.809 323.001 1.419-1.409L1.863 410.13l-1.419 1.41Zm320.809 323.001a3 3 0 0 0 4.243.014l-1.409-1.419a1.001 1.001 0 0 1-1.415-.004l-1.419 1.409Zm4.243.014 35.575-35.334-1.409-1.419-35.575 35.334 1.409 1.419Zm70.915-1.172-35.335-35.576-1.419 1.409 35.335 35.576 1.419-1.409Zm1.414.005a1 1 0 0 1-1.414-.005l-1.419 1.409a3 3 0 0 0 4.242.015l-1.409-1.419Zm335.807-333.529L397.825 733.388l1.409 1.419 335.807-333.529-1.409-1.419Zm.005-1.414a1 1 0 0 1-.005 1.414l1.409 1.419a3 3 0 0 0 .015-4.242l-1.419 1.409Zm-35.335-35.576 35.335 35.576 1.419-1.409-35.335-35.576-1.419 1.409Z"
            fill="url(#values_large_a)"
            mask="url(#values_large_b)"
          />
        </g>
        <defs>
          <linearGradient
            id="values_large_a"
            x1="43.5"
            y1="335.5"
            x2="955.5"
            y2="322"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".124" stopColor="#E429A6" />
            <stop offset=".473" stopColor="#E429A6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ValuesCenter() {
  return (
    <div className="hidden h-48 w-48 sm:block ">
      <svg
        viewBox="0 0 215 215"
        className="h-full w-full fill-transparent"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="105.4"
          y="111.4"
          width="4.2"
          height="99.2"
          rx="0.6"
          stroke="url(#paint0_linear_1468_1361)"
          strokeOpacity="0.5"
          strokeWidth="0.8"
        />
        <rect
          x="4.4"
          y="109.731"
          width="4.2"
          height="99.2"
          rx="0.6"
          transform="rotate(-90 4.4 109.731)"
          stroke="url(#paint1_linear_1468_1361)"
          strokeOpacity="0.5"
          strokeWidth="0.8"
        />
        <rect
          x="111.4"
          y="109.731"
          width="4.2"
          height="99.2"
          rx="0.6"
          transform="rotate(-90 111.4 109.731)"
          stroke="url(#paint2_linear_1468_1361)"
          strokeOpacity="0.5"
          strokeWidth="0.8"
        />
        <rect
          x="109.6"
          y="103.6"
          width="4.2"
          height="99.2"
          rx="0.6"
          transform="rotate(-180 109.6 103.6)"
          stroke="url(#paint3_linear_1468_1361)"
          strokeOpacity="0.5"
          strokeWidth="0.8"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1468_1361"
            x1="107.5"
            y1="111"
            x2="107.5"
            y2="211"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ED7BC7" />
            <stop offset="1" stopColor="#ED7BC7" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1468_1361"
            x1="6.5"
            y1="110.131"
            x2="6.5"
            y2="210.131"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ED7BC7" stopOpacity="0" />
            <stop offset="1" stopColor="#ED7BC7" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1468_1361"
            x1="113.5"
            y1="110.131"
            x2="113.5"
            y2="210.131"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ED7BC7" />
            <stop offset="1" stopColor="#ED7BC7" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1468_1361"
            x1="112.5"
            y1="104"
            x2="112.5"
            y2="204"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ED7BC7" />
            <stop offset="1" stopColor="#ED7BC7" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
