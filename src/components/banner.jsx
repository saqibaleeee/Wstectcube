import React from 'react'

const Banner = () => {
  return (
    <div>
    <div className='bg-[#2699fb] md:h-[600px] h-[300px] w-full  py-[50px]   '>
        <div className='max-w-[1240px] md:my-[100px] my-[20px] text-center  mx-auto  font-bold'>
        <div className='  capitalize  text-xl md:text-3xl  md:p-[24px]'>learn with us</div>

        <h2 className='text-white text-3xl md:text-[80px] md:p-[24px]  pt-5'>Grow with us</h2>

        <h6 className='  text-3xl md:text-[50px] md:pt-10 pt-5 text-white'>Learn Webdevelopment</h6>
      
        </div>
        <button className='bg-black text-white p-3 rounded mx-auto block'>Get started</button>
    </div>
  
    </div>
  )
}

export default Banner;
