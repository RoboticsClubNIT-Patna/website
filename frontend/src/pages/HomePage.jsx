import React from 'react'
import Hero from '../components/HomePageComponents/Hero'
import MarqueeOne from '../components/HomePageComponents/MarqueeOne'
import Roboexperience from '../components/HomePageComponents/RoboExperience'
import Experience from '../components/HomePageComponents/Experience'
import RoboDesign from '../components/HomePageComponents/RoboDesign'
import PelletsGame from '../components/HomePageComponents/PelletsGame'
import CaseStudies from '../components/HomePageComponents/CaseStudies/CaseStudies'
import MarqueeTwo from '../components/HomePageComponents/MarqueeTwo'
import CardMarquee from '../components/HomePageComponents/CardMarquee'
import Trending from '../components/HomePageComponents/Trending'
const HomePage = ({isOpen}) => {
    return (
        <div className='overflow-x-hidden'>
          <Hero/>
          <Roboexperience/>
          {/* <MarqueeOne/> */}
          <Experience/>
          {/* <RoboDesign/> */}
          {/* <PelletsGame/> */}
          <CaseStudies/>  
          <MarqueeTwo/>  
          <Trending/>
          <CardMarquee/>
        </div>
    )
}

export default HomePage