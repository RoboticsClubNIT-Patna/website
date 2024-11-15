import React, { useEffect } from 'react'
import { useParallax } from 'react-scroll-parallax'


const ExperienceCard = ({ title, imageUrl, rotation }) => {
  const parallax = useParallax({
    translateX: [170, -450],
    duration: 0.2
  })

  // useEffect(() => {
    

  // }, [])

  return (
    <div className='sticky top-10' ref={parallax.ref}>
      <div className={`flex-col justify-center items-center w-80 h-96 ml-5 ${rotation}`}>
        <div className={`h-4/5  overflow-hidden flex justify-center items-center  ${rotation}`}>
          <img className='h-4/5' src={imageUrl} alt="" />
        </div>
        <div className={`flex justify-center transform ${rotation} text-6xl`}>
          <h3 className='-mt-16 font-anton'>{title}</h3>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard


