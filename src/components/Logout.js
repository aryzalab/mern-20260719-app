import { logout } from "@/api/auth";
import { LOGIN_ROUTE } from "@/constants/routes";
import useAuthStore from "@/stores/authStore";
import { useRouter } from "next/navigation";
import React from "react";

const Logout = () => {
  const router = useRouter();

  const { logoutUser } = useAuthStore.getState();

  function signOut() {
    logoutUser(); // state
    logout(); // api

    router.push(LOGIN_ROUTE);
  }

  return (
    <button
      onClick={signOut}
      className="w-full rounded bg-red-500 text-white px-4 py-1"
    >
      Logout
    </button>
  );
};

export default Logout;
