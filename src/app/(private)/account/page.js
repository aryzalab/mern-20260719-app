"use client";

import UpdateImage from "./_components/UpdateImage";
import UpdatePassword from "./_components/UpdatePassword";
import UpdateProfile from "./_components/UpdateProfile";

const AccountPage = () => {
  return (
    <section className="container mx-auto px-4 py-24  max-w-4xl">
      <div className="border border-slate-300 rounded-lg p-6 mx-auto shadow-sm md:p-8 lg:mx-0 dark:border-neutral-700">
        <h1 className="text-slate-900 text-3xl font-bold mb-4 dark:text-slate-50">
          Account Settings
        </h1>

        <UpdateImage />

        <h3 className="font-semibold text-xl my-3">Basic Information</h3>
        <UpdateProfile />

        <h3 className="font-semibold text-xl my-3">Update Password</h3>
        <UpdatePassword />
      </div>
    </section>
  );
};

export default AccountPage;
