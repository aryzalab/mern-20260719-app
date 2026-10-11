import { updateProfileImage } from "@/api/private/users";
import Spinner from "@/components/Spinner";
import useAuthStore from "@/stores/authStore";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

const UpdateImage = () => {
  const user = useAuthStore((state) => state.user);
  const { setUser } = useAuthStore.getState();

  const [image, setImage] = useState();
  const [localImageUrl, setLocalImageUrl] = useState(user?.profileImageUrl);
  const [loading, setLoading] = useState(false);

  function submitForm(e) {
    e.preventDefault();

    setLoading(true);

    if (!image) return;

    const data = new FormData();

    data.append("image", image);

    updateProfileImage(data)
      .then((res) => {
        setUser({ user: res.data });
        toast.success("Image update successful.");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }

  return (
    <form onSubmit={submitForm}>
      <div className="py-5">
        <Image
          src={localImageUrl ?? "/assets/images/placeholder.png"}
          alt="image"
          height={200}
          width={200}
          className="h-20 w-20 rounded-full object-cover border-2 border-gray-300"
        />
      </div>
      <input
        className="p-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        type="file"
        accept=".png,.jpg,.jpeg,.webp"
        onChange={(event) => {
          const file = event.target.files[0];

          setImage(file);
          setLocalImageUrl(URL.createObjectURL(file));
        }}
      />
      <div className="mt-6">
        <button
          type="submit"
          className="flex items-center justify-center py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-primary bg-primary hover:bg-primary transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full mb-4"
        >
          Update Image
          {loading && <Spinner className="ml-2 w-5 h-5 fill-primary" />}
        </button>
      </div>
    </form>
  );
};

export default UpdateImage;
