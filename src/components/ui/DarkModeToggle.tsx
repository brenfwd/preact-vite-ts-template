import { useEffect } from "preact/hooks";

import { useStickyState } from "@/utils/useStickyState";
import { Icon } from "./Icon";

export function useDarkMode(): [darkMode: boolean, setDarkMode: (darkMode: boolean) => void] {
  const [darkMode, setDarkMode] = useStickyState(
    "DarkModeToggle",
    () => window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return [darkMode, setDarkMode];
}

export function DarkModeToggle() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? (
        <Icon fallback="Light" title="Switch to Light Mode">
          light_mode
        </Icon>
      ) : (
        <Icon fallback="Dark" title="Switch to Dark Mode">
          dark_mode
        </Icon>
      )}
    </button>
  );
}
