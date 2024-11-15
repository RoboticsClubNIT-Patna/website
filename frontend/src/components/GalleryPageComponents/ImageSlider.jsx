import React from 'react';
import { Linkedin } from 'lucide-react'
import { Instagram } from 'lucide-react'
import { Github } from 'lucide-react'
import { Twitter } from 'lucide-react'
import CardMarquee from '../HomePageComponents/CardMarquee';
import { Link } from 'react-router-dom'
import Buttons from '../Buttons';

const App = () => {
  return (
    <>

      <div className=' hidden xl:visible xl:flex flex-row mt-20'>
        <div className='w-2/4'>
          <div className='min-h-screen flex just-center items-center bg7  bg-black bg-no-repeat bg-cover sticky top-0 -z-50' ></div>
          <div className='min-h-screen flex just-center items-center bg8  bg-black bg-no-repeat bg-cover sticky top-0 -z-40' ></div>
          <div className='min-h-screen flex just-center items-center bg6  bg-black bg-no-repeat bg-cover -z-20' ></div>
        </div>


        <div className='bg-orange-400 w-2/4'>
          <div className=' bg-orange-400 min-h-screen flex flex-col items-center justify-center p-20'>
            <div className='flex flex-col xl:flex-row gap-4 justify-center'>
              <h1 className='text-black font-anton text-5xl xl:text-7xl'>MACHINE-MAYHEM</h1>
              <h1
                style={{
                  WebkitTextStroke: '1px black',
                  textStroke: '1px black'
                }}
                className='font-anton text-5xl xl:text-7xl'
              >WORKSHOP</h1>
            </div>
            <div className='mt-6 text-black font-bold'>
              <p className='text-xl'>The workshop was conducted in 2022</p>
            </div>
            <div className='mt-10'>
              <Link to='/events'>
                <Buttons buttonText='Get Started' />
              </Link>
            </div>
          </div>

          <div className='bg-green-400 min-h-screen flex flex-col items-center justify-center p-20'>
            <div className='flex flex-col xl:flex-row gap-4 justify-center'>
              <h1 className='text-black font-anton text-5xl xl:text-7xl'>MACHINE-MAYHEM</h1>
              <h1
                style={{
                  WebkitTextStroke: '1px black',
                  textStroke: '1px black'
                }}
                className='font-anton text-5xl xl:text-7xl'
              >WORKSHOP</h1>
            </div>
            <div className='mt-6 text-black font-bold'>
              <p className='text-xl'>The workshop was conducted in 2022.</p>
            </div>
            <div className='mt-10'>
              <Link to='/events'>
                <Buttons buttonText='Get Started' />
              </Link>
            </div>
          </div>

          <div className=' bg-red-500 min-h-screen flex flex-col items-center justify-center p-20'>
            <div className='flex flex-col xl:flex-row gap-4 justify-center'>
              <h1 className='text-black font-anton text-5xl xl:text-7xl'>MACHINE-MAYHEM</h1>
              <h1
                style={{
                  WebkitTextStroke: '1px black',
                  textStroke: '1px black'
                }}
                className='font-anton text-5xl xl:text-7xl'
              >WORKSHOP</h1>
            </div>
            <div className='mt-6 text-black font-bold'>
              <p className='text-xl'>The workshop was conducted in 2022.</p>
            </div>
            <div className='mt-10'>
              <Link to='/events'>
                <Buttons buttonText='Get Started' />
              </Link>
            </div>
          </div>

        </div>



      </div>


      {/* smaller screens */}

      <div className='visible xl:hidden mt-20'>
        <div className='h-[20rem] sm:h-[24rem] md:min-h-screen flex just-center items-center bg7  bg-black bg-no-repeat bg-cover sticky top-0 -z-50' ></div>

        <div className=' bg-orange-500  flex flex-col items-center justify-center p-8 pt-14 pb-14'>
          <div className='flex gap-4'>
            <h1 className='text-black font-anton text-5xl'>MACHINE-MAYHEM</h1>
            <h1
              style={{
                WebkitTextStroke: '1px black',
                textStroke: '1px black'
              }}
              className='font-anton text-5xl'
            >WORKSHOP</h1>
          </div>
          <div className='mt-6 text-black'>
            <p className='text-md text-center pl-8 pr-8'>The workshop was conducted in 2022.</p>
          </div>
          <div className='mt-10'>
            <Link to='/events'>
              <Buttons buttonText='Get Started' />
            </Link>
          </div>
        </div>

        <div className='h-[20rem] sm:h-[24rem] md:min-h-screen flex just-center items-center bg8  bg-black bg-no-repeat bg-cover sticky top-0 -z-40' ></div>

        <div className=' bg-green-400  flex flex-col items-center justify-center p-8 pt-14 pb-14'>
          <div className='flex gap-4'>
            <h1 className='text-black font-anton text-5xl'>MACHINE-MAYHEM</h1>
            <h1
              style={{
                WebkitTextStroke: '1px black',
                textStroke: '1px black'
              }}
              className='font-anton text-5xl'
            >WORKSHOP</h1>
          </div>
          <div className='mt-6 text-black'>
            <p className='text-md text-center pl-8 pr-8'>The workshop was conducted in 2022.</p>
          </div>
          <div className='mt-10'>
            <Link to='/events'>
              <Buttons buttonText='Get Started' />
            </Link>
          </div>
        </div>


        <div className='h-[20rem] sm:h-[24rem] md:min-h-screen flex just-center items-center bg6  bg-black bg-no-repeat bg-cover -z-20' ></div>

        <div className=' bg-red-500  flex flex-col items-center justify-center p-8 pt-14 pb-14'>
          <div className='flex gap-4'>
            <h1 className='text-black font-anton text-5xl'>MACHINE-MAYHEM</h1>
            <h1
              style={{
                WebkitTextStroke: '1px black',
                textStroke: '1px black'
              }}
              className='font-anton text-5xl'
            >WORKSHOP</h1>
          </div>
          <div className='mt-6 text-black'>
            <p className='text-md text-center pl-8 pr-8'>The workshop was conducted in 2022.</p>
          </div>
          <div className='mt-10'>
            <Link to='/events'>
              <Buttons buttonText='Get Started' />
            </Link>
          </div>
        </div>

      </div>

    </>
  );
};

export default App;

