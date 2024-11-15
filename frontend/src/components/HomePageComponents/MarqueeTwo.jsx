import React from 'react';
import Marquee from 'react-fast-marquee';
import { ArrowBigRight, ArrowBigLeft } from 'lucide-react';

const MarqueeTwo = () => {
  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center m-10 w-[90vw] bg-gray-900'>
          <div className='flex flex-col justify-center p-10'>
            <div className='flex flex-row items-center justify-center  text-[8vw] sm:text-[6vw] gap-3 w-[84vw] font-anton  xl:text-[6vw] text-white'>
              <div><h3>ROBOTICS</h3></div>
              <div className=' sm:flex-grow '>
                <div className='flex bg-green-400 w-[30vw] sm:w-auto  h-[8vw] sm:h-[5vw] rounded-3xl overflow-hidden'>
                  <Marquee direction='right'>
                    
                      <div className='text-black top-2/4'><ArrowBigRight /></div>
                      <div className='text-black top-2/4 ml-10'><ArrowBigRight /></div>
                      <div className='text-black top-2/4 ml-10'><ArrowBigRight /></div>
                      
                
                  </Marquee>
                </div>
              </div>
              <div>CLUB</div>
            </div>

            <div className='flex flex-row items-center justify-center gap-3 w-[84vw]   font-anton text-[8vw] sm:text-[6vw]  xl:text-[6vw] text-white overflow-wrap'>
              <div>IDEAS</div>
              <div>TO</div>
              <div className='sm:flex-grow'>
                <div className='flex justify-center items-center w-[28vw] sm:w-auto  h-[8vw] sm:h-[5vw]     rounded-3xl bg-yellow-200'>
                  <Marquee direction='right'>
                    <div className='text-black top-2/4'><ArrowBigRight /></div>
                    <div className='text-black top-2/4 ml-10'><ArrowBigRight /></div>
                    <div className='text-black top-2/4 ml-10'><ArrowBigRight /></div>
                  </Marquee>
                </div>
              </div>
              <div>REALITY</div>
            </div>

            <div className='flex flex-wrap flex-row items-center justify-center overflow-x-hidden gap-3 font-anton w-[84]  text-[8vw] sm:text-[6vw] xl:text-[6vw] text-white'>
              <div
                style={{
                  WebkitTextStroke: '1px white',
                  color: 'black',
                  textStroke: '1px white'
                }}
              >SINCE</div>
              <div
                style={{
                  WebkitTextStroke: '1px white',
                  color: 'black',
                  textStroke: '1px white'
                }}
              >2016</div>
              <div className='flex-grow '>
                <div className='flex  items-center overflow-y-hidden bg-green-400 w-[46vw] sm:w-auto  h-[8vw] sm:h-[5vw] relative rounded-3xl overflow-hidden'>
                  <Marquee direction='right'>
                    <div className='text-black top-2/4'><ArrowBigRight /></div>
                    <div className='text-black top-2/4 ml-10'><ArrowBigRight /></div>
                    <div className='text-black top-2/4 ml-10'><ArrowBigRight /></div>
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarqueeTwo;
