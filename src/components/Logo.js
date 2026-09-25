'use client'

import { HOME_ROUTE } from "@/constants/routes";
import { useParams, useRouter, useSearchParams } from "next/navigation";

function Logo() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  console.log(params.id)
  console.log(searchParams.get("limit"))
  console.log(searchParams.get("q"))

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
