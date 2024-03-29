import React from "react";

export function NewLogo() {
  return (
    <div className="flex h-8 w-8 items-center">
      <a
        href="/"
        className="inline-block h-full w-full md:h-[2.39125rem] md:w-[2.5rem]"
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.95652 0.869629C3.11454 0.869629 0 3.98417 0 7.82615C0 11.6677 3.11382 14.7819 6.95518 14.7827L6.95518 34.1304C6.95518 36.8918 9.19375 39.1304 11.9552 39.1304H28.0421C30.8036 39.1304 33.0421 36.8918 33.0421 34.1304V14.7827H33.0435C36.8855 14.7827 40 11.6681 40 7.82615C40 3.98417 36.8855 0.869629 33.0435 0.869629L6.95652 0.869629Z"
            fill="url(#paint0_linear_1675_1493)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1675_1493"
              x1="5.5"
              y1="31"
              x2="32.9413"
              y2="6.84103"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D04EC5" />
              <stop offset="1" stopColor="#ED7BC7" />
            </linearGradient>
          </defs>
        </svg>
      </a>
    </div>
  );
}
