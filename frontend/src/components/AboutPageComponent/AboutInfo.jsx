import React from 'react'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const AboutInfo = () => {

    useEffect(()=>{
        Aos.init({duration: 1000})
    },[])

    return (
        <>
            <div>
                <div className='flex flex-col -mt-20 gap-6 mb-20 h-[90vh]' style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1)),url("/images/arduino.jpg")', backgroundSize: 'cover' }}>
                    <div data-aos='fade-down' className='flex mt-80  justify-center items-center w-full gap-6'>
                        <div className='font-anton text-8xl text-white'>ABOUT</div>
                        <div className='font-anton text-8xl'
                            style={{
                                WebkitTextStroke: '1px white',
                                color: 'black',
                                textStroke: '1px white'
                            }}
                        >US</div>
                    </div>

                    <div data-aos='fade-up' className='flex justify-center h-full items-end ml-4'>
                         <div className='text-6xl font-ultra text-white'>ROBOTICS CLUB NIT, PATNA</div>
                    </div>

                </div>

                <div className='flex justify-center text-center items-center mt-36'>
                    <div className=' w-[65vw]'>
                        <p data-aos='fade-up' className='text-gray-400 font-bold text-xl'><label className='text-neonBlue font-ultra'>Robotics</label> club has been embodiment of innovation at NIT Patna. Being formed in year <label className='text-customPink font-ultra'>2015-16</label> by</p>
                         <p data-aos='fade-up' data-aos-delay='100' className='text-gray-400 font-bold text-xl'>Nripendra Saroj Sir, our club boasts a glorious legacy. With our members ranging from seasoned coders</p>
                          <p data-aos='fade-up' data-aos-delay='200' className='text-gray-400 font-bold text-xl'>to brilliant designers to hardware scientists, Our members have also represented our college at Smart</p>
                           <p data-aos='fade-up' data-aos-delay='300' className='text-gray-400 font-bold text-xl'>India hackathon, headed by our current Captain Dheeraj Kumar Sir. We have been constantly working to</p>
                           <p data-aos='fade-up' data-aos-delay='400' className='text-gray-400 font-bold text-xl'>enhance the students’ technical skills and making them aware of the fascinating world of automation,</p>
                            <p data-aos='fade-up' data-aos-delay='500' className='text-gray-400 font-bold text-xl'>robotics and electronics which surrounds us. Boasting of a huge roster of exciting and engaging events,</p> 
                            <p data-aos='fade-up' data-aos-delay='600' className='text-gray-400 font-bold text-xl'>This year’s techno-cultural fest was nothing less than a rollercoaster ride for us.</p>

                    </div>
                </div>

                <div>
                    <div  data-aos='fade-right' data-aos-delay='600' className=' flex gap-3 ml-20 mt-16'>
                        <h1 className='font-anton text-5xl'
                            style={{
                                WebkitTextStroke: '1px white',
                                color: 'black',
                                textStroke: '1px white'
                            }}>
                            WHAT
                        </h1>
                        <h1 className='font-anton text-5xl text-white'>WE DO</h1>
                    </div>
                </div>
                <div className='flex justify-center text-center items-center mt-10 md:mt-20'>
                    <div className=' w-[65vw]'>
                        <p className='text-gray-400 font-bold text-xl'>Does robots fascinates you and have you ever fantasized to build one for yourself? The Robotics club NIT Patna is the place! The Robotics club at NIT Patna strives to stimulate interest in robotics among the students of the institute. Today robotics is a rapidly growing field, as technological advances continue researching designing and building new robots serve various practical purposes. Robotics is a field which is not limited to a particular branch and is way more diverse than our own imagination and so is our student club. We are a diverse group of robotics nerds who find roots across all academic departments of the Institute. We at Robotics club believe in working and growing together. You can know more about us from here. #HailRobotics</p>

                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutInfo