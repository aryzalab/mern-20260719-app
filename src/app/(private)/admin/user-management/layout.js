"use client";

import { DASHBOARD_ROUTE, HOME_ROUTE } from "@/constants/routes";
import { ROLE_ADMIN } from "@/constants/userRoles";
import useAuthStore from "@/stores/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const UserManagementLayout = ({ children }) => {
  const { user } = useAuthStore.getState();

  const router = useRouter();

  useEffect(() => {
    if (!user?.roles.includes(ROLE_ADMIN)) {
      router.push(DASHBOARD_ROUTE);
    }
  }, []);

  if (user == null) return;

  return <div>{children}</div>;
};

export default UserManagementLayout;
