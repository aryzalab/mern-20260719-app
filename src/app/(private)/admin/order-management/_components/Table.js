import OrderStatus from "@/app/(private)/orders/_components/OrderStatus";
import { UPDATE_ORDER_ROUTE, UPDATE_PRODUCT_ROUTE } from "@/constants/routes";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCog } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

const OrdersTable = ({ orders }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-3">
              Order Number
            </th>
            <th scope="col" className="px-4 py-3">
              Products
            </th>
            <th scope="col" className="px-4 py-3">
              User
            </th>
            <th scope="col" className="px-4 py-3">
              Total Price
            </th>
            <th scope="col" className="px-4 py-3">
              Status
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
          {orders.map((order) => (
            <tr
              key={order._id}
              className="border-b border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <td className="px-4 py-2 text-xs">#{order.orderNumber}</td>
              <th
                scope="row"
                className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex flex-col space-y-2 overflow-hidden">
                  {order.orderItems.map((item) => (
                    <div key={item._id} className="flex items-center space-x-2">
                      <Image
                        src={
                          item.imageUrls.length > 0
                            ? item.imageUrls[0]
                            : "/assets/images/placeholder.png"
                        }
                        alt={item.name}
                        className="w-8 h-8 mr-3 object-cover"
                        height={64}
                        width={64}
                      />
                      {item.name}
                    </div>
                  ))}
                </div>
              </th>
              <td className="px-4 py-2 text-xs">
                <strong>{order.user.name}</strong>
                <br />
                {order.user.email}
                <br />
                {order.user.phone}
              </td>
              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Rs. {order.totalPrice}
              </td>
              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <OrderStatus status={order.status} />
              </td>
              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {format(order.createdAt, "MMM dd, yyyy")}
              </td>
              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <Link
                  href={`${UPDATE_ORDER_ROUTE}/${order._id}`}
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

export default OrdersTable;
