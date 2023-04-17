import { classNames } from "@breadchain.xyz/utils";
import React, { useEffect, useState } from "react";

type TColorMode = "LIGHT" | "DARK";

export function ColorToggle() {
  const [colorMode, setColorMode] = useState<null | TColorMode>(null);
  useEffect(() => {
    const colorMode = localStorage.getItem("colorMode");
    if (colorMode === "DARK") {
      document.documentElement.classList.add("dark");
      setColorMode("DARK");
    } else {
      setColorMode("LIGHT");
    }
  }, []);

  function handleColorToggle() {
    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("colorMode", "LIGHT");
      document.documentElement.classList.remove("dark");
      setColorMode("LIGHT");
    } else {
      localStorage.setItem("colorMode", "DARK");
      document.documentElement.classList.add("dark");
      setColorMode("DARK");
    }
  }

  return (
    <section>
      {colorMode && (
        <button className="flex items-center gap-2" onClick={handleColorToggle}>
          <div
            className={classNames(
              "w-6 h-6",
              colorMode === "LIGHT"
                ? "text-breadgray-grey"
                : "text-breadpink-shaded"
            )}
          >
            <MoonIcon />
          </div>
          <div className="w-[1px] text-breadgray-light-grey opacity-60">
            <Divider />
          </div>
          <div
            className={classNames(
              "w-6 h-6",
              colorMode === "LIGHT"
                ? "text-breadpink-shaded"
                : "text-breadgray-grey"
            )}
          >
            <SunIcon />
          </div>
        </button>
      )}
    </section>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-full h-full fill-current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 2h8v2h-2v2h-2V4H6V2ZM4 6V4h2v2H4Zm0 10H2V6h2v10Zm2 2H4v-2h2v2Zm2 2H6v-2h2v2Zm10 0v2H8v-2h10Zm2-2v2h-2v-2h2Zm-2-4h2v4h2v-6h-2v2h-2v2Zm-6 0v2h6v-2h-6Zm-2-2h2v2h-2v-2Zm0 0V6H8v6h2Z"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-full h-full fill-current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#sun_icon)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13 0h-2v4h2V0ZM0 11v2h4v-2H0Zm24 0v2h-4v-2h4ZM13 24h-2v-4h2v4ZM8 6h8v2H8V6ZM6 8h2v8H6V8Zm2 10v-2h8v2H8Zm10-2h-2V8h2v8Zm2-14h2v2h-2V2Zm0 2v2h-2V4h2Zm2 18h-2v-2h2v2Zm-2-2h-2v-2h2v2ZM4 2H2v2h2v2h2V4H4V2ZM2 22h2v-2h2v-2H4v2H2v2Z"
        />
      </g>
      <defs>
        <clipPath id="sun_icon">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

function Divider() {
  return (
    <svg
      viewBox="0 0 1 20"
      className="fill-current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="1" height="20" />
    </svg>
  );
}
