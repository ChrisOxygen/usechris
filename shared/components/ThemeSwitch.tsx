"use client";
import { useState, useEffect } from "react";

import { RiSunLine } from "react-icons/ri";
import { TbMoonStars } from "react-icons/tb";

function ThemeSwitch() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  // Hydration fix
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    // Get theme from localStorage or system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    const initialTheme = savedTheme || systemTheme;
    setTheme(initialTheme);

    // Apply theme to document
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Update localStorage
    localStorage.setItem("theme", newTheme);

    // Update document class
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Prevent flash of wrong icon
  if (!mounted) {
    return (
      <button className="md:text-3xl text-2xl opacity-0">
        <TbMoonStars />
      </button>
    );
  }

  return (
    <button
      className="md:text-3xl text-2xl hover:scale-110 transition-transform"
      onClick={toggleTheme}
    >
      {theme === "light" ? <TbMoonStars /> : <RiSunLine />}
    </button>
  );
}

export default ThemeSwitch;
