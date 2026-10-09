import { cancelOrder, payViaCash, payViaKhalti } from "@/api/private/orders";
import { ORDERS_ROUTE } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const OrderActions = ({ id, status }) => {
  const router = useRouter();

  function onCancelOrder() {
    if (confirm("Are you sure?")) {
      cancelOrder(id)
        .then((res) => {
          toast.success("Order cancelled.");
        })
        .catch((error) => {
          toast.error(error.response.data?.message);
        });
    }
  }

  function onPayViaCash() {
    payViaCash(id)
      .then((res) => {
        toast.success("Order confirmed.");

        router.refresh();
      })
      .catch((error) => {
        toast.error(error.response.data?.message);
      });
  }

  function onPayViaKhalti() {
    payViaKhalti(id)
      .then((res) => {
        console.log(res.data);

        // redirect to khalti payment gateway
        // res.data.payment_url

        window.location.href = res.data.payment_url;
      })
      .catch((error) => {
        toast.error(error.response.data?.message);
      });
  }

  if (status !== "PENDING") return;

  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <button
        onClick={onPayViaCash}
        className="flex items-center gap-2.5 px-3.5 py-2 text-slate-900 text-sm font-medium rounded-md bg-white border border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-50 dark:bg-gray-800 dark:hover:bg-neutral-700 dark:border-neutral-700"
      >
        Cash
      </button>
      <button
        onClick={onPayViaKhalti}
        className="flex items-center gap-2.5 px-3.5 text-slate-900 text-sm font-medium rounded-md bg-white border border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-50 dark:bg-gray-800 dark:hover:bg-neutral-700 dark:border-neutral-700"
      >
        <Image
          src="/assets/images/khalti.png"
          alt="Khalti Logo"
          width={200}
          height={100}
          className="mx-auto h-6 w-auto"
        />
      </button>
      <Link
        href={`${ORDERS_ROUTE}/${id}/payment/stripe`}
        className="flex items-center gap-2.5 px-3.5 py-2 text-slate-900 text-sm font-medium rounded-md bg-white border border-indigo-500 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-50 dark:bg-gray-800 dark:hover:bg-neutral-700 dark:border-neutral-700"
      >
        <Image
          src="/assets/images/stripe.webp"
          alt="Stripe Logo"
          width={200}
          height={100}
          className="mx-auto h-4 w-auto"
        />
      </Link>
      <button
        onClick={onCancelOrder}
        className="flex items-center gap-2.5 px-3.5 py-2 text-white text-sm font-medium rounded-md bg-red-600 border border-slate-300 hover:bg-red-700 focus:outline-none"
      >
        Cancel order
      </button>
    </div>
  );
};

export default OrderActions;
