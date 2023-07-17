import React from "react";

export function MidjourneyImage() {
  return (
    <>
      <img
        className="hero-image:translate-x-42 hero-image:opacity-100 w-[24rem] -translate-y-14 translate-x-48 transform opacity-80 dark:hidden min-[490px]:translate-x-32 sm:-translate-y-8 sm:translate-x-24 md:w-[40rem] md:translate-x-64 lg:translate-x-32"
        src="/img/hero_bread_light.png"
        alt=""
      />
      <img
        className="hero-image:translate-x-42 hero-image:opacity-100 hidden w-[24rem] -translate-y-14 translate-x-48 transform opacity-70 dark:block min-[490px]:translate-x-32 sm:-translate-y-8 sm:translate-x-24 md:w-[40rem] md:translate-x-64 lg:translate-x-32"
        src="/img/hero_bread_dark.png"
        alt=""
      />
    </>
  );
}
