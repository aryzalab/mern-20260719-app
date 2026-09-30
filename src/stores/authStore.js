import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useAuthStore = create(
  devtools(
    persist(
      (set) => ({
        user: null,
        isAuth: false,
        loginUser: ({ user }) => set({ user, isAuth: true }),
        registerUser: ({ user }) => set({ user, isAuth: true }),
        logoutUser: () => set({ user: null, isAuth: false }),
      }),
      {
        name: "zustand:auth-storage",
      },
    ),
  ),
);

export default useAuthStore;
