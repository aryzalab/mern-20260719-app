"use client";

import { CART_ROUTE } from "@/constants/routes";
import useCartStore from "@/stores/cartStore";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const CartButton = () => {
  const products = useCartStore((state) => state.products);

  return (
    <Link href={CART_ROUTE} className="p-2 relative">
      <FaShoppingCart />
      <span className="absolute bottom-0 right-0 text-[8px] bg-red-600 rounded-full text-white px-1.5 py-0.5">
        {products.length}
      </span>
    </Link>
  );
};

export default CartButton;
