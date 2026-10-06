"use client";
import { createOrder } from "@/api/private/orders";
import Spinner from "@/components/Spinner";
import {
  DELIVERY_CHARGE,
  DISCOUNT_PERCENT,
  TAX_PERCENT,
} from "@/constants/order";
import { LOGIN_ROUTE, ORDERS_ROUTE } from "@/constants/routes";
import useAuthStore from "@/stores/authStore";
import useCartStore from "@/stores/cartStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const Checkout = () => {
  const [loading, setLoading] = useState(false);

  const products = useCartStore((state) => state.products);
  const totalPrice = useCartStore((state) => state.totalPrice);

  const isAuth = useAuthStore((state) => state.isAuth);

  const { clearCart } = useCartStore.getState();

  const router = useRouter();

  function checkout() {
    if (!isAuth) {
      toast.info("Please login to place an order.");

      return router.push(LOGIN_ROUTE);
    }

    setLoading(true);

    const data = {
      totalPrice:
        totalPrice -
        totalPrice * DISCOUNT_PERCENT +
        Math.ceil(totalPrice * TAX_PERCENT) +
        DELIVERY_CHARGE,
      orderItems: products.map((item) => ({
        product: item._id,
        quantity: item.quantity,
      })),
    };

    createOrder(data)
      .then((res) => {
        router.push(ORDERS_ROUTE);

        toast.success("Order created successfully");

        clearCart();
      })
      .catch((error) => {
        toast.error(error.response.data?.message);
      })
      .finally(() => setLoading(false));
  }

  return (
    <button
      onClick={checkout}
      className="flex gap-2 w-full items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary dark:focus:ring-primary-800"
    >
      Proceed to Checkout
      {loading && <Spinner className="h-6 w-6 fill-primary" />}
    </button>
  );
};

export default Checkout;
