import { format } from "date-fns";
import Image from "next/image";
import React from "react";
import { FaCog } from "react-icons/fa";
import { FaPencil, FaTrash } from "react-icons/fa6";
import DeleteButton from "./DeleteButton";
import Link from "next/link";
import { UPDATE_PRODUCT_ROUTE } from "@/constants/routes";

const ProductsTable = ({ products }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-3">
              Product
            </th>
            <th scope="col" className="px-4 py-3">
              Category
            </th>
            <th scope="col" className="px-4 py-3">
              Brand
            </th>
            <th scope="col" className="px-4 py-3">
              Price
            </th>
            <th scope="col" className="px-4 py-3">
              Stock
            </th>
            <th scope="col" className="px-4 py-3">
              Created At
            </th>
            <th scope="col" className="px-4 py-3">
              <div className="flex justify-center">
                <FaCog />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product._id}
              className="border-b border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <th
                scope="row"
                className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <Image
                  src={
                    product.imageUrls.length > 0
                      ? product.imageUrls[0]
                      : "/assets/images/placeholder.png"
                  }
                  alt={product.name}
                  className="w-8 h-8 mr-3 object-cover"
                  height={64}
                  width={64}
                />
                {product.name}
              </th>
              <td className="px-4 py-2">
                <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-0.5 rounded dark:bg-primary dark:text-white">
                  {product.category}
                </span>
              </td>
              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product.brand}
              </td>
              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Rs. {product.price}
              </td>
              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <div className="flex items-center">
                  <div
                    className={`inline-block w-4 h-4 mr-2 ${product.stock < 10 ? "bg-red-600" : product.stock < 20 ? "bg-yellow-500" : "bg-green-700"} rounded-full`}
                  />
                  {product.stock}
                </div>
              </td>
              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {format(product.createdAt, "MMM dd, yyyy")}
              </td>
              <td className="px-4 py-2 font-medium text-gray-900 dark:text-white flex gap-2">
                <Link
                  href={`${UPDATE_PRODUCT_ROUTE}/${product._id}`}
                  className="text-blue-600 bg-blue-100 p-2 rounded-lg hover:bg-blue-200 cursor-pointer"
                >
                  <FaPencil />
                </Link>
                <DeleteButton id={product._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
