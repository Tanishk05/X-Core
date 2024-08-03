import React from "react";
import Image from "next/image";
import { departments } from "../lib/placeholder";
import { auth } from "@/auth"
import { redirect } from "next/navigation";

const page = async () => {
  const session= await auth();
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
        <div className="w-[25vw] h-[25vh] flex items-start flex-wrap gap-4">
          {departments.map((department, index) => {
            return department.lock ? (
              <button
                className="bg-[#414141] relative border-2 border-[#6556CD] pt-4 text-xl px-10 py-4 rounded-lg font-bold"
                key={index}
              >
                {" "}
                {department.name}
                <div className="w-[50px]  absolute bottom-[-15px] right-[-30px] h-[50px] rounded-[50%]">
                  <Image
                    height={10}
                    width={10}
                    className="w-[90%] h-[90%] object-cover"
                    src=" 
                          https://cdn3d.iconscout.com/3d/premium/thumb/lock-2997205-2516243.png?f=webp
                          "
                    alt=""
                  />
                </div>
              </button>
            ) : (
              <button
                className="bg-[#6556CD] border-2 border-[#6556CD] pt-4 text-xl px-10 py-4 rounded-lg font-bold"
                key={index}
              >
                {department.name}
              </button>
            );
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default page;
