"use client";

import { getTotalCount } from "@/api/products";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// current page

const Pagination = ({ limit, currentPage }) => {
  const [totalCount, setTotalCount] = useState(0);

  const pages = Math.ceil(totalCount / limit);

  const pageNumbers = []; // ["1","2","3"]

  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i.toString());
  }

  useEffect(() => {
    getTotalCount().then((data) => setTotalCount(data));
  }, []);

  return (
    <nav
      className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
      aria-label="Table navigation"
    >
      <span>CurrentPage: {currentPage}</span>
      <ul className="inline-flex items-stretch -space-x-px">
        <li>
          <a
            href="#"
            className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Previous</span>
            <FaAngleLeft />
          </a>
        </li>
        {pageNumbers.map((page) => (
          <li>
            <Link
              href={`?currentPage=${page}`}
              className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {page}
            </Link>
          </li>
        ))}
        <li>
          <a
            href="#"
            className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Next</span>
            <FaAngleRight />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
