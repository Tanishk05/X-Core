import React from 'react'
import Link from 'next/link'
import 'remixicon/fonts/remixicon.css'

const SecNav = () => {
  return (
    <header className='bg-[#6556CD] pb-1 absolute w-full z-50'>
        <nav className='flex items-center justify-between bg-[#1C1C1D] px-8 py-3'>
            <div>
                <h1 className='font-inspiration text-5xl'>X-Core</h1>
            </div>
            <div>
                <button className='flex gap-1 items-center justify-center border-[#6556CD] border-2 rounded-[30px] px-4'>
                <i className="ri-search-line text-white text-3xl"></i>
                <input className='px-6 py-3 w-[19vw] rounded bg-transparent border-none outline-none ' type="search" placeholder='Search Yout Dept.' />
                </button>
               
            </div>
            <div className='flex gap-4 items-center'>
                <Link href="#" className='border-[#6556CD] border-2 flex justify-center items-center  w-[70px] h-[70px] rounded-[50%] font-bold'>
                            <img className='w-[90%] h-[90%] object-cover' src="https://cdn3d.iconscout.com/3d/premium/thumb/user-profile-2871145-2384395.png" alt="" />
                </Link>
                
            </div>
        </nav>
    </header>
  )
}

export default SecNav