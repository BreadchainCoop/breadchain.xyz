import React from "react";

export function MidjourneyImage() {
  return (
    <>
      <img
        className="min-[432px]:translate-x-42 w-[24rem] -translate-y-14 translate-x-48 transform opacity-60 dark:hidden min-[432px]:opacity-100 min-[490px]:translate-x-32 sm:-translate-y-8 sm:translate-x-24 md:w-[40rem] md:translate-x-64 lg:translate-x-32"
        src="/img/hero_bread_light.png"
        alt=""
      />
      <img
        className="min-[432px]:translate-x-42 hidden w-[24rem] -translate-y-14 translate-x-48 transform opacity-60 dark:block min-[432px]:opacity-100 min-[490px]:translate-x-32 sm:-translate-y-8 sm:translate-x-24 md:w-[40rem] md:translate-x-64 lg:translate-x-32"
        src="/img/hero_bread_dark.png"
        alt=""
      />
    </>
  );
}
