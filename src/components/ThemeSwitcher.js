"use client";

import usePreferenceStore from "@/stores/preferencesStore";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeSwitcher = ({ children }) => {
  const { toggleTheme } = usePreferenceStore.getState();

  const theme = usePreferenceStore((state) => state.theme);

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    >
      {theme == "light" ? <FaMoon /> : <FaSun />}
      {children}
    </button>
  );
};

export default ThemeSwitcher;
