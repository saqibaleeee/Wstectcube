import React from 'react'

const Expert = () => {
  return (
    <div className='max-w-[1240px]  mx-auto md:my-10  md:h-[300px]  h-[430px] md:grid md:grid-cols-2 p-2'>
     <div className=' md:w-[80%] col-span-1  boder border-black'>
    <img src="/image1.png" alt="" className='h-[200px] block ' />
     
     </div> 
     <div className=' h-[200px] col-span-1 flex flex-col justify-center'>
        <h1 className='text-[#00f9aa] font-bold my-2 text-center mt-10 md:text-start'>LEARNS FROM EXPERTS</h1>

        <p className='my-2 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias ad ipsum, modi fuga molestias totam quam magni ea voluptatem ab! lorem ipsum doller sit amets</p>

        <button className='w-[30%] bg-black text-white p-3 rounded md:mt-5'>Get started</button>
       
     </div> 
    
    </div>
  )
}

export default Expert;
