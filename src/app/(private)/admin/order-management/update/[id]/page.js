"use client";

import { getOrderById, updateOrderStatus } from "@/api/private/orders";
import Spinner from "@/components/Spinner";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const UpdateOrderPage = () => {
  const [order, setOrder] = useState();

  const params = useParams();

  useEffect(() => {
    getOrderById(params.id)
      .then((order) => {
        setOrder(order);
      })
      .catch((error) => {
        console.error("Error fetching order:", error);
      });
  }, []);

  if (!order) {
    return <Spinner />;
  }

  return (
    <form
      className="max-w-sm mx-auto space-y-5"
      onSubmit={(e) => {
        e.preventDefault();

        updateOrderStatus(order._id, { status: order.status })
          .then(() => {
            toast.success("Order updated successfully");
          })
          .catch((error) => {
            toast.error(error.response.data?.message);
            console.error("Error updating order:", error);
          });
      }}
    >
      <label
        htmlFor="order"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select an option
      </label>
      <select
        id="order"
        name="order"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        defaultValue={order?.status}
        onChange={(e) => {
          setOrder({ ...order, status: e.target.value });
        }}
      >
        <option value="PENDING">Pending</option>
        <option value="CONFIRMED">Confirmed</option>
        <option value="CANCELLED">Cancelled</option>
        <option value="SHIPPED">Shipped</option>
        <option value="DELIVERED">Delivered</option>
      </select>
      <button className="text-white bg-primary hover:bg-primary/80 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
        Update Order
      </button>
    </form>
  );
};

export default UpdateOrderPage;
