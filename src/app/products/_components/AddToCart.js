"use client";

import useCartStore from "@/stores/cartStore";
import { toast } from "react-toastify";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartStore.getState();

  function addProductToCart() {
    addToCart(product);

    toast.info(`${product.name} added to cart.`);
  }

  return (
    <button
      onClick={addProductToCart}
      className="bg-primary w-full px-5 py-2 text-white rounded-xl"
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
