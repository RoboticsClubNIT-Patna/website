import React from 'react'
import ImageSlider from '../components/GalleryPageComponents/ImageSlider'
import StickyImage from '../components/GalleryPageComponents/StickyImage'
import CardMarquee from '../components/HomePageComponents/CardMarquee'

const GalleryPage = () => {
  return (
    <>
      <div>
        <div data-aos='fade-down' className='flex mt-10  justify-center items-center w-full gap-6'>
          <div className='font-anton text-8xl'
            style={{
              WebkitTextStroke: '1px white',
              color: 'black',
              textStroke: '1px white'
            }}
          >GALLERY</div>
        </div>
      </div>

      <StickyImage />
      <ImageSlider />
    </>
  )
}

export default GalleryPage