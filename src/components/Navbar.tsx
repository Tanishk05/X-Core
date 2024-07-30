import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='bg-[#6556CD] pb-1 absolute w-full z-50'>
        <nav className='flex items-center justify-between bg-[#1C1C1D] p-8'>
            <div>
                <h1 className='font-inspiration text-5xl'>X-Core</h1>
            </div>
            <div className='flex gap-4 items-center'>
                <Link href="#" className='border-[#6556CD] border-2 pt-4 pb-4 pl-8 pr-8 rounded-lg font-bold'>Vision</Link>
                <Link href="#" className='border-[#6556CD] border-2 pt-4 pb-4 pl-8 pr-8 rounded-lg font-bold'>Contact</Link>
                <Link href="#"><button className='bg-[#6556CD] pt-4 pb-4 pl-8 pr-8 rounded-lg font-bold'>SignUp</button></Link>
                <Link href="#"><button className='bg-[#6556CD] pt-4 pb-4 pl-8 pr-8 rounded-lg font-bold'>Login</button></Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar