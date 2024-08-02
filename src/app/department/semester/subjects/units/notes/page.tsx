import React from "react";
import Image from "next/image";


const page = () => {
  return (
    <div className="z-20 w-full pt-[2rem]  flex items-center justify-around">
      <div>
        <Image
          src={"/images/notes.png"}
          alt=""
          height={350}
          width={350}
          className=""
        />
      </div>
      <div className="flex flex-col gap-8 w-[50vw] ml-[5vw] h-[70vh] items-end justify-start">
        <div className="flex flex-col items-start justify-start gap-4">
          <h1 className="text-6xl font-bold">
            <span className="stroke text-8xl">Here</span> Your all Stuffs
            <br />
          </h1>
          <h2 className="text-xl">
            Select Notes type , which will be your  Best fit
          </h2>
        </div>
        <div className="w-[25vw] h-[25vh] flex items-start flex-col gap-4">
          <div className="flex items-center justify-center w-[20vw] mb-7 h-[5vh]">
            <div className=" border-2 flex-shrink-0 text-3xl border-[#6556CD] bg-transparent px-6 py-4">HandWritten Notes</div>
            <div className="w-10vw h-[5px] flex-shrink-0 text-transparent bg-white"> ----------------------------------------  </div>
          </div>
          <div className="flex items-center justify-center w-[20vw] mb-7 h-[5vh]">
            <div className=" border-2 flex-shrink-0 text-3xl border-[#6556CD] bg-transparent px-6 py-4">HandWritten Notes</div>
            <div className="w-10vw h-[5px] flex-shrink-0 text-transparent bg-white"> ----------------------------------------  </div>
          </div>
          <div className="flex items-center justify-center w-[20vw] mb-7 h-[5vh]">
            <div className=" border-2 flex-shrink-0 text-3xl border-[#6556CD] bg-transparent px-6 py-4">HandWritten Notes</div>
            <div className="w-10vw h-[5px] flex-shrink-0 text-transparent bg-white"> ----------------------------------------  </div>
          </div>
          <div className="flex items-center justify-center w-[20vw] mb-7 h-[5vh]">
            <div className=" border-2 flex-shrink-0 text-3xl border-[#6556CD] bg-transparent px-6 py-4">HandWritten Notes</div>
            <div className="w-10vw h-[5px] flex-shrink-0 text-transparent bg-white"> ----------------------------------------  </div>
          </div>
          <div className="flex items-center justify-center w-[20vw] mb-7 h-[5vh]">
            <div className=" border-2 flex-shrink-0 text-3xl border-[#6556CD] bg-transparent px-6 py-4">HandWritten Notes</div>
            <div className="w-10vw h-[5px] flex-shrink-0 text-transparent bg-white"> ----------------------------------------  </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default page;
