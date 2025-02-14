import React from "react";
import Link from "next/link";
import { auth } from "@/auth";
import LogoutBtn from "./auth_btns/LogoutBtn";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="bg-[#6556CD] pb-1 absolute w-full z-50">
      <nav className="flex items-center justify-between bg-[#1C1C1D] px-8 py-3">
        <div>
          <h1 className="font-inspiration text-5xl">X-Core</h1>
        </div>
        <div className="flex gap-4 items-center">
          <Link
            href="#"
            className="border-[#6556CD] border-2 pt-4 pb-4 pl-8 pr-8 rounded-lg font-bold"
          >
            Vision
          </Link>
          <Link
            href="#"
            className="border-[#6556CD] border-2 pt-4 pb-4 pl-8 pr-8 rounded-lg font-bold"
          >
            Contact
          </Link>
          {session && <LogoutBtn />}
          {!session && (
            <Link href="/login">
              <button className="bg-[#6556CD] pt-4 pb-4 pl-8 pr-8 rounded-lg font-bold">
                Login
              </button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
