import { updateAuthUser } from "@/api/private/users";
import Spinner from "@/components/Spinner";
import useAuthStore from "@/stores/authStore";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const [loading, setLoading] = useState(false);

  const user = useAuthStore((state) => state.user);
  const { setUser } = useAuthStore.getState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      ...user,
      city: user.address.city,
      province: user.address.province,
    },
  });

  function submitForm(data) {
    setLoading(true);

    updateAuthUser({
      ...data,
      address: { city: data.city, province: data.province },
    })
      .then((res) => {
        delete res.data.password;

        setUser({ user: res.data });

        toast.success("Update successful.");
      })
      .catch((error) => {
        console.log(error);
        // toast.error(error?.response.data?.message);
      })
      .finally(() => setLoading(false));
  }

  return (
    <form className="w-full" onSubmit={handleSubmit(submitForm)}>
      {errors.password && (
        <p className="bg-red-100 border-red-700 border rounded px-4 py-1 text-xs text-red-700 mt-4">
          {errors.password?.message}
        </p>
      )}
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
            className="px-3 py-2.5 text-sm rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-primary dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700 text-gray-500"
            {...register("email")}
            disabled
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
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="flex items-center justify-center py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-primary bg-primary hover:bg-primary transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full mb-4"
        >
          Update Profile
          {loading && <Spinner className="ml-2 w-5 h-5 fill-primary" />}
        </button>
      </div>
    </form>
  );
};

export default UpdateProfile;
