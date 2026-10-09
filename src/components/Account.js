import { logout } from "@/api/auth";
import {
  ACCOUNT_ROUTE,
  DASHBOARD_ROUTE,
  LOGIN_ROUTE,
  ORDERS_ROUTE,
} from "@/constants/routes";
import useAuthStore from "@/stores/authStore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Logout from "./Logout";

const Account = () => {
  const [isOpen, setIsOpen] = useState(false);

  const popoverRef = useRef(null);

  const user = useAuthStore((state) => state.user);

  function handleClickOutside(event) {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div className="relative" ref={popoverRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2"
      >
        <Image
          src="/assets/images/placeholder.png"
          alt={user.name}
          height={64}
          width={64}
          className="rounded-full h-10 w-10 object-cover border-2 border-gray-500"
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg py-4 px-3 z-10 space-y-2">
          <h4>Hi {user?.name}!</h4>
          <Link
            href={DASHBOARD_ROUTE}
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800 rounded"
          >
            Dashboard
          </Link>
          <Link
            href={ACCOUNT_ROUTE}
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800 rounded"
          >
            Account Settings
          </Link>
          <Link
            href={ORDERS_ROUTE}
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800 rounded"
          >
            My Orders
          </Link>
          <Logout />
        </div>
      )}
    </div>
  );
};

export default Account;
