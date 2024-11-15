import React from 'react'
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';
const Hero = () => {
     return (
          <>
               <div className='flex flex-col 2xl:flex-row gap-10 -z-30'>
                    <div className=' flex flex-col items-center sm:justify-center lg:justify-center lg:items-center lg:w-11/12 -z-30 ' >
                         <div className='relative justify-center items-center h-48 sm:h-64  overflow-hidden flex  lg:w-full ' style={{ width: '77%' }}>
                              <img className='h-52 -z-30 sm:h-70 sm:w-4/5 lg:w-full lg:h-full' src='https://i.pinimg.com/originals/3b/aa/c0/3baac05f19c1d4f2f3ba69a534cb629c.gif' alt='' />
                              <div className='h-70 p-6 absolute -z-30 flex flex-col justify-center items-center mix-blend-multiply bg-black sm:w-5/6 lg:w-full'>
                                   <h1 className='font-anton text-7xl sm:text-8xl lg:text-9xl '>ROBOTICS</h1>
                                   <h1 className='font-anton text-7xl sm:text-8xl lg:text-9xl '>REDEFINED</h1>
                              </div>

                         </div>
                         <div className='flex justify-center items-center font-anton mt-5 w-3/5 sm:w-4/6'>
                              <h2>Experience the exciting thrill.</h2>
                         </div>

                         <div className='mt-5'>
                              <Link to='/events'>
                                   <div className=' get_started bg-green-400 p-2 text-lg  font-bold rounded-2xl flex items-center '>Get Started<MoveRight /></div>
                              </Link>
                         </div>

                    </div>
                    <div className='flex flex-col justify-center items-center  '>
                         <div className='flex gap-5 ml-10 lg:gap-10 lg:ml-20'>
                              <div className='border-white border rounded-3xl h-16 w-24 sm:h-24 sm:w-32 lg:h-36 lg:w-56 overflow-hidden'><img className='object-cover' src='/images/hero/0_DSC06549.jpg' alt='' /></div>
                              <div className='border-white border rounded-3xl h-16 w-24 sm:h-24 sm:w-32 lg:h-36 lg:w-56 overflow-hidden'><img className='object-cover' src='/images/hero/1_DSC_0008_1.jpg' alt='' /></div>
                              <div className='border-white border rounded-3xl h-16 w-24 sm:h-24 sm:w-32 lg:h-36 lg:w-56 overflow-hidden'><img className='object-cover' src='/images/hero/1_DSC_0043.jpg' alt='' /></div>
                         </div>
                         <div className='flex mt-4 gap-5 -ml-10  lg:gap-10  '>
                              <div className='border-white border rounded-3xl h-16 w-24 sm:h-24 sm:w-32 lg:h-36 lg:w-56 overflow-hidden'><img className='object-cover' src='/images/hero/1_DSC06570.jpg' alt='' /></div>
                              <div className='border-white border rounded-3xl h-16 w-24 sm:h-24 sm:w-32 lg:h-36 lg:w-56 overflow-hidden'><img className='object-cover' src='/images/hero/1_DSC06797.jpg' alt='' /></div>
                              <div className='border-white border rounded-3xl h-16 w-24 sm:h-24 sm:w-32 lg:h-36 lg:w-56 overflow-hidden'><img className='object-cover' src='/images/hero/2_DSC_0005.jpg' alt='' /></div>
                         </div>
                         <div className='flex mt-4 gap-5 ml-10 lg:gap-10 lg:ml-20'>
                              <div className='border-white border rounded-3xl h-16 w-24 sm:h-24 sm:w-32 lg:h-36 lg:w-56 overflow-hidden'><img className='object-cover' src='/images/hero/3_DSC06670.jpg' alt='' /></div>
                              <div className='border-white border rounded-3xl h-16 w-24 sm:h-24 sm:w-32 lg:h-36 lg:w-56 overflow-hidden'><img className='object-cover' src='/images/hero/4_DSC_0039.jpg' alt='' /></div>
                              <div className='border-white border rounded-3xl h-16 w-24 sm:h-24 sm:w-32 lg:h-36 lg:w-56 overflow-hidden'><img className='object-cover' src='/images/hero/5_SHL06790.jpg' alt='' /></div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Hero