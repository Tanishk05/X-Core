import React from "react";
import Image from "next/image";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SearchDropDown from "@/components/secNav/SearchDropDown";
import { subjects } from "@/app/lib/placeholder";

const page = async () => {
  const session = await auth();
  if (!session?.user) redirect("/login");
  return (
    <>
      <div className="z-20 w-full pt-[2rem] flex items-center justify-around">
        <div>
          <Image
            src={"/images/syllabus.png"}
            alt=""
            height={350}
            width={350}
            className=""
          />
        </div>
        <div className="flex flex-col gap-8 items-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-6xl font-bold">
              Which Semester <br /> Are You In ?{" "}
            </h1>
            <h2 className="text-xl">
              Select Your Semester so that we can move <br /> further to provide
              you notes
            </h2>
          </div>
          <SearchDropDown options={subjects} nextPage="/department/notes"/>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default page;
