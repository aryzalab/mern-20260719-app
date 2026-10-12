"use client";
import { forgotPassword, resetPassword } from "@/api/auth";
import Spinner from "@/components/Spinner";
import { LOGIN_ROUTE } from "@/constants/routes";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Password from "../_components/Password";

function ResetPasswordPage() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();

  const user = searchParams.get("user");
  const token = searchParams.get("token");

  function submitForm(data) {
    setLoading(true);

    resetPassword({
      password: data.password,
      user,
      token,
    })
      .then((res) => {
        toast.success("Password reset successful.");

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
        Reset Password
      </h2>
      <p className="text-red-500 text-sm py-2">
        {errors.confirmPassword?.message}
      </p>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
      >
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            New password
          </label>
          <Password id="password" {...register("password")} />
        </div>

        <div>
          <label
            htmlFor="confirm-password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm password
          </label>
          <Password
            id="confirm-password"
            {...register("confirmPassword", {
              validate: (value) => {
                return value == password || "Passwords donot match.";
              },
            })}
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary flex gap-2 justify-center"
        >
          Reset password
          {loading && <Spinner className="w-5 h-5 fill-primary" />}
        </button>
      </form>
    </div>
  );
}

export default ResetPasswordPage;
