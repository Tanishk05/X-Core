import React from "react";
import Image from "next/image";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SearchDropDown from "@/components/secNav/SearchDropDown";
import axios from "axios";

const page = async () => {
  const res = await axios.get(`${process.env.DOMAIN}/api/department`);
  const departments = await res.data;

  const session = await auth();
  if (!session?.user) redirect("/login");
  return (
    <div className="z-20 w-full pt-[2rem] flex items-center justify-around">
      <div>
        <Image
          src={"/images/department.png"}
          alt=""
          height={350}
          width={350}
          className=""
        />
      </div>
      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl font-bold">
            <span className="stroke text-8xl">Which</span> <br /> Department Are{" "}
            <br />
            You From ?{" "}
          </h1>
          <h2 className="text-xl">
            Select Your Department so that we can move further to provide you
            notes <br /> can find Best Notes ,PYQ ,Others
          </h2>
        </div>
        <SearchDropDown options={departments} nextPage="/department/semester" />
      </div>
      <div></div>
    </div>
  );
};

export default page;
