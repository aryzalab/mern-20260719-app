import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
  return (
    <header className="sticky w-full z-20 top-0 inset-s-0 shadow">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="flex text-sm bg-neutral-primary rounded-full md:me-0 focus:ring-4 focus:ring-neutral-tertiary"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            P
          </button>
          {/* Dropdown menu */}
          <div
            className="z-50 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44"
            id="user-dropdown"
          >
            <div className="px-4 py-3 text-sm border-b border-default">
              <span className="block text-heading font-medium">
                Joseph McFall
              </span>
              <span className="block text-body truncate">
                name@flowbite.com
              </span>
            </div>
            <ul
              className="p-2 text-sm text-body font-medium"
              aria-labelledby="user-menu-button"
            >
              <li>
                <a
                  href="#"
                  className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={2}
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
