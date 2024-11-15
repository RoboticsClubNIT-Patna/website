import React from 'react';
import { Linkedin } from 'lucide-react'
import { Instagram } from 'lucide-react'
import { Facebook } from 'lucide-react'
import { Twitter } from 'lucide-react'
import Buttons from '../components/Buttons'
import { Link } from 'react-router-dom';

const Footer = () => {
     return (
          <>
               <div className='mt-20 m-10 flex flex-col  gap-2 justify-center lg:flex-row sm:gap-5 md:gap-5 lg:gap-12 xl:gap-28 2xl:gap-40'>
                    <div className='flex flex-col gap-5'>
                         <div className='h-16 w-32 overflow-hidden'><Link to='/'><img src='./images/logo.png' alt='' className='object-cover' /></Link></div>
                         <div className='flex gap-2'>

                              <Link to='https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHSOuKn0ucGVwAAAY73bKfI2Bl4PSECA1xuMq0ei3uYuqbCFOwXzLC56zxnvrR7126matM2dVrxy2NLLDxsRK4tQNoV5zf2pgnVGzzwfLQjvMJlHn1BYFLE-Ts4LBkK0DET2xY=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Frobotics-club-nit-patna%2F'>
                                   <div className='border border-gray-700 p-2 rounded-full hover:bg-gray-800 '>
                                        <i><Linkedin color='#5594e8' /></i>
                                   </div>
                              </Link>

                              <Link to='https://www.instagram.com/robotics_club_nitp/'>
                                   <div className='border border-gray-700 p-2 rounded-full hover:bg-gray-800'>
                                        <i><Instagram color="#ef2eb5" /></i>
                                   </div>
                              </Link>

                              <Link to='https://www.facebook.com/robonitp'>
                                   <div className='border border-gray-700 p-2 rounded-full hover:bg-gray-800'>
                                        <i><Facebook color='blue' /></i>
                                   </div>
                              </Link>

                         </div>
                         <div className='text-gray-500'>
                              <h3>Robotics Club NIT Patna</h3>
                              <h3>Ashoka Rajpath, Patna</h3>
                         </div>
                    </div>


                    <div className='w-40'>
                         <div><h2 className='text-2xl'>About</h2></div>
                         <div className='text-gray-500'>
                              <Link to='/about'><h3 className='cursor-pointer hover:text-green-400'>Robotics club</h3></Link>
                         </div>
                    </div>
                    <div>
                         <div><h2 className='text-2xl'>Contact</h2></div>
                         <div className='text-gray-500'>
                              <Link to='https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHSOuKn0ucGVwAAAY73bKfI2Bl4PSECA1xuMq0ei3uYuqbCFOwXzLC56zxnvrR7126matM2dVrxy2NLLDxsRK4tQNoV5zf2pgnVGzzwfLQjvMJlHn1BYFLE-Ts4LBkK0DET2xY=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Frobotics-club-nit-patna%2F'><h3 className='cursor-pointer hover:text-green-400'>LinkedIn</h3></Link>
                              <Link to='https://www.instagram.com/robotics_club_nitp/'><h3 className='cursor-pointer hover:text-green-400'>Instagram</h3></Link>
                              <Link to='https://www.facebook.com/robonitp'><h3 className='cursor-pointer hover:text-green-400'>Facebook</h3></Link>
                         </div>
                    </div>
                    <div>
                         <div><h2 className='text-2xl'>Events</h2></div>
                         <div className='text-gray-500'>
                              <Link to='events'><h3 className='cursor-pointer hover:text-green-400'>Events</h3></Link>
                         </div>
                    </div>
                    <div>
                         <div><h2 className='text-2xl'>Teams</h2></div>
                         <div className='text-gray-500'>
                              <Link to='/teams'><h3 className='cursor-pointer hover:text-green-400'>Teams</h3></Link>
                         </div>
                    </div>
                    <div className='flex mt-4'>
                         <Link to='/events'>
                              <Buttons buttonText='Get Started' />
                         </Link>
                    </div>


               </div>
          </>
     );
};

export default Footer;

