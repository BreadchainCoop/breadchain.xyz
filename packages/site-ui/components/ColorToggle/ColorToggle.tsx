import React, { useEffect } from "react";

type TColorMode = "INIT" | "LIGHT" | "DARK";

export function ColorToggle() {
  useEffect(() => {
    const colorMode = localStorage.getItem("colorMode");
    if (colorMode === "DARK") document.documentElement.classList.add("dark");
  }, []);

  function handleColorToggle() {
    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("colorMode", "LIGHT");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("colorMode", "DARK");
      document.documentElement.classList.add("dark");
    }
  }

  return (
    <section>
      <button onClick={handleColorToggle}>togglez</button>
    </section>
  );
}
