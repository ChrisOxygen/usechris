"use client";
import { useState } from "react";

import { RiSunLine } from "react-icons/ri";
import { TbMoonStars } from "react-icons/tb";

function ThemeSwitch() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <button className=" md:text-3xl text-2xl" onClick={toggleTheme}>
      {theme === "light" ? <TbMoonStars /> : <RiSunLine />}
    </button>
  );
}

export default ThemeSwitch;
