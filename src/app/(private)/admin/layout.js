"use client";

import { HOME_ROUTE } from "@/constants/routes";
import { ROLE_ADMIN, ROLE_MERCHANT } from "@/constants/userRoles";
import useAuthStore from "@/stores/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Sidebar from "./_components/Sidebar";

const AdminLayout = ({ children }) => {
  const { user } = useAuthStore.getState();

  const router = useRouter();

  useEffect(() => {
    if (
      !user?.roles.includes(ROLE_ADMIN) &&
      !user?.roles.includes(ROLE_MERCHANT)
    ) {
      router.push(HOME_ROUTE);
    }
  }, []);

  if (user == null) return;

  return (
    <div>
      <Sidebar />
      <div className="px-4 py-3 sm:py-5 sm:ml-64 bg-white dark:bg-gray-900">{children}</div>
    </div>
  );
};

export default AdminLayout;
