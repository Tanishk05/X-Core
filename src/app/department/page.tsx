import React from 'react'
import Image from 'next/image'
import SecNav from '@/components/SecNav'
import Complain from '@/components/Complain'

const page = () => {
  return (
    <>
        <SecNav/>
    <div className='h-screen w-screen flex items-center relative'>
        <div className='flex w-[40%] justify-center items-center absolute'>
            <div className='rounded-[50%] drop-shadow-[#6556CD_0_10px_20px] bg-[#6556CD] h-[500px] w-[500px] relative z-10'></div>
            <div className='rounded-[50%] drop-shadow-[30px_0_90px_#6556CD] bg-[#1e1e1e] h-[450px] w-[450px] absolute left-[450px] z-0 backdrop-blur-[10px]'></div>
            <div className='rounded-[50%] bg-[#6556CD] h-[150px] w-[150px] z-20 border-8 border-white flex items-center justify-center top-[15rem] text-4xl font-bold right-[45px] rotate-45 absolute'>{"</>"}</div>
        </div>
        <div className="z-20 w-full pt-[2rem] flex items-center justify-around">
            <div>
                <img src={"/images/department.png"} height={350} width={350} className=''/>
            </div>
            <div className="flex flex-col gap-8 items-center">
                <div className='flex flex-col gap-4'>
                    <h1 className='text-6xl font-bold'><span className='stroke text-8xl'>Which</span> <br /> Department Are <br />You From ? </h1>
                    <h2 className='text-xl'>Select Your Department so that we can move further to provide you notes <br /> can find Best Notes ,PYQ ,Others</h2>
                </div>
                <div className='w-[40vw] h-[25vh] flex items-start flex-col gap-4 '>
                  <div className='flex gap-6 items-center justify-center'>
                     <button className='bg-[#6556CD] border-2 border-[#6556CD] pt-4 text-xl px-10 py-4 rounded-lg font-bold'>AIML</button>
                     <button className='bg-[#6556CD] border-2 border-[#6556CD] pt-4 text-xl px-10 py-4 rounded-lg font-bold'>CSCY</button>
                     <button className='bg-[#414141] relative border-2 border-[#6556CD] pt-4 text-xl px-10 py-4 rounded-lg font-bold' > AIDS 
                      <div className='w-[50px]  absolute bottom-[-15px] right-[-30px] h-[50px] rounded-[50%]'> 
                        <img className='w-[90%] h-[90%] object-cover' src=" 
                        https://cdn3d.iconscout.com/3d/premium/thumb/lock-2997205-2516243.png?f=webp
                        " alt="" />
                      </div>
                     </button>
                  </div>
                  <div className='flex gap-6 items-center justify-center'>
                     <button className='bg-[#414141] relative border-2 border-[#6556CD] pt-4 text-xl px-10 py-4 rounded-lg font-bold' > EX 
                      <div className='w-[50px]  absolute bottom-[-15px] right-[-30px] h-[50px] rounded-[50%]'> 
                        <img className='w-[90%] h-[90%] object-cover' src=" 
                        https://cdn3d.iconscout.com/3d/premium/thumb/lock-2997205-2516243.png?f=webp
                        " alt="" />
                      </div>
                     </button>
                     <button className='bg-[#414141] relative border-2 border-[#6556CD] pt-4 text-xl px-10 py-4 rounded-lg font-bold' > CS 
                      <div className='w-[50px]  absolute bottom-[-15px] right-[-30px] h-[50px] rounded-[50%]'> 
                        <img className='w-[90%] h-[90%] object-cover' src=" 
                        https://cdn3d.iconscout.com/3d/premium/thumb/lock-2997205-2516243.png?f=webp
                        " alt="" />
                      </div>
                     </button>
                     <button className='bg-[#414141] relative border-2 border-[#6556CD] pt-4 text-xl px-10 py-4 rounded-lg font-bold' > EC 
                      <div className='w-[50px]  absolute bottom-[-15px] right-[-30px] h-[50px] rounded-[50%]'> 
                        <img className='w-[90%] h-[90%] object-cover' src=" 
                        https://cdn3d.iconscout.com/3d/premium/thumb/lock-2997205-2516243.png?f=webp
                        " alt="" />
                      </div>
                     </button>
                  </div>
                  <div className='flex gap-6 items-center justify-center'>
                     <button className='bg-[#414141] relative border-2 border-[#6556CD] pt-4 text-xl px-10 py-4 rounded-lg font-bold' > MECH. 
                      <div className='w-[50px]  absolute bottom-[-15px] right-[-30px] h-[50px] rounded-[50%]'> 
                        <img className='w-[90%] h-[90%] object-cover' src=" 
                        https://cdn3d.iconscout.com/3d/premium/thumb/lock-2997205-2516243.png?f=webp
                        " alt="" />
                      </div>
                     </button>
                     <button className='bg-[#414141] relative border-2 border-[#6556CD] pt-4 text-xl px-10 py-4 rounded-lg font-bold' > CIVIL
                      <div className='w-[50px]  absolute bottom-[-15px] right-[-30px] h-[50px] rounded-[50%]'> 
                        <img className='w-[90%] h-[90%] object-cover' src=" 
                        https://cdn3d.iconscout.com/3d/premium/thumb/lock-2997205-2516243.png?f=webp
                        " alt="" />
                      </div>
                     </button>
                     <button className='bg-[#414141] relative border-2 border-[#6556CD] pt-4 text-xl px-10 py-4 rounded-lg font-bold' > CSIT
                      <div className='w-[50px]  absolute bottom-[-15px] right-[-30px] h-[50px] rounded-[50%]'> 
                        <img className='w-[90%] h-[90%] object-cover' src=" 
                        https://cdn3d.iconscout.com/3d/premium/thumb/lock-2997205-2516243.png?f=webp
                        " alt="" />
                      </div>
                     </button>
                  </div>
                </div>
               
            </div>
            <div></div>
        </div>
    </div>
     <Complain/>
    </>

  )
}

export default page