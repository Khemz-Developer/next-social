"use client"

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const MobileMenu = () => {

    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='md:hidden'>
      <div className='flex flex-col gap-[4.5px] cursor-pointer' 
       onClick={()=> setIsOpen((prev)=>!prev)}>
         <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen? "rotate-45" : ""} origin-left ease-in-out duration-500`}/>
         <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen? 'opacity-0' : ""} ease-in-out duration-500`}/>
         <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen? '-rotate-45' : ""} origin-left ease-in-out duration-500`}/>       
       </div>
       {isOpen && (
         <div className='items-center absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col  justify-center gap-8 font-medium text-xl z-10'>
            <Link href='/'>Home</Link>
            <Link href='/friends'>Friends</Link>
            <Link href='/groups'>Groups</Link>
            <Link href='/stories'>Stories</Link>
            <Link href='/login'>Login</Link>

         </div>
         )}
    </div>
  )
}

export default MobileMenu
