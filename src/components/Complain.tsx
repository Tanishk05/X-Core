import Link from 'next/link'
import React from 'react'

const Complain = () => {
  return (
    <div className='rounded-[50%] drop-shadow-[50px_20px_100px_#6556CD] bg-[#1e1e1e] h-[200px] w-[200px] flex items-center justify-center absolute right-0 bottom-0 z-0 backdrop-blur-[2px]'>
      <Link href="/complain">
      <div className='rounded-[50%] bg-[#6556CD] h-[100px] w-[100px] z-20 border-8 border-white flex items-center justify-center text-4xl font-bold  rotate-45 '>
            <img className='w-[90%] h-[90%] object-cover rotate-[-40deg]' src="https://cdn3d.iconscout.com/3d/premium/thumb/user-complain-4967487-4138029.png?f=webp" alt="" />
         </div>
      </Link>
        
    </div>
  )
}

export default Complain
 