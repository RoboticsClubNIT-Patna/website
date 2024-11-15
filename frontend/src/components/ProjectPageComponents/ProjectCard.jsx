import React from 'react'
import Tags from '../Tags'

const ProjectCard = ({Name, description,image,tag1, tag2, tag3}) => {
  return (
    <>
      <div className='flex flex-col'>

        <div className=' relative w-96 h-80 rounded-2xl overflow-hidden'>

          <img src={image} alt="" className='object-cover h-80 w-full cursor-pointer' />

          <div className='absolute bottom-60 p-2'>
            <Tags tagtext={tag1} tagcolor={'bg-pink-500'}/>
          </div>
          <div className='absolute bottom-2 p-2'>
            <Tags tagtext={tag2} tagcolor={'bg-blue-400'}/>
          </div>
          <div className='absolute bottom-2 p-2 right-0'>
            <Tags tagtext={tag3} tagcolor={'bg-yellow-400'}/>
          </div>



        </div>

        <div className='flex'>
          <div className='font-extrabold'>{Name}</div>
          {/* <div className='flex flex-grow justify-end'>Arizona</div> */}
        </div>


      </div>

    </>
  )
}

export default ProjectCard
