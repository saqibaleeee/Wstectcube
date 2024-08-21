import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#2699fb] p-4  '>
        <div className='w-full mx-auto md:grid grid-cols-4 mt-10 '>
            <div className=' '>
            <h1 className='font-bold text-3xl   text-center'>WsCube Tec</h1>
            <p className='text-black py-4 text-center   '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dignissimos nisi debitis laudantium, facilis fuga voluptas maxime, quos suscipit blanditiis fugiat provident,</p>
            </div>

            <div className=' text-center'>
                <h1 className='text-xl font-semibold mt-5 underline'>Solution</h1>
                <ul>
                    <li className='py-2' >Analytics</li>
                    <li className='py-2' >Marketings</li>
                    <li  className='py-2'>commerce</li>
                    <li className='py-2' >Insights</li>
                </ul>
            </div>


            
            <div className='text-center'>
                <h1 className='text-xl font-semibold mt-5 underline'>Supports</h1>
                <ul>
                    <li className='py-2' >Pricing</li>
                    <li className='py-2' >Documentation</li>
                    <li  className='py-2'>Guides</li>
                    <li className='py-2' >API Status</li>
                </ul>
            </div>



            
            <div className=' text-center'>
                <h1 className='text-xl font-semibold mt-5 underline'>Company</h1>
                <ul>
                    <li className='py-2' >About</li>
                    <li className='py-2' >Blos</li>
                    <li  className='py-2'>Jobs</li>
                    <li className='py-2' >Careers</li>
                </ul>
            </div>
 
        </div>
      
    </div>
  )
}

export default Footer;
