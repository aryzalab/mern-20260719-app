"use client";

import { signUp } from "@/api/auth";
import { HOME_ROUTE, LOGIN_ROUTE } from "@/constants/routes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Password from "../_components/Password";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  function submitForm(data) {
    signUp({ ...data, address: { city: data.city, province: data.province } })
      .then(() => {
        router.push(HOME_ROUTE);

        toast.success("Register successful.");
      })
      .catch((error) => {
        toast.error(error?.response.data?.message);
      });
  }

  return (
    <div className="border border-slate-300 rounded-lg p-6 max-w-4xl mx-auto shadow-sm md:p-8 lg:mx-0 dark:border-neutral-700">
      <div className="mb-12">
        <h1 className="text-slate-900 text-3xl font-bold mb-4 dark:text-slate-50">
          Sign up
        </h1>
        <p className="text-slate-600 text-base mt-6 dark:text-slate-400">
          Create your account and get started
        </p>
        {errors.password && (
          <p className="bg-red-100 border-red-700 border rounded px-4 py-1 text-xs text-red-700 mt-4">
            {errors.password?.message}
          </p>
        )}
      </div>
      <form className="w-full" onSubmit={handleSubmit(submitForm)}>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John"
              required
              className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-primary dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"
              {...register("name")}
            />
          </div>
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
              htmlFor="mobile"
              className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              placeholder="123-456-7890"
              required
              className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-primary dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"
              {...register("phone")}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50"
            >
              Password
            </label>
            <Password
              {...register("password", {
                minLength: {
                  value: 8,
                  message: "Password must be greater than 8.",
                },
              })}
            />
          </div>
          <div>
            <label
              htmlFor="city"
              className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50"
            >
              Address (City)
            </label>
            <input
              type="text"
              id="city"
              placeholder="for e.g. Biratnagar"
              required
              className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-primary dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"
              {...register("city")}
            />
          </div>
          <div>
            <label
              htmlFor="province"
              className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50"
            >
              Address (Province)
            </label>
            <input
              type="text"
              id="province"
              placeholder="for e.g. Koshi"
              required
              className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-primary dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"
              {...register("province")}
            />
          </div>
          <div className="flex items-start flex-wrap gap-2">
            <label className="flex items-center group has-[input:checked]:text-slate-900">
              <input
                id="tmc"
                name="tmc"
                type="checkbox"
                required
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
                I accept the
              </span>
            </label>
            <a
              href="#"
              className="ml-1 text-sm font-medium text-primary dark:text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            >
              Terms and Conditions
            </a>
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-primary bg-primary hover:bg-primary transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full mb-4"
          >
            Create an account
          </button>
          <div className="text-slate-900 text-sm text-center dark:text-slate-50">
            Already have an account?{" "}
            <Link
              href={LOGIN_ROUTE}
              className="text-primary hover:underline ml-1 font-medium dark:text-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            >
              Sign in
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
