import useCartStore from "@/stores/cartStore";
import { IoClose } from "react-icons/io5";

const RemoveFromCart = ({ product }) => {
  const { removeFromCart } = useCartStore.getState();

  function removeProductFromCart() {
    if (confirm("Are you sure?")) {
      removeFromCart(product);
    }
  }

  return (
    <button
      type="button"
      onClick={removeProductFromCart}
      className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
    >
      <IoClose />
      Remove
    </button>
  );
};

export default RemoveFromCart;
