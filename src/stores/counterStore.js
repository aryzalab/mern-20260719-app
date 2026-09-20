import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useCounterStore = create(
  devtools((set) => ({
    count: 1,
    name: "ram",
    increaseCount: () =>
      set((state) => ({ count: state.count + 1 }), false, "increment"),
    decreaseCount: () =>
      set(
        (state) => ({ count: state.count <= 1 ? 1 : state.count - 1 }),
        false,
        "decrement",
      ),
    resetCount: () => set(() => ({ count: 1 }), false, "reset"),
  })),
);

export default useCounterStore;
