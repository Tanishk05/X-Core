import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='h-screen w-screen flex items-center relative'>
        <div className='flex w-[40%] justify-center items-center absolute'>
            <div className='rounded-[50%] drop-shadow-[#6556CD_0_10px_20px] bg-[#6556CD] h-[500px] w-[500px] relative z-10'></div>
            <div className='rounded-[50%] drop-shadow-[30px_0_90px_#6556CD] bg-[#1e1e1e] h-[500px] w-[500px] absolute left-[450px] z-0 backdrop-blur-[10px]'></div>
            <div className='rounded-[50%] bg-[#6556CD] h-[150px] w-[150px] z-20 border-8 border-white flex items-center justify-center top-[15rem] text-4xl font-bold right-[75px] rotate-45 absolute'>{"</>"}</div>
        </div>
        <dir className="z-20 w-full pt-[2rem] flex items-center justify-around">
            <div>
                <Image src={"/images/hero.png"} height={350} width={350} className=''/>
            </div>
            <div className="flex flex-col gap-8 items-center">
                <div className='flex flex-col gap-4'>
                    <h1 className='text-8xl font-bold'>Develop Your Full <br /> IT Potential</h1>
                    <h2 className='text-2xl'>Developed only for SIRT Students , where they <br /> can find Best Notes ,PYQ ,Others</h2>
                </div>
                <button className='bg-[#6556CD] pt-4 text-xl pb-4 pl-8 pr-8 rounded-lg font-bold'>Explore</button>
            </div>
            <div></div>
        </dir>
    </div>
  )
}

export default Hero