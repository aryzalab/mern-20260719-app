"use client";

import { getUserById, updateUser } from "@/api/private/users";
import {
  ROLE_ADMIN,
  ROLE_CUSTOMER,
  ROLE_MERCHANT,
} from "@/constants/userRoles";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const UpdateUserPage = () => {
  const params = useParams();

  const id = params.id;

  const [user, setUser] = useState();
  const [roles, setRoles] = useState([]);

  function setUserRoles(role) {
    setRoles((prev) => {
      return prev.includes(role)
        ? prev.filter((item) => item != role)
        : [...prev, role];
    });
  }

  function submitForm(e) {
    e.preventDefault();

    const userRoles = roles.length == 0 ? [ROLE_CUSTOMER] : roles;

    updateUser(id, userRoles)
      .then(() => {
        toast.success("User updated successfully.");
      })
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    getUserById(id)
      .then((user) => {
        setUser(user);
        setRoles(user.roles);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!user) return;

  return (
    <section>
      <div className="max-w-2xl p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Update user
        </h1>
        <form
          onSubmit={submitForm}
          className="space-y-4 md:space-y-6"
          action="#"
        >
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:text-gray-500"
              placeholder="John doe"
              disabled
              value={user.name}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  disabled:text-gray-500"
              placeholder="name@company.com"
              disabled
              value={user.email}
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone
            </label>
            <input
              type="phone"
              name="phone"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  disabled:text-gray-500"
              placeholder="9786754"
              disabled
              value={user.phone}
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Address
            </label>
            <input
              type="address"
              name="address"
              id="address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  disabled:text-gray-500"
              value={user.address.city}
              disabled
            />
          </div>
          <div>
            <label
              htmlFor="roles"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Roles
            </label>
            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="role-customer"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    defaultChecked={roles.includes(ROLE_CUSTOMER)}
                    defaultValue={ROLE_CUSTOMER}
                    onChange={(e) => setUserRoles(e.target.value)}
                  />
                  <label
                    htmlFor="role-customer"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    CUSTOMER
                  </label>
                </div>
              </li>
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="role-merchant"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    defaultChecked={roles.includes(ROLE_MERCHANT)}
                    defaultValue={ROLE_MERCHANT}
                    onChange={(e) => setUserRoles(e.target.value)}
                  />
                  <label
                    htmlFor="role-merchant"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    MERCHANT
                  </label>
                </div>
              </li>
              <li className="w-full dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="admin"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    defaultChecked={roles.includes(ROLE_ADMIN)}
                    defaultValue={ROLE_ADMIN}
                    onChange={(e) => setUserRoles(e.target.value)}
                  />
                  <label
                    htmlFor="admin"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    ADMIN
                  </label>
                </div>
              </li>
            </ul>
          </div>

          <button
            type="submit"
            className="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default UpdateUserPage;
