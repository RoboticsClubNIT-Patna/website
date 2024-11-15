import React, { useEffect, useState } from 'react';
import Marquee from 'react-marquee-slider';

const MarqueeOne = () => {
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollX = window.scrollY;
      setScrollX(newScrollX);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const images = [
    './images/arduino ide.png',
    './images/arduino ide.png',
    './images/arduino ide.png',
    './images/arduino ide.png',
    './images/arduino ide.png',
    './images/arduino ide.png',
    './images/arduino ide.png',
    './images/arduino ide.png',
    './images/arduino ide.png',
    './images/arduino ide.png',
    './images/arduino ide.png',
    './images/arduino ide.png',
    './images/arduino ide.png',
    './images/arduino ide.png',
    './images/arduino ide.png',

  ];

  const images2 = [
    {
      imageSrc: './images/eventImg.jpg',
      letter: 'R'
    },
    {
      imageSrc: './images/eventImg.jpg',
      letter: 'O'
    },
    {
      imageSrc: './images/eventImg.jpg',
      letter: 'B'
    },
    {
      imageSrc: './images/eventImg.jpg',
      letter: 'O'
    },
    {
      imageSrc: './images/eventImg.jpg',
      letter: 'T'
    },
    {
      imageSrc: './images/eventImg.jpg',
      letter: 'I'
    },
    {
      imageSrc: './images/eventImg.jpg',
      letter: 'C'
    },
    {
      imageSrc: './images/eventImg.jpg',
      letter: 'S'
    },
  ];

  return (
    <>
      <div className='loop-track mt-20 w-full relative -z-30'>
        <div className='loop-content flex  w-full '>
          <Marquee className=''>
            {images.map((src, index) => (
              <div key={index} className='item ml-10'
                style={{
                  transform: `translate(-${scrollX / 2}%, 0%) translate3d(0px, 0px, 0px)`,
                }}
              >
                <img src={src} alt={`Item ${index}`} width='' height='' className='h-16 w-20 object-cover' />
              </div>
            ))}
          </Marquee>

        </div>
      </div>

      <div
        className='loop-track mt-10 w-full relative -z-30 '

      >
        <div className='loop-content flex  w-full'

        >
          <Marquee direction=''>
            {images2.map((src, index) => (
              <div key={index} className='item flex -ml-32 relative justify-center items-center h-48   overflow-hidden '
                style={{
                  transform: `translate(-${scrollX / 2}%, 0%) translate3d(0px, 0px, 0px)`,
                }}
              >

                <img src={src.imageSrc} alt={`Item ${index}`} width='' height='' className='h-44 sm:h-52 object-cover -z-30 -ml-16 sm:ml-0' />
                <div className='h-70  p-6 absolute -z-30 flex flex-col justify-center items-center mix-blend-multiply bg-black w-full'>
                  <h1 className='font-ultra  text-9xl -ml-32 sm:text-customFont'>{src.letter}</h1>
                </div>

              </div>
            ))}
          </Marquee>

        </div>
      </div>
    </>
  );
};

export default MarqueeOne;
