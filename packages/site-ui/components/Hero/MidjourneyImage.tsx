import React from "react";

export function MidjourneyImage() {
  return (
    <>
      <img
        className="w-[24rem] md:w-[40rem] transform -translate-y-14 sm:-translate-y-8 opacity-60 min-[432px]:opacity-100 translate-x-48 min-[432px]:translate-x-42 min-[490px]:translate-x-32 sm:translate-x-24 md:translate-x-64 lg:translate-x-32 dark:hidden"
        src="/img/hero_bread_light.png"
        alt=""
      />
      <img
        className="w-[24rem] md:w-[40rem] transform -translate-y-14 sm:-translate-y-8 opacity-60 min-[432px]:opacity-100 translate-x-48 min-[432px]:translate-x-42 min-[490px]:translate-x-32 sm:translate-x-24 md:translate-x-64 lg:translate-x-32 hidden dark:block"
        src="/img/hero_bread_dark.png"
        alt=""
      />
    </>
  );
}
