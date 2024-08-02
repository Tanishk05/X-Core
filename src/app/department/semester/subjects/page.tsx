import React from "react";
import Image from "next/image";


const page = () => {
  return (
    <div className="z-20 w-full pt-[2rem]  flex items-center justify-around">
      <div>
        <Image
          src={"/images/subjects.png"}
          alt=""
          height={400}
          width={400}
          className=""
        />
      </div>
      <div className="flex flex-col gap-8 w-[50vw] ml-[5vw] h-[70vh] items-end justify-start">
        <div className="flex flex-col items-start justify-start gap-4">
          <h1 className="text-6xl font-bold">
            <span className="stroke text-8xl">Here</span> Your all Subjects
            <br />
          </h1>
          <h2 className="text-xl">
            Select Your Subject, which you want to study
          </h2>
        </div>
        <div className="px-[40px] w-[35vw] py-[30px] border-2 border-[#6556CD] bg-transparent">
        <button className="px-6 py-3 border-[#6556CD] border-2 bg-transparent text-2xl">
                           Syllabus
                        </button>
        </div>
        
        <div className="w-[35vw] h-[25vh]  flex items-start flex-wrap gap-4">
                        <button className="px-6 hover:bg-[#6556CD] py-3 border-[#6556CD] border-2 bg-transparent text-2xl">
                            Computer Vision
                        </button>
                        <button className="px-6 py-3 border-[#6556CD] border-2 bg-transparent text-2xl">
                            Computer Vision
                        </button>
                        <button className="px-6 py-3 border-[#6556CD] border-2 bg-transparent text-2xl">
                            Computer Vision
                        </button>
                        <button className="px-6 py-3 border-[#6556CD] border-2 bg-transparent text-2xl">
                            Computer Vision
                        </button>
                        <button className="px-6 py-3 border-[#6556CD] border-2 bg-transparent text-2xl">
                            Computer Vision
                        </button>
                        <button className="px-6 py-3 border-[#6556CD] border-2 bg-transparent text-2xl">
                            Computer Vision
                        </button>
                        
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default page;
