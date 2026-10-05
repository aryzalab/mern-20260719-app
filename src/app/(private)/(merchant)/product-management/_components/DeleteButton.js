"use client";

import { deleteProduct } from "@/api/private/products";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa6";
import { toast } from "react-toastify";

const DeleteButton = ({ id }) => {
  const router = useRouter();

  function removeProduct() {
    if (confirm("Are you sure you want to delete this product?")) {
      deleteProduct(id)
        .then(() => {
          toast.success("Product deleted successfully.");

          router.refresh();
        })
        .catch((error) => {
          console.log(error);

          toast.error(error.response.data?.message);
        });
    }
  }

  return (
    <button
      onClick={removeProduct}
      className="text-red-600 bg-red-100 p-2 rounded-lg hover:bg-red-200 cursor-pointer"
    >
      <FaTrash />
    </button>
  );
};

export default DeleteButton;
