import React from "react";
import Image from "next/image";
import { semesters } from "@/app/utilities/placeholder";

const page = () => {
  return (
    <div className="z-20 w-full pt-[2rem] flex items-center justify-around">
      <div>
        <Image
          src={"/images/semester.png"}
          alt=""
          height={450}
          width={450}
          className=""
        />
      </div>
      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-8xl font-bold">
          <span className="stroke">  Which</span> Semester <br /> Are You In ?{" "}
          </h1>
          <h2 className="text-xl">
            Select Your Semester so that we can move <br /> further to provide
            you notes
          </h2>
        </div>
        <div className="w-[35vw] h-[25vh] flex items-start flex-wrap gap-4">
            {
                semesters.map((semester, index) => (
                  <button
                    className="bg-[#6556CD] border-2 border-[#6556CD] text-xl px-16 py-4 rounded-lg font-bold"
                    key={index}
                  >
                    {semester}
                  </button>
                ))
            }
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default page;
