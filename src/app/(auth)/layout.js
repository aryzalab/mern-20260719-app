"use client";

import { HOME_ROUTE } from "@/constants/routes";
import { ROLE_ADMIN } from "@/constants/userRoles";
import useAuthStore from "@/stores/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function AuthLayout({ children }) {
  const isAuth = useAuthStore((state) => state.isAuth);
  const user = useAuthStore((state) => state.user);

  const router = useRouter();

  useEffect(() => {
    if (isAuth) {
      if (user?.roles.includes(ROLE_ADMIN)) {
        router.push("/dashboard");
      } else {
        // redirect to homepage
        router.push(HOME_ROUTE);
      }
    }
  }, [isAuth]);

  if (isAuth) return;

  return (
    <section className="pt-16 flex flex-col items-center justify-center">
      <div className="py-4 px-4 container">
        <div className="grid items-center gap-6 w-full lg:grid-cols-2">
          {children}
          <div className="aspect-71/50 max-lg:w-4/5 mx-auto">
            <img
              src="https://readymadeui.com/images/integration-illus.webp"
              className="w-full object-cover"
              alt="login img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthLayout;
