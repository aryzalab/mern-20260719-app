import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const usePreferenceStore = create(
  devtools(
    persist(
      (set, get) => ({
        theme: "light",
        language: "en",
        toggleTheme: () => {
          const theme = get().theme;

          set({ theme: theme == "light" ? "dark" : "light" });
        },
        changeLanguage: (language) => {
          set({ language });
        },
      }),
      {
        name: "zustand:preference-storage",
      },
    ),
  ),
);

export default usePreferenceStore;
