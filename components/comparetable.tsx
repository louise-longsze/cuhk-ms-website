"use client";

import { useState } from "react";

export default function CompareTable() {
  const [isMale, setIsMale] = useState<boolean>(true);

  return (
    <div className="w-full">
      {/* Toggle */}
      <div className="flex justify-center max-w-60 m-auto mb-8 lg:mb-16">
        <div className="relative flex w-full p-1 bg-white dark:bg-slate-900 rounded-md">
          <span
            className="absolute inset-0 m-1 pointer-events-none"
            aria-hidden="true"
          >
            <span
              className={`absolute inset-0 w-1/2 bg-cyan-500 rounded-md shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out ${
                isMale ? "translate-x-0" : "translate-x-full"
              }`}
            ></span>
          </span>
          <button
            className={`relative flex-1 h-8 rounded-md focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
              isMale ? "text-white" : "text-slate-500 dark:text-slate-400"
            }`}
            onClick={() => setIsMale(true)}
            aria-pressed={isMale}
          >
            男性
          </button>
          <button
            className={`relative flex-1 h-8 rounded-md focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
              isMale
                ? "text-slate-500 dark:text-slate-400"
                : "text-white bg-pink-500"
            }`}
            onClick={() => setIsMale(false)}
            aria-pressed={isMale}
          >
            女性
          </button>
        </div>
      </div>

      {/* Table {isMale ? "29" : "35"} */}
      <div className="mx-auto grid gap-6 items-start">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full bg-white text-xl text-left rtl:text-right">
            <thead className="text-xl uppercase border-b border-indigo-400">
              <tr>
                <th scope="col" className="px-6 py-3 w-36 bg-white">
                  年齡
                </th>
                <th scope="col" className="px-6 py-3 w-48 bg-indigo-100">
                  日常生活
                </th>
                <th scope="col" className="px-6 py-3 w-48 bg-indigo-300">
                  中度活動量
                </th>
                <th scope="col" className="px-6 py-3 w-48 bg-indigo-500">
                  高度活動量
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-indigo-400">
                <td className="px-6 py-4">21-30</td>
                <td className="px-6 py-4 bg-indigo-100">
                  {isMale ? "2400" : "1800-2000"}
                </td>
                <td className="px-6 py-4 bg-indigo-300">
                  {isMale ? "2600-2800" : "2000-2200"}
                </td>
                <td className="px-6 py-4 bg-indigo-500">
                  {isMale ? "3000" : "2400"}
                </td>
              </tr>
              <tr className="border-b border-indigo-400">
                <td className="px-6 py-4">31-40</td>
                <td className="px-6 py-4 bg-indigo-100">
                  {isMale ? "2400" : "1800"}
                </td>
                <td className="px-6 py-4 bg-indigo-300">
                  {isMale ? "2600" : "2000"}
                </td>
                <td className="px-6 py-4 bg-indigo-500">
                  {isMale ? "2800-3000" : "2200"}
                </td>
              </tr>
              <tr className="border-b border-indigo-400">
                <td className="px-6 py-4">41-50</td>
                <td className="px-6 py-4 bg-indigo-100">
                  {isMale ? "2200" : "1800"}
                </td>
                <td className="px-6 py-4 bg-indigo-300">
                  {isMale ? "2400-2600" : "2000"}
                </td>
                <td className="px-6 py-4 bg-indigo-500">
                  {isMale ? "2800" : "2200"}
                </td>
              </tr>
              <tr className="border-b border-indigo-400">
                <td className="px-6 py-4">51-60</td>
                <td className="px-6 py-4 bg-indigo-100">
                  {isMale ? "2200" : "1600"}
                </td>
                <td className="px-6 py-4 bg-indigo-300">
                  {isMale ? "2400" : "1800"}
                </td>
                <td className="px-6 py-4 bg-indigo-500">
                  {isMale ? "2600-2800" : "2200"}
                </td>
              </tr>
              <tr className="border-b border-indigo-400">
                <td className="px-6 py-4">61-70</td>
                <td className="px-6 py-4 bg-indigo-100">
                  {isMale ? "2000" : "1600"}
                </td>
                <td className="px-6 py-4 bg-indigo-300">
                  {isMale ? "2200-2400" : "1800"}
                </td>
                <td className="px-6 py-4 bg-indigo-500">
                  {isMale ? "2600" : "2000"}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4">71-80</td>
                <td className="px-6 py-4 bg-indigo-100">
                  {isMale ? "2000" : "1600"}
                </td>
                <td className="px-6 py-4 bg-indigo-300">
                  {isMale ? "2200-2400" : "1800"}
                </td>
                <td className="px-6 py-4 bg-indigo-500">
                  {isMale ? "2400-2600" : "2000"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
