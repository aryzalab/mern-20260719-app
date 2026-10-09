import Logo from "@/components/Logo";
import Logout from "@/components/Logout";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import adminMenu from "@/constants/adminMenu";
import { ACCOUNT_ROUTE } from "@/constants/routes";
import Link from "next/link";
import { FaUserCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <div className="pl-2.5 mb-5">
          <Logo />
        </div>
        <ul className="space-y-2 font-medium">
          {adminMenu.map((item) => (
            <li key={item.label}>
              <Link
                href={item.route}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <item.Icon className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="mt-2 pt-2 border-t border-gray-200 space-y-2 font-medium">
          <Link
            href={ACCOUNT_ROUTE}
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <FaUserCog className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="ms-3">Account Settings</span>
          </Link>
          <ThemeSwitcher>
            <span className="ms-3">Toggle Theme</span>
          </ThemeSwitcher>
          <Logout />
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
