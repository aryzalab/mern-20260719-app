import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useFilterStore = create(
  devtools(
    (set, get) => ({
      showFilter: false,
      filter: {
        limit: 10,
        sort: JSON.stringify({ createdAt: -1 }),
      },
      setFilter: (filter) => set({ filter, showFilter: false }),
      toggleFilter: (value) => {
        set({
          showFilter: value,
        });
      },
    }),
    {
      name: "zustand:filter-storage",
    },
  ),
);

export default useFilterStore;
