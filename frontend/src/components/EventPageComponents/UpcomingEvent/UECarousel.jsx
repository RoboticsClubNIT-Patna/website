import React from 'react'
import Marquee from 'react-fast-marquee'
import RCCard from './UECard'
import RCData from './UEData'
import { useEffect, useState } from 'react'

const RecentCarousel = () => {
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoaded(true);
        }, 200);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
            <div className=''>
                <div className='flex flex-col mt-10 sm:flex-row gap-6 mb-10 ' >
                    <div className='font-anton text-8xl text-white'>UPCOMING</div>
                    <div className='font-anton text-8xl'
                        style={{
                            WebkitTextStroke: '2px white',
                            color: 'black',
                            textStroke: '2px white'
                        }}
                    >EVENTS</div>
                </div>

                <div className=''>
                    <Marquee pauseOnHover>
                        <div className={`flex ${isLoaded ? 'blur-0' : 'blur-md'}`}>
                            {RCData.map((item) => (
                                <RCCard key={item.id} image={item.image} />
                            ))}
                        </div>

                    </Marquee>

                </div>
            </div>
        </>
    )
}

export default RecentCarousel