import React from 'react'
import REventCard from '../../HomePageComponents/TrendingCard'
import trendingData from '../../../trendingData'

const REvents = () => {


    return (
        <>


            <div className='flex flex-col  sm:flex-row gap-6 mb-36 sm:mb-20 h-[20vw] mt-20'>
                <div className='font-anton text-8xl text-white'>RECENT</div>
                <div className='font-anton text-8xl'
                    style={{
                        WebkitTextStroke: '1px white',
                        color: 'black',
                        textStroke: '1px white'
                    }}
                >EVENTS</div>
            </div>

            <div className='flex flex-col sm:flex-row overflow-x-scroll sm:-mt-40'>
                {trendingData.map((item) => (
                    <div className='flex flex-shrink-0  sm:w-[30vw]'>

                        <REventCard
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            date={item.date}
                            imageUrl={item.imageUrl}
                            cardId={item.id}
                        />
                    </div>
                ))}

            </div>




        </>
    )
}

export default REvents



