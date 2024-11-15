import React from 'react'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import CaseStudiesData from './CasestudiesData'
import CStudyCard from './CStudyCard'

const CaseStudies = () => {

  useEffect(()=>{
    Aos.init({duration: 1000})
},[])
  
  return (
    <div className='mt-20 ml-2 mr-2'>

      <div className='ml-4'>
        <h1 className='font-anton text-7xl sm:text-8xl'
          style={{
            WebkitTextStroke: '1px white',
            color: 'black',
            textStroke: '1px white'
          }}>
          RECENT
        </h1>
        <h1 className='font-anton text-7xl sm:text-8xl text-white'>ACTIVITIES</h1>
      </div>

      
      <div className='images flex flex-col items-center gap-10 mt-10 ml-5 mr-5 md:flex-row md:gap-4 '>
            {CaseStudiesData.map((item)=>(
              
                 <CStudyCard  key={item.id} image={item.image} leftTitle={item.leftTitle} rightTitle={item.rightTitle}/>
              
            ))}
      </div>

     


    </div>
  )
}

export default CaseStudies