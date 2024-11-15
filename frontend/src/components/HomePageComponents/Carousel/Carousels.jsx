import React from 'react'
import CarouselCard from './CarouselCard'
import carouselCardData from '../../../carouselCardData'
// import { CCarousel } from '@coreui/react'
// import { CCarouselItem } from '@coreui/react'
// import './carStyle.css'
const Carousels = () => {


  return (
    <>
      <div className='carousel-container flex justify-center gap-10 overflow-x-scroll '>
        {/* <CCarousel controls>
          {carouselCardData.map((it) => (
            <CCarouselItem key={it.id}>
              <CarouselCard key={it.id} imageUrl={it.imageUrl} head1={it.head1} head2={it.head2} backgroundColor={it.backgroundColor} para={it.para} />
            </CCarouselItem>


          ))}
        </CCarousel> */}

        {carouselCardData.map((it) => ( 
            <CarouselCard key={it.id} imageUrl={it.imageUrl} head1={it.head1} head2={it.head2} backgroundColor={it.backgroundColor} para={it.para} />
        ))}


      </div>

      <div className='flex justify-center gap-4 mt-8'>
        <div className='h-1 w-6 bg-gray-500 hover:bg-white rounded-sm hover:cursor-pointer'></div>
        <div className='h-1 w-6 bg-gray-500 hover:bg-white rounded-sm hover:cursor-pointer'></div>
        <div className='h-1 w-6 bg-gray-500 hover:bg-white rounded-sm hover:cursor-pointer'></div>
      </div>
    </>
  );
};

export default Carousels;