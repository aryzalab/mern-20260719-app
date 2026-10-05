"use client";
import useFilterStore from "@/stores/filterStore";
import { FaFilter } from "react-icons/fa6";

const FilterButton = () => {
  const { toggleFilter } = useFilterStore.getState();

  return (
    <button
      type="button"
      onClick={() => toggleFilter(true)}
      className="flex gap-2 items-center mx-auto px-3.5 py-2 text-slate-900 text-sm rounded-md cursor-pointer bg-white border border-slate-300 transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-50 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:border-neutral-700 w-full"
    >
      <FaFilter /> Filter
    </button>
  );
};

export default FilterButton;
