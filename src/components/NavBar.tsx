import React, { FC } from 'react'

const NavBar: FC = ({}) => {
  return (
   <nav className='
   pl-[5vw] w-screen h-[10vh] bg-[#1f357a] text-white
   flex items-center justify-center gap-4
   md:justify-start'>
    <img src="/LOGO.png" alt="Logo" className='w-12'/>
    <h1 className='text-2xl'>CLIMEASURE MS</h1>
   </nav>
  )
}

export default NavBar