import React from "react";
import Image from "next/image";


const page = () => {
  return (
    <div className="z-20 w-full pt-[2rem]  flex items-center justify-around">
      <div>
        <Image
          src={"/images/units.png"}
          alt=""
          height={400}
          width={400}
          className=""
        />
      </div>
      <div className="flex flex-col gap-8 w-[45vw] ml-[5vw] h-[70vh] items-end justify-start">
        <div className="flex flex-col items-start justify-start gap-4">
          <h1 className="text-6xl font-bold">
            <span className="stroke text-8xl">Here</span> Your all Units !
            <br />
          </h1>
          <h2 className="text-xl">
            Select Your unit, which you want to study
          </h2>
        </div>
        <div className="px-[40px] w-[35vw] py-[30px] border-2 border-[#6556CD] bg-transparent">
        <button className="px-6 py-3 border-[#6556CD] border-2 bg-transparent text-2xl">
                           Previous Year Paper
                        </button>
        </div>
        
        <div className="w-[35vw] h-[25vh]  flex items-start flex-wrap gap-4">
                        <button className="px-6 hover:bg-[#6556CD] py-3 border-[#6556CD] border-2 bg-transparent text-2xl">
                            Unit - 1
                        </button>
                        <button className="px-6 hover:bg-[#6556CD] py-3 border-[#6556CD] border-2 bg-transparent text-2xl">
                            Unit - 2
                        </button>
                        <button className="px-6 hover:bg-[#6556CD] py-3 border-[#6556CD] border-2 bg-transparent text-2xl">
                            Unit - 3
                        </button>
                        <button className="px-6 hover:bg-[#6556CD] py-3 border-[#6556CD] border-2 bg-transparent text-2xl">
                            Unit - 4
                        </button>
                        <button className="px-6 hover:bg-[#6556CD] py-3 border-[#6556CD] border-2 bg-transparent text-2xl">
                            Unit - 5
                        </button>
                      
                        
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default page;
