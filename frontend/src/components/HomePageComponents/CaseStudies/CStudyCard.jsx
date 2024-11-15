import React from 'react'


const CStudyCard = ({image, leftTitle, rightTitle}) => {
  return (
    <>
       <div className=' flex flex-col justify-center  items-center w-full sm:h-[30rem]  md:w-96  lg:w-96  overflow-hidden sm:hover:flex-shrink-0 transition-all custom-long-duration rounded-2xl group'>
          <div className='flex items-center justify-center w-full sm:h-[29rem] lg:w-[6rem] xl:w-[9rem]  overflow-hidden rounded-2xl  sm:transition-width ease-in-out custom-long-duration sm:group-hover:w-full'>
            <img className='sm:h-[30rem] w-full object-cover sm:group-hover:w-full transition-width custom-long-duration ease-in-out ' src={image} alt='' />
          </div>
          <div className='flex justify-center  items-center gap-[14rem] sm:gap-80 md:gap-0 h-20 w-full  md:group-hover:w-full transition-width ease-in-out custom-long-duration'>
            <div className='text-white font-anton text-xl md:opacity-0  delay-500 transform md:group-hover:translate-x-[-240px]  group-hover:opacity-100 ease-in-out custom-long-duration'>{leftTitle}</div>
            <div className='font-anton text-gray-500 md:opacity-0 group-hover:opacity-100 ease-in-out custom-long-duration group-hover:-mr-60'>{rightTitle}</div>
          </div>
        </div>
    </>
  )
}

export default CStudyCard