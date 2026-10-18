import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "./../lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    () =>
      typeof localStorage !== "undefined" &&
      localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toogleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
    window.dispatchEvent(new Event("themechange"));
  };

  return (
    <>
      <button
        onClick={toogleTheme}
        className={cn(
          "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors",
          "duration-300 focus:outline-hidden",
        )}
      >
        {isDarkMode ? (
          <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
          <Moon className="h-6 w-6 text-blue-900" />
        )}
      </button>
    </>
  );
};
