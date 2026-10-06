import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const usePreferenceStore = create(
  devtools(
    persist(
      (set, get) => ({
        theme: "light",
        toggleTheme: () => {
          const theme = get().theme;

          set({ theme: theme == "light" ? "dark" : "light" });
        },
      }),
      {
        name: "zustand:preference-storage",
      },
    ),
  ),
);

export default usePreferenceStore;
