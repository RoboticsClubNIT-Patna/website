import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectData from './ProjectData'

const Project = () => {
    return (
        <>
            <div className='h-[80vh] flex items-center justify-center font-anton text-5xl sm:text-6xl md:text-8xl text-white'>
                <div className='flex flex-col  lg:flex-row gap-6'>
                    <div>EXPLORE OUR </div>
                    <div
                        style={{
                            WebkitTextStroke: '1px white',
                            color: 'black',
                            textStroke: '1px white'
                        }}
                    >PROJECTS</div>
                </div>
            </div>

            <div className='flex flex-wrap justify-center items-center gap-10 -mt-40 sm:mt-0'>
                {ProjectData.map((item)=>(
                    <ProjectCard id={item.id} Name={item.Name} description={item.description} image={item.image} tag1={item.tag1} tag2={item.tag2} tag3={item.tag3}/>
                ))}
                
            </div>
        </>
    )
}

export default Project