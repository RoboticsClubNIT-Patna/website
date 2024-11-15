import React from 'react'
import InfoCards from '../components/EventPageComponents/InfoCard/InfoCards'
import UECarousel from '../components/EventPageComponents/UpcomingEvent/UECarousel'
import REvents from '../components/EventPageComponents/RecentEvent/REvents'

const EventPage = () => {
  return (
    <>

      <UECarousel />

      <REvents />

      <div className='flex flex-col  sm:flex-row gap-6 -mb-40 h-[20vw] mt-20'>
        <div className='font-anton text-8xl text-white'>PAST</div>
        <div className='font-anton text-8xl'
          style={{
            WebkitTextStroke: '1px white',
            color: 'black',
            textStroke: '1px white'
          }}
        >EVENTS</div>
      </div>

      <div className='flex mt-20'>
        <div className='max-w-[1280px] justify-center mx-auto'>
          <InfoCards />
        </div>
      </div>
    </>
  )
}

export default EventPage