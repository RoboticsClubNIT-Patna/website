import React, { useState } from 'react'
import {Linkedin} from 'lucide-react'
import {Instagram} from 'lucide-react'
import {Github} from 'lucide-react'
import {Twitter} from 'lucide-react'

const TeamMemberCard = ({name,post,linkedin,instagram, github, twitter,bgcolor,image,position,margin}) => {
  
  const [loaded, setLoaded] = useState(false) 

  const handleImageLoad = ()=>{
    setLoaded(true);
  }

  return (
    <>
      <div className={`flex flex-col-reverse ${position} justify-center mt-20 gap-20 items-center`}>
                 <div className='p-5 h-fit -mt-20 md:mt-0'>
                      <div><h1 className='text-3xl text-white'>{name}</h1></div>
                      <div><p className='text-gray-400 text-xl'>{post}</p></div>
                      <div className='flex mt-5 gap-5'>
                             <div className='cursor-pointer'><i><Linkedin color='blue'/></i></div> 
                             <div className='cursor-pointer'><i><Instagram color="#ef2eb5" /></i></div>       
                             <div className='cursor-pointer'><i><Github color='white'/></i></div>       
                             <div className='cursor-pointer'><i><Twitter color="#97dee8" /></i></div>       
      
                      </div>
                 </div>
                 <div className='flex justify-center items-center h-[20rem] -mt-20 md:mt-0'>
                       <div className={`h-[16rem] w-[24rem] ${bgcolor} rounded-xl`}></div>
                       <div className={`h-[16rem] w-[24rem] ${bgcolor} shadow-[-1px_-1px_30px_0_rgba(0,0,0,0.3)] mt-10 ${margin}  rounded-md overflow-hidden flex justify-center items-center`}>
                            <img 
                                src={image} alt='Loading...' 
                                className={`h-full object-cover p-2 ${loaded ? 'loaded' : 'blur'}`}
                                onLoad={handleImageLoad}
                            />
                       </div>
                 </div>
            </div>
    </>
  )
}

export default TeamMemberCard