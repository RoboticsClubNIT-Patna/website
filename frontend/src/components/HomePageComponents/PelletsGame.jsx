import React from 'react'
import { useEffect } from 'react'
import Buttons from '../Buttons'
import Aos from 'aos'
import 'aos/dist/aos.css'


const PelletsGame = ({ buttonText }) => {

  useEffect(()=>{
    Aos.init({duration: 1000})
},[])

  return (
    <>
      <div  className='flex flex-col xl:flex-row justify-center mt-20 ml-5 mr-5 gap-10'>
        <div className='div1  flex flex-col  w-2/4 gap-5'>
          <div data-aos='fade-up' className='font-anton text-5xl sm:text-7xl  md:text-8xl  text-white'>
            <h1>CUSTOMIZATION</h1>
            <h1>EXPERIENCES</h1>
          </div>
          <div data-aos='fade-up' className='w-96'>
            <p className='text-xl xl:text-2xl'>
              Discover the magic of our custom design app,
              the powerhouse behind the on-site
              customization adventure. Dive into a
              PERSONAL touch, an IMMERSIVE journey, and
              forge a lasting CONNECTION between your
              brand and your audience.
            </p>
          </div>
          <div data-aos='fade-up' className=' h-20 flex items-center ml-5'>
            <Buttons buttonText="Learn More" scale={'125'} />
          </div>
        </div>

        <div data-aos='fade-up' className='flex justify-center xl:w-2/4 h-80 w-full xl:h-auto'>
          <div className=' flex justify-center  items-center border border-white w-11/12 rounded-3xl overflow-hidden'>
            <h1>pelletgame</h1>
          </div>
        </div>

      </div>
    </>
  )
}

export default PelletsGame