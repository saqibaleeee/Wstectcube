import React from 'react'

const Plans = () => {
  return (
    <div className='py-[100px] px-5 '>
        <div className='max-w-[1240px] mx-auto md:grid grid-cols-3  gap-6 '>

      <div className='shadow-xl  h-[400px] my-10 rounded hover:scale-105 duration-500 hover:bg-gray-100 '>
        <h1 className='text-xl font-bold md:text-2xl md:font-bold text-center py-4 '>Web development</h1>
        <span className='text-3xl font-bold mx-auto block text-center  py-6  '>$150</span>
        <p className='font-semibold text-center py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, temporibus.</p>
        <button className='p-2 mx-auto block rounded mt-6 bg-green-600'>Start Trails</button>

      </div>


      <div className='shadow-xl h-[400px]  my-10 rounded hover:scale-105 duration-500 hover:bg-gray-100 '>
      <h1 className='text-xl font-bold md:text-2xl md:font-bold text-center py-4 '>UI UX Design</h1>
        <span className='text-3xl font-bold mx-auto block text-center  py-6  '>$130</span>
        <p className='font-semibold text-center py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, temporibus.</p>
        <button className='p-2 mx-auto block rounded mt-6 bg-green-600'>Start Trails</button>

      </div>


      <div className='shadow-xl  h-[400px] my-10 rounded hover:scale-105 duration-500 hover:bg-gray-100'>

      <h1 className='text-xl font-bold md:text-2xl md:font-bold text-center py-4 '>Digital marketing</h1>
        <span className='text-3xl font-bold mx-auto block text-center  py-6  '>$100</span>
        <p className='font-semibold text-center py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, temporibus.</p>
        <button className='p-2 mx-auto block rounded mt-6 bg-green-600'>Start Trails</button>

      </div>
        </div>
      
    </div>
  )
}

export default Plans;
