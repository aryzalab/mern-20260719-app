"use client";

import { confirmOrder } from "@/api/private/orders";
import Spinner from "@/components/Spinner";
import { ORDERS_ROUTE } from "@/constants/routes";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

const OrderConfirm = () => {
  const searchParams = useSearchParams();

  const params = useParams();

  const status = searchParams.get("status");

  const router = useRouter();

  useEffect(() => {
    if (status == "Completed") {
      toast.success("Order confirmed");
    }

    confirmOrder(params.id, {
      status: status == "Completed" ? "SUCCESS" : status,
    })
      .then(() => {
        router.replace(ORDERS_ROUTE);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex  justify-center items-center gap-2 text-center py-24">
      <Spinner />
      Order confirmation pending...
    </div>
  );
};

export default OrderConfirm;
