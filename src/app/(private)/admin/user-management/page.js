"use client";

import { getAllUsers } from "@/api/private/users";
import { UPDATE_USER_ROUTE } from "@/constants/routes";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCog } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

const UserMangementPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers()
      .then((users) => {
        setUsers(users);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-3">
              User
            </th>
            <th scope="col" className="px-4 py-3">
              Email
            </th>
            <th scope="col" className="px-4 py-3">
              Phone
            </th>
            <th scope="col" className="px-4 py-3">
              Address
            </th>
            <th scope="col" className="px-4 py-3">
              Roles
            </th>
            <th scope="col" className="px-4 py-3">
              Created At
            </th>
            <th scope="col" className="px-4 py-3">
              <FaCog className="w-4 h-4" />
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user._id}
              className="border-b border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <th
                scope="row"
                className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex flex-col space-y-2 overflow-hidden">
                  <div className="flex items-center space-x-2">
                    <Image
                      src={
                        user?.profileImageUrl ??
                        "/assets/images/placeholder.png"
                      }
                      alt={user.name}
                      className="w-8 h-8 mr-3 object-cover rounded-full"
                      height={64}
                      width={64}
                    />
                    {user.name}
                  </div>
                </div>
              </th>
              <td className="px-4 py-2 text-xs">{user.email}</td>
              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.phone}
              </td>
              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.address.city},{user.address.province}
              </td>
              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.roles.join(", ")}
              </td>
              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {format(user.createdAt, "MMM dd, yyyy")}
              </td>
              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <Link
                  href={`${UPDATE_USER_ROUTE}/${user._id}`}
                  className="inline-block text-blue-600 bg-blue-100 p-2 rounded-lg hover:bg-blue-200 cursor-pointer"
                >
                  <FaPencil />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserMangementPage;
