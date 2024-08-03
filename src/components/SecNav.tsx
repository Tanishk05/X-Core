"use client";
import React, { useState } from "react";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";
import { signOut } from "next-auth/react";

const SecNav = () => {
  const [showdropdown, setShowdropdown] = useState(false);
  return (
    <header className="bg-[#6556CD] pb-1 absolute w-full z-50">
      <nav className="flex items-center justify-between bg-[#1C1C1D] px-8 py-3">
        <div>
          <h1 className="font-inspiration text-5xl">X-Core</h1>
        </div>
        <div>
          <button className="flex gap-1 items-center justify-center border-[#6556CD] border-2 rounded-[30px] px-4">
            <i className="ri-search-line text-white text-3xl"></i>
            <input
              className="px-6 py-3 w-[19vw] rounded bg-transparent border-none outline-none "
              type="search"
              placeholder="Search Yout Dept."
            />
          </button>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-col">
            <button
              className="border-[#6556CD] border-2 flex justify-center items-center  w-[70px] h-[70px] rounded-[50%] font-bold"
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              onClick={() => setShowdropdown(!showdropdown)}
            >
              <img
                className="w-[90%] h-[90%] object-cover"
                src="https://cdn3d.iconscout.com/3d/premium/thumb/user-profile-2871145-2384395.png"
                alt=""
              />
            </button>

            <div
              id="dropdown"
              className={`absolute top-20 right-4 z-10 ${
                showdropdown ? "" : "hidden"
              } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </Link>
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={()=>signOut()}>
                  Sign out
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default SecNav;
