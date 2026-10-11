import { updateAuthUserPassword } from "@/api/private/users";
import Password from "@/app/(auth)/_components/Password";
import Spinner from "@/components/Spinner";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdatePassword = () => {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm();

  function submitForm(data) {
    setLoading(true);

    updateAuthUserPassword(data)
      .then(() => {
        toast.success("Password update successful.");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error?.response.data?.message);
      })
      .finally(() => setLoading(false));
  }

  return (
    <form className="w-full" onSubmit={handleSubmit(submitForm)}>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="current-password"
            className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50"
          >
            Current Password
          </label>
          <Password id="current-password" {...register("currentPassword")} />
        </div>
        <div>
          <label
            htmlFor="new-password"
            className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50"
          >
            New Password
          </label>
          <Password id="new-password" {...register("newPassword")} />
        </div>
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="flex items-center justify-center py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-primary bg-primary hover:bg-primary transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full mb-4"
        >
          Update Password
          {loading && <Spinner className="ml-2 w-5 h-5 fill-primary" />}
        </button>
      </div>
    </form>
  );
};

export default UpdatePassword;
