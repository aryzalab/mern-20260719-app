"use client";

import { getAllOrders, getOrdersByMerchant } from "@/api/private/orders";
import { ROLE_ADMIN } from "@/constants/userRoles";
import useAuthStore from "@/stores/authStore";
import React, { useEffect, useState } from "react";
import OrdersTable from "./_components/Table";

const OrderManagementPage = () => {
  const [orders, setOrders] = useState([]);

  const user = useAuthStore((state) => state.user);

  function getOrders() {
    if (user?.roles.includes(ROLE_ADMIN)) {
      return getAllOrders();
    } else {
      return getOrdersByMerchant();
    }
  }

  useEffect(() => {
    getOrders()
      .then((orders) => {
        setOrders(orders);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  return (
    <div>
      <OrdersTable orders={orders} />
    </div>
  );
};

export default OrderManagementPage;
