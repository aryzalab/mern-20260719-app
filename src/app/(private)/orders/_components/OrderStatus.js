import React from "react";

const OrderStatus = ({ status }) => {
  if (status == "PENDING")
    return (
      <span className="px-2.5 py-1.5 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-md dark:bg-yellow-900/20 dark:text-yellow-500">
        {status}
      </span>
    );

  if (status == "CONFIRMED")
    return (
      <span className="px-2.5 py-1.5 bg-blue-100 text-blue-700 text-xs font-medium rounded-md dark:bg-blue-900/20 dark:text-blue-500">
        {status}
      </span>
    );

  if (status == "SHIPPED")
    return (
      <span className="px-2.5 py-1.5 bg-violet-100 text-violet-700 text-xs font-medium rounded-md dark:bg-violet-900/20 dark:text-violet-500">
        {status}
      </span>
    );

  if (status == "DELIVERED")
    return (
      <span className="px-2.5 py-1.5 bg-green-100 text-green-700 text-xs font-medium rounded-md dark:bg-green-900/20 dark:text-green-500">
        {status}
      </span>
    );

  // cancelled
  return (
    <span className="px-2.5 py-1.5 bg-red-100 text-red-700 text-xs font-medium rounded-md dark:bg-red-900/20 dark:text-red-500">
      {status}
    </span>
  );
};

export default OrderStatus;
