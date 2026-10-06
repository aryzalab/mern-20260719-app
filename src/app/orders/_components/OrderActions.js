import { cancelOrder } from "@/api/private/orders";
import { toast } from "react-toastify";

const OrderActions = ({ id, status }) => {
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

  if (status !== "PENDING") return;

  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <button className="flex items-center gap-2.5 px-3.5 py-2 text-slate-900 text-sm font-medium rounded-md bg-white border border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-50 dark:bg-gray-800 dark:hover:bg-neutral-700 dark:border-neutral-700">
        Cash
      </button>
      <button className="flex items-center gap-2.5 px-3.5 py-2 text-slate-900 text-sm font-medium rounded-md bg-white border border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-50 dark:bg-gray-800 dark:hover:bg-neutral-700 dark:border-neutral-700">
        Khalti
      </button>
      <button className="flex items-center gap-2.5 px-3.5 py-2 text-slate-900 text-sm font-medium rounded-md bg-white border border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-50 dark:bg-gray-800 dark:hover:bg-neutral-700 dark:border-neutral-700">
        Card
      </button>
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
