import React from 'react'

const Header = () => {
  return (
   <div className='bg-[#2699fb] p-4'>
    <div className=' md:flex md:items-center md:justify-between md:mx-10 mt-5  hover:scale-100 duration-1000 hover:bg-black md:px-10 md:py-4 rounded-3xl  flex justify-between'>
        <div className='text-white text-xl font-bold md:text-3xl'>Ws Cube Tec</div>
        <ul className='hidden md:flex md:gap-5 font-semibold text-white'>
            <li>Home</li>
            <li>Compney</li>
            <li>Resourses</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
     
        <button className='border border-green-50  px-4 py-1 md:hidden text-white font-medium bg-black rounded'>Sign in</button>
    </div>
    

   </div>
  )
}

export default Header;
