"use client";

import { LOGIN_ROUTE } from "@/constants/routes";
import useAuthStore from "@/stores/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PrivateLayout = ({ children }) => {
  const { isAuth } = useAuthStore.getState();

  const router = useRouter();

  useEffect(() => {
    if (!isAuth) {
      router.push(LOGIN_ROUTE);
    }
  }, []);

  if (!isAuth) return;

  return <div>{children}</div>;
};

export default PrivateLayout;
