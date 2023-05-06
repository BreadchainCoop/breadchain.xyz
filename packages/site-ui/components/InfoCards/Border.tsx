import React from "react";

export function Border() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="409"
      height="369"
      fill="none"
    >
      <mask id="b" fill="#fff">
        <path
          fillRule="evenodd"
          d="M40.215 37.623V2a2 2 0 0 1 2-2h364.12a2 2 0 0 1 2 2v36.518a2 2 0 0 1-2 2H43.308V367a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V39.623a2 2 0 0 1 2-2h38.215Z"
          clipRule="evenodd"
        />
      </mask>
      <path
        fill="url(#a)"
        d="M40.215 37.623v1h1v-1h-1Zm3.093 2.895v-1h-1v1h1Zm-2.093-2.895V2h-2v35.623h2Zm0-35.623a1 1 0 0 1 1-1v-2a3 3 0 0 0-3 3h2Zm1-1h364.12v-2H42.215v2Zm364.12 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Zm1 1v36.518h2V2h-2Zm0 36.518a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Zm-1 1H43.308v2h363.027v-2Zm-364.027 1V367h2V40.518h-2Zm0 326.482a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Zm-1 1H2v2h39.308v-2ZM2 368a1 1 0 0 1-1-1h-2a3 3 0 0 0 3 3v-2Zm-1-1V39.623h-2V367h2ZM1 39.623a1 1 0 0 1 1-1v-2a3 3 0 0 0-3 3h2Zm1-1h38.215v-2H2v2Z"
        mask="url(#b)"
      />
      <defs>
        <linearGradient
          id="a"
          x1="204.167"
          x2="92.459"
          y1="0"
          y2="416.246"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#CC43A5" />
          <stop offset="1" stop-color="#FF99E2" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
