"use client"
import React from 'react'
import { signOut } from 'next-auth/react'

const LogoutBtn = () => {
  return (
    <button className='bg-[#6556CD] pt-4 pb-4 pl-8 pr-8 rounded-lg font-bold' onClick={()=>signOut()}>Logout</button>
  )
}

export default LogoutBtn