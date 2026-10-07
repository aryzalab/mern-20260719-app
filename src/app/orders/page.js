"use client";

import { getOrdersByUser } from "@/api/private/orders";
import { format } from "date-fns";
import Image from "next/image";
import { useEffect, useState } from "react";
import OrderStatus from "./_components/OrderStatus";
import OrderActions from "./_components/OrderActions";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrdersByUser()
      .then((data) => setOrders(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="bg-gray-50 px-4 py-8 md:px-8 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-6">
          <div className="max-w-3xl">
            <h1 className="text-slate-900 text-2xl font-bold mb-4 dark:text-slate-50">
              Order History
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              View and manage your past orders
            </p>
          </div>
        </div>
        {/* filters */}
        <div className="flex flex-wrap items-center gap-8 mt-12">
          <div
            className="flex flex-wrap items-center gap-3"
            role="group"
            aria-label="Filter orders"
          >
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Filter by:
            </span>
            <button
              aria-pressed="true"
              className="px-3.5 py-2 text-white text-sm font-medium rounded-md bg-blue-600 border border-blue-600 transition-colors cursor-pointer hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              All Orders
            </button>
            <button className="px-3.5 py-2 text-slate-900 text-sm font-medium rounded-md bg-white border border-slate-300 transition-colors cursor-pointer hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-50 dark:bg-gray-800 dark:hover:bg-neutral-700 dark:border-neutral-700">
              Pending
            </button>
            <button className="px-3.5 py-2 text-slate-900 text-sm font-medium rounded-md bg-white border border-slate-300 transition-colors cursor-pointer hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-50 dark:bg-gray-800 dark:hover:bg-neutral-700 dark:border-neutral-700">
              Confirmed
            </button>
            <button className="px-3.5 py-2 text-slate-900 text-sm font-medium rounded-md bg-white border border-slate-300 transition-colors cursor-pointer hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-50 dark:bg-gray-800 dark:hover:bg-neutral-700 dark:border-neutral-700">
              Shipped
            </button>
            <button className="px-3.5 py-2 text-slate-900 text-sm font-medium rounded-md bg-white border border-slate-300 transition-colors cursor-pointer hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-50 dark:bg-gray-800 dark:hover:bg-neutral-700 dark:border-neutral-700">
              Delivered
            </button>
            <button className="px-3.5 py-2 text-slate-900 text-sm font-medium rounded-md bg-white border border-slate-300 transition-colors cursor-pointer hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-50 dark:bg-gray-800 dark:hover:bg-neutral-700 dark:border-neutral-700">
              Cancelled
            </button>
          </div>
        </div>
        <ul className="space-y-6 mt-6">
          {orders.map((order) => (
            <li
              key={order._id}
              className="bg-white rounded-lg border border-slate-300 overflow-hidden p-6 dark:bg-gray-800 dark:border-neutral-700"
            >
              <div className="flex flex-wrap justify-between gap-6">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-4">
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                      Order #{order.orderNumber}
                    </h3>
                    <OrderStatus status={order.status} />
                  </div>
                  <p className="text-slate-600 text-sm mt-3 dark:text-slate-400">
                    Placed on {format(order.createdAt, "MMM dd, yyyy hh:mmaaa")}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                    Rs. {order.totalPrice}
                  </p>
                  <p className="text-slate-600 text-sm mt-3 dark:text-slate-400">
                    {order.orderItems?.length} items
                  </p>
                </div>
              </div>
              <hr className="border-slate-300 my-6 dark:border-neutral-700" />
              <ul className="flex flex-wrap items-center gap-8">
                {order.orderItems.map((item) => (
                  <li key={item._id} className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 p-1 rounded-md overflow-hidden">
                      <Image
                        src={
                          item.product?.imageUrls[0] ??
                          "/assets/images/placeholder.png"
                        }
                        alt={item.product?.name ?? "img"}
                        className="w-full h-full object-contain"
                        height={64}
                        width={64}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-slate-50">
                        {item.product?.name}
                      </p>
                      <p className="text-xs text-slate-600 mt-1.5 dark:text-slate-400">
                        Qty: {item.quantity}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <OrderActions id={order._id} status={order.status} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OrdersPage;
