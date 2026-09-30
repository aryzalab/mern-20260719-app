"use client";

import { login } from "@/api/auth";
import { FORGOT_PASSWORD_ROUTE, REGISTER_ROUTE } from "@/constants/routes";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Password from "../_components/Password";
import { useState } from "react";
import Spinner from "@/components/Spinner";
import useAuthStore from "@/stores/authStore";

function LoginPage() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const { loginUser } = useAuthStore.getState();

  function submitForm(data) {
    setLoading(true);

    login(data)
      .then((res) => {
        loginUser({ user: res.data });

        toast.success("Login successful.");
      })
      .catch((error) => {
        toast.error(error?.response.data?.message);
      })
      .finally(() => setLoading(false));
  }

  return (
    <div className="border border-slate-300 rounded-lg p-6 max-w-md mx-auto shadow-sm md:p-8 lg:mx-0 dark:border-neutral-700">
      <div className="mb-8">
        <h1 className="text-slate-900 text-3xl font-bold mb-4 dark:text-slate-50">
          Sign in
        </h1>
        <p className="text-slate-600 text-base leading-relaxed dark:text-slate-400">
          Sign in to your account to access your dashboard and manage your
          projects.
        </p>
      </div>
      <form className="space-y-6" onSubmit={handleSubmit(submitForm)}>
        <div>
          <label
            htmlFor="email"
            className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="john@readymadeui.com"
            required
            className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-primary dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"
            {...register("email")}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50"
          >
            Password
          </label>
          <Password {...register("password")} />
        </div>
        <div className="flex items-start flex-wrap gap-2">
          <label className="flex items-center group has-[input:checked]:text-slate-900">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              className="sr-only"
            />
            {/* Custom box */}
            <span
              className="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-slate-300 dark:outline-neutral-700
                           bg-white dark:bg-neutral-800
                           group-has-[input:checked]:bg-primary
                           group-has-[input:checked]:outline-primary
                           group-focus-within:outline-2
                           group-focus-within:outline-primary"
              aria-hidden="true"
            >
              {/* Checkmark */}
              <svg
                className="size-3 text-white opacity-0 group-has-[input:checked]:opacity-100"
                viewBox="0 0 12 10"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M1 5l3 3 7-7" />
              </svg>
            </span>
            <span className="ml-3 text-sm text-slate-700 dark:text-slate-300">
              Remember me
            </span>
          </label>
          <Link
            href={FORGOT_PASSWORD_ROUTE}
            className="ml-auto text-sm font-medium text-primary dark:text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            Forgot password?
          </Link>
        </div>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 w-full py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-primary bg-primary hover:bg-primary/90 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
        >
          Sign in
          {loading && <Spinner className="w-5 h-5 fill-primary" />}
        </button>
        <div className="text-slate-900 text-sm text-center dark:text-slate-50">
          Don't have an account?{" "}
          <Link
            href={REGISTER_ROUTE}
            className="text-primary hover:underline ml-1 font-medium dark:text-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
