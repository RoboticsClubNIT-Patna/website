import React, { useEffect, useState } from 'react';
//import Background from './RoboExperience/Background.jsx';
//import Iphoto from './RoboExperience/RoboExperienceImages.jsx';
import Button from '../Buttons.jsx';
import Aos from 'aos';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
//importimage-cover  { AlignCenter } from 'lucide-react';

import image1 from "./RoboExperience/cirimage1locat.jpg";
import image2 from "./RoboExperience/cirimage2locat.jpg";
import image3 from "./RoboExperience/cirimage3locat.jpg";
import image4 from "./RoboExperience/cirimage4locat.jpg";
import image5 from "./RoboExperience/cirimage5locat.jpg";
import image6 from "./RoboExperience/cirimage6locat.jpg";

function Roboexperience() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const [show, setShow] = useState(false)

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])


  function handleClick() {
    setShow(!show);
  }

  // 640       1535

  // sm: prefix applies styles on screens larger than or equal to 640px wide (sm:mx-auto, sm:w-8/12, sm:gap-8, sm:text-3xl).
  // md: prefix applies styles on screens larger than or equal to 768px wide (md:w-11/12, md:text-6xl).
  // lg: prefix applies styles on screens larger than or equal to 1024px wide.
  // xl: prefix applies styles on screens larger than or equal to 1280px wide (xl:flex-col).

  return (
    <>
      <div className="xl:w-max containerr sm:mx-auto sm:w-8/12 md:w-11/12 top-10 grid place-items-center w-full">


        <div data-aos='fade-up' className="py-5 px-5 md:w-full
                main-content mt-40 sm:mt-40 md:mt-24 xl:mt-44 xl:mb-44 mb-10 flex items-center flex-col sm:items-center xl:flex-col sm:gap-8 justify-center">

          <p className="mt-6 w-12/12 flex flex-col items-center font-anton 
               text-5xl sm:text-7xl  md:text-7xl lg:text-8xl text-white">
            <h1>OFFICE</h1>
            <h1>BEARERS</h1>
          </p>
          <div data-aos='fade-up' className="flex justify-center items-center max-w-xl min-w-52 ml-2 mr-2
                text-sm sm:text-[1rem] md:text-3xl lg:text-3xl">

          </div>
          <div data-aos='fade-up'>
            <Link to='/teams'><div className='cursor-pointer text-green-600 animate-bounce hover:animate-none sm:-mt-10' onClick={handleClick}><ChevronRight size={50} /></div></Link>
          </div>
          <div className="background absolute h-full w-full xl:w-max -z-10">
            <div className="images lg:w-32 lg:h-30 w-20 h-20 sm:h-24 sm:w-24 md:h-24 md:w-24 lg:h-32 xl:h-32 absolute 
                    top-0 -left-5 sm:-top-10 sm:-left-12 md:top-0 md:left-36 xl:-left-72 ">
              <img src='/images/postBearers/DeepuKumarPresident.jpg' className='image-cover  object-cover md:border-0 rounded-full h-full w-full' alt="this is image 1" />
              <h5 className='text-sm w-full flex justify-center font-anton'>President</h5>
            </div>
            <div className=" images lg:w-32 lg:h-32 w-20 h-20 sm:h-24 sm:w-24  md:h-24 md:w-24 absolute 
                    -top-20 right-20 sm:-top-24 sm:right-15 md:top-0 md:right-36 xl:-right-20 xl:-top-28">
              <img src='https://lh3.googleusercontent.com/a-/AOh14GiDuUO4d4iWUb4OFPUwW7KjdGzv5lZOJrddsxcN' className='image-cover object-cover md:border-0 rounded-full h-full w-full' alt="this is image 1" />
              <h5 className='text-sm w-full flex justify-center font-anton'>PI</h5>
            </div>
            <div className="images lg:w-32 lg:h-32 w-20 h-20 sm:h-24 sm:w-24  md:h-24 md:w-24 absolute 
                    top-28 -left-5 sm:top-20 sm:-left-24 md:top-1/2 md:left-0 xl:left-48 xl:top-0">
                    <img src='/images/postBearers/Screenshot_20240811_122946_Instagram - Dev Raj.jpg' className='image-cover  object-cover md:border-0 rounded-full h-full w-full' alt="this is image 1" />
                    <h5 className='text-sm w-full flex justify-center font-anton'>Captain</h5>
              
            </div>
            <div className="images lg:w-32 lg:h-32 w-20 h-20 sm:h-24 sm:w-24  md:h-24 md:w-24 absolute 
                    top-5 -right-10 sm:-top-2 sm:-right-20 md:top-1/2 md:right-0 xl:right-44 xl:top-56 ">
                      <img src='/images/postBearers/1000025811 - Nauser Alam.jpg' className='image-cover  object-cover md:border-0 rounded-full h-full w-full' alt="this is image 1" />
                      <h5 className='text-sm w-full flex justify-center font-anton'>Vice Captain</h5>
            </div>
            <div className="images lg:w-32 lg:h-32 w-20 h-20 sm:h-24 sm:w-24  md:h-24 md:w-24 absolute 
                    top-40 bottom-0 left-24 sm:top-52 sm:left-2 md:bottom-0 md:left-40 xl:left-48">
                      <img src='/images/postBearers/20240826_150352 - Satyam Bansal.jpg' className='image-cover object-cover md:border-0 rounded-full h-full w-full' alt="this is image 1" />
                      <h5 className='text-sm w-full flex justify-center font-anton'>Secretary</h5>
            </div>
            <div className="images lg:w-32 lg:h-32 w-20 h-20 sm:h-24 sm:w-24  md:h-24 md:w-24 absolute 
                    -bottom-5 -right-2 sm:top-30 sm:-right-10 md:bottom-0 md:right-40 xl:-right-16 xl:top-80 ">
              <img src='data:image/jpeg;base64,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' className='image-cover  object-cover md:border-0 rounded-full h-full w-full' alt="this is image 1" />
              <div className='flex flex-col sm:flex-row'>
                <h5 className='text-sm w-full flex justify-center font-anton'>Faculty</h5>
                <h5 className='text-sm w-full flex justify-center font-anton md:-ml-8'>Advisor</h5>
              </div>
            </div>

          </div>


        </div>
      </div>
    </>
  );

}

export default Roboexperience;