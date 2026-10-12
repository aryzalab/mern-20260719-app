"use client";
import { forgotPassword } from "@/api/auth";
import Spinner from "@/components/Spinner";
import { LOGIN_ROUTE } from "@/constants/routes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function ForgotPasswordPage() {
  const { register, handleSubmit, reset } = useForm();

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  function submitForm(data) {
    setLoading(true);
    forgotPassword(data)
      .then((res) => {
        toast.success("Reset password link sent to your email.");

        router.push(LOGIN_ROUTE);

        reset();
      })
      .catch((error) => {
        console.log(error);

        toast.error(error.response.data?.message);
      })
      .finally(() => setLoading(false));
  }

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
      <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Forgot Password
      </h2>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
      >
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com"
            required
            {...register("email")}
          />
        </div>

        <button
          type="submit"
          className="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary flex gap-2 justify-center"
        >
          Send code
          {loading && <Spinner className="w-5 h-5 fill-primary" />}
        </button>
      </form>
      <div className="pt-4 flex items-center gap-2 text-sm font-light text-gray-500 dark:text-gray-300">
        Go back to
        <Link
          className="font-medium text-primary hover:underline dark:text-primary-500"
          href={LOGIN_ROUTE}
        >
          Login page
        </Link>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
