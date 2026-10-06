"use client";

import usePreferenceStore from "@/stores/preferencesStore";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeSwitcher = () => {
  const { toggleTheme } = usePreferenceStore.getState();

  const theme = usePreferenceStore((state) => state.theme);

  return (
    <button onClick={toggleTheme}>
      {theme == "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeSwitcher;
