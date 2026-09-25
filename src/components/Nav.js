"use client";

import navMenu from "@/constants/navMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Nav() {
  const pathname = usePathname();

  return (
    <nav className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
        {navMenu.map((navItem) => {
          const isActive = navItem.route == pathname;

          return (
            <li key={navItem.route}>
              <Link
                href={navItem.route}
                className={`${isActive ? "text-primary" : ""} block py-2 px-3 hover:underline md:p-0`}
              >
                {navItem.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
