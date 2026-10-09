"use client";

import { addProduct, updateProduct } from "@/api/private/products";
import Spinner from "@/components/Spinner";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUpload } from "react-icons/fa6";
import { toast } from "react-toastify";

const ProductForm = ({ isEditing = false, product = null }) => {
  const { register, handleSubmit, reset } = useForm({
    values: product,
  });

  const [loading, setLoading] = useState(false);

  const [productImages, setProductImages] = useState([]);
  const [localImageUrls, setLocalImageUrls] = useState([]);
  const router = useRouter();

  async function upsertProduct(data) {
    if (isEditing) {
      await updateProduct(product._id, data).then(() => {
        toast.success("Product updated successfully.");
      });
    } else {
      await addProduct(data).then(() => {
        toast.success("Product added successfully.");
      });
    }
  }

  function submitForm(input) {
    setLoading(true);

    const data = new FormData();

    data.append("name", input.name);
    data.append("brand", input.brand);
    data.append("category", input.category);
    data.append("price", input.price);
    data.append("stock", input.stock);
    data.append("description", input.description);

    if (productImages.length > 0) {
      productImages.map((image) => {
        data.append("images", image);
      });
    }

    upsertProduct(data)
      .then((res) => {
        reset();

        router.back();
        router.refresh();

        setProductImages([]);
        setLocalImageUrls([]);
      })
      .catch((error) => {
        toast.error(error.response.data?.message);
      })
      .finally(() => setLoading(false));
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type product name"
              required
              {...register("name")}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="brand"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Brand
            </label>
            <input
              type="text"
              id="brand"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Product brand"
              required
              {...register("brand")}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Rs. 2999"
              required
              {...register("price")}
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Product category"
              required
              {...register("category")}
            />
          </div>
          <div>
            <label
              htmlFor="stock"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Stock
            </label>
            <input
              type="number"
              id="stock"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder={1}
              defaultValue={1}
              required
              {...register("stock")}
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="images"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Images
            </label>

            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 bg-gray-50 border border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100"
              >
                <div className="flex flex-col items-center justify-center text-body pt-5 pb-6">
                  <FaUpload className="text-2xl" />
                  <p className="mb-2 text-sm">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs">JPG, PNG, WEBP</p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  accept=".jpg,.jpeg,.png,.webp"
                  multiple
                  onChange={(event) => {
                    const files = [];
                    const urls = [];

                    Array.from(event.target.files).map((file) => {
                      files.push(file);
                      urls.push(URL.createObjectURL(file));
                    });

                    setProductImages(files);
                    setLocalImageUrls(urls);
                  }}
                />
              </label>
            </div>
            <div className="flex gap-2 m-4">
              {localImageUrls.map((url) => (
                <Image key={url} src={url} height={64} width={64} alt="adsf" />
              ))}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              id="description"
              rows={8}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Your description here"
              defaultValue={""}
              {...register("description")}
            />
          </div>
        </div>
        <button
          type="submit"
          className="inline-flex gap-2 items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
        >
          {isEditing ? "Update product" : "Add product"}
          {loading && <Spinner className="w-6 h-6 fill-primary" />}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
