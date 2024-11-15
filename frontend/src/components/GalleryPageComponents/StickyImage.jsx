import React from 'react'

const StickyImage = () => {
  return (
    <>
    <div className='flex flex-row mt-20'>
        <div className='w-full'>
          <div className='h-[20rem] sm:h-[24rem] md:min-h-screen flex just-center items-center bg1  bg-black bg-no-repeat bg-cover sticky top-0 -z-50' ></div>
          <div className='h-[20rem] sm:h-[24rem] md:min-h-screen flex just-center items-center bg2  bg-black bg-no-repeat bg-cover sticky top-0 -z-40' ></div>
          <div className='h-[20rem] sm:h-[24rem] md:min-h-screen flex just-center items-center bg3  bg-black bg-no-repeat bg-cover sticky top-0 -z-20' ></div>
          <div className='h-[20rem] sm:h-[24rem] md:min-h-screen flex just-center items-center bg4  bg-black bg-no-repeat bg-cover sticky top-0 -z-20' ></div>
          <div className='h-[20rem] sm:h-[24rem] md:min-h-screen flex just-center items-center bg5  bg-black bg-no-repeat bg-cover  -z-20' ></div>


        </div>
    </div>    
    </>
  )
}

export default StickyImage