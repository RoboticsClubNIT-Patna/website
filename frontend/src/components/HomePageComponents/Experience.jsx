import React from 'react'
import ExperienceCard from './ExperienceCard'
import cardData from '../../../src/cardData'
import { useState, useEffect, useRef } from 'react'
import Carousels from './Carousel/Carousels'
import RoboDesign from './RoboDesign'

const Experience = () => {


  return (
    <>
      <div className='mt-20 mb-60 flex flex-col pl-5'>
        <div>
          <h1 className='text-7xl sm:text-9xl font-anton'
            style={{
              WebkitTextStroke: '1px white',
              color: 'black',
              textStroke: '1px white'
            }}>THE</h1>
        </div>
        <div>
          <h1 className='text-7xl sm:text-9xl font-anton text-#fcffff'>EXPERIENCE</h1>
        </div>
      </div>

      {/* ExperienceCard */}
      <div className='flex flex-col -mt-40'>
        <div className='h-[80rem] md:h-[70rem] mb-10  sticky top-32  bg-black bg-cover bg-no-repeat -z-10'>
          <div className={`flex gap-10  mb-10 relative -z-10 overflow-x-scroll overflow-y-hidden `} 
              style={{
                WebkitOverflowScrolling: 'touch', // For smooth scrolling in WebKit
                scrollbarWidth: 'none',           // For Firefox
                msOverflowStyle: 'none',          // For IE/Edge
                overflow: '-moz-scrollbars-none', // For Firefox
                scrollbarColor: 'transparent transparent', // For Firefox
                WebkitScrollbar: {
                  width: 0,
                  background: 'transparent',
                },
              }}
               >
            {cardData.map((item) => (
              <ExperienceCard key={item.id} title={item.title} rotation={item.rotation} imageUrl={item.imageUrl} />
            ))}

          </div>
        </div>
        {/* <div className='-mt-10'>
          <Carousels />
        </div> */}

        <div className='-mt-80'>
          <RoboDesign />
        </div>

      </div>
    </>
  )
}

export default Experience