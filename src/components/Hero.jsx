import React from 'react'
import Image from 'next/image'
import Background from './Background'

const Hero = () => {
  return (
    <div className='h-screen w-screen flex items-center relative'>
        <Background />
        <dir className="z-20 w-full pt-[2rem] flex items-center justify-around">
            <div>
                <Image src={"/images/hero.png"} height={350} width={350} className=''/>
            </div>
            <div className="flex flex-col gap-8 items-center">
                <div className='flex flex-col gap-4'>
                    <h1 className='text-8xl font-bold'><span className='stroke'>Develop</span> Your Full <br /> IT Potential</h1>
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