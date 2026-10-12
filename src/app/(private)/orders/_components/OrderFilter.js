import { useRouter } from "next/navigation";

const filters = [
  {
    label: "All Orders",
    value: "",
  },
  {
    label: "Pending",
    value: "PENDING",
  },
  {
    label: "Confirmed",
    value: "CONFIRMED",
  },
  {
    label: "Shipped",
    value: "SHIPPED",
  },
  {
    label: "Delivered",
    value: "DELIVERED",
  },
  {
    label: "Cancelled",
    value: "CANCELLED",
  },
];

const OrderFilter = ({ status }) => {
  const router = useRouter();

  function onFilter(status) {
    router.push(`?status=${status}`);
  }

  return (
    <div className="flex flex-wrap items-center gap-8 mt-12">
      <div
        className="flex flex-wrap items-center gap-3"
        role="group"
        aria-label="Filter orders"
      >
        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
          Filter by:
        </span>
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => onFilter(filter.value)}
            className={
              status == filter.value
                ? "px-3.5 py-2 text-white text-sm font-medium rounded-md bg-blue-600 border border-blue-600 transition-colors cursor-pointer hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                : "px-3.5 py-2 text-slate-900 text-sm font-medium rounded-md bg-white border border-slate-300 transition-colors cursor-pointer hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-50 dark:bg-gray-800 dark:hover:bg-neutral-700 dark:border-neutral-700"
            }
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OrderFilter;
