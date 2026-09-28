"use client";

import { HOME_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";

function Logo() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(HOME_ROUTE)}
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
        Electro<span className="text-primary">Shop</span>
      </span>
    </button>
  );
}

export default Logo;
