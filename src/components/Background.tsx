import React from "react";

const Background = () => {
  return (
    <div className="flex w-[40%] justify-center items-center absolute">
      <div className="rounded-[50%] drop-shadow-[#6556CD_0_10px_20px] bg-[#6556CD] h-[500px] w-[500px] relative z-10"></div>
      <div className="rounded-[50%] drop-shadow-[30px_0_90px_#6556CD] bg-[#1e1e1e] h-[500px] w-[500px] absolute left-[450px] z-0 backdrop-blur-[10px]"></div>
      <div className="rounded-[50%] bg-[#6556CD] h-[150px] w-[150px] z-20 border-8 border-white flex items-center justify-center top-[15rem] text-4xl font-bold right-[75px] rotate-45 absolute">
        {"</>"}
      </div>
    </div>
  );
};

export default Background;
