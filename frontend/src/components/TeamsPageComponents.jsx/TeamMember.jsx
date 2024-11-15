import React from 'react'
import { useEffect, useState } from 'react'
import TeamMemberCard from './TeamMemberCard'
import TeamData from './TeamData'
import TeamsData_2023_24 from './Team_2023_24/TeamsData2023_24'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom';

const TeamMember = ({ year }) => {

  const [show, setShow] = useState(false)

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  console.log(TeamData.map(member => member.position));

  function handleClick() {
    setShow(!show);
  }

  if (year === "2024-25"){

    return(
      <>

      <div className='flex flex-col justify-center items-center mb-10'>
        <div className='text-2xl font-anton'>Checkout post-bearers for AY</div>
        <div className='cursor-pointer text-green-600 animate-bounce hover:animate-none' onClick={handleClick}><ChevronDown size={50} /></div>
        {show ?
          <div className='flex flex-wrap gap-4 pl-10 pr-10  justify-center items-center'>
            <Link to="/teams2023_2024" className='flex items-center justify-center h-10 bg-yellow-600 text-2xl font-bold border 1px p-1 cursor-pointer hover:text-gray-700 hover:bg-yellow-700'>2023-24</Link>
            <Link to="/teams" className='flex items-center justify-center h-10 bg-yellow-600 text-2xl font-bold border 1px p-1 cursor-pointer hover:text-gray-700 hover:bg-yellow-700'>2024-25</Link>

          </div>
          :
          ''
        }

      </div>

      <div className='text-5xl  sm:text-6xl md:text-8xl font-anton flex flex-col justify-center items-center'
        style={{
          WebkitTextStroke: '1px white',
          color: 'black',
          textStroke: '1px white'
        }}
      >Post Bearers for the
        <div className='text-yellow-600'>AY {year}</div>
      </div>

      <div className='border-b-2 p-10 border-gray-600'>
        <TeamMemberCard
          name={'Gagandeep Meena'}
          post={'PI of Robotics Club, NITP'}
          image={'https://lh3.googleusercontent.com/a-/AOh14GiDuUO4d4iWUb4OFPUwW7KjdGzv5lZOJrddsxcN'}
          bgcolor={'bg-gradient-to-r from-blue-500 to-blue-300'}
          position={'md:flex-row-reverse'}
          margin={'ml-[-22.4rem]'}
        />
      </div>

      {
        TeamData.map((item) => (
          <div data-aos={item.id % 2 === 0 ? 'fade-left' : 'fade-right'}>
            <TeamMemberCard
              id={item.id}
              name={item.name}
              post={item.post}
              linkedin={item.linkedin}
              instagram={item.instagram}
              github={item.github}
              twitter={item.twitter}

              image={item.image}
              bgcolor={item.bgcolor}
              position={item.position}
              margin={item.margin}
            />
          </div>
        ))
      }

    </>
    )
  } else {

  return (
    <>
          <div className='flex flex-col justify-center items-center mb-10'>
        <div className='text-2xl font-anton'>Checkout post-bearers for AY</div>
        <div className='cursor-pointer text-green-600 animate-bounce hover:animate-none' onClick={handleClick}><ChevronDown size={50} /></div>
        {show ?
          <div className='flex flex-wrap gap-4 pl-10 pr-10  justify-center items-center'>
            <Link to="/teams2023_2024" className='flex items-center justify-center h-10 bg-yellow-600 text-2xl font-bold border 1px p-1 cursor-pointer hover:text-gray-700 hover:bg-yellow-700'>2023-24</Link>
            <Link to="/teams" className='flex items-center justify-center h-10 bg-yellow-600 text-2xl font-bold border 1px p-1 cursor-pointer hover:text-gray-700 hover:bg-yellow-700'>2024-25</Link>
      
          </div>
          :
          ''
        }

      </div>

      <div className='text-5xl  sm:text-6xl md:text-8xl font-anton flex flex-col justify-center items-center'
        style={{
          WebkitTextStroke: '1px white',
          color: 'black',
          textStroke: '1px white'
        }}
      >Post Bearers for the
        <div className='text-yellow-600'>AY {year}</div>
      </div>

      <div className='border-b-2 p-10 border-gray-600'>
        <TeamMemberCard
          name={'Gagandeep Meena'}
          post={'PI of Robotics Club, NITP'}
          image={'https://lh3.googleusercontent.com/a-/AOh14GiDuUO4d4iWUb4OFPUwW7KjdGzv5lZOJrddsxcN'}
          bgcolor={'bg-gradient-to-r from-blue-500 to-blue-300'}
          position={'md:flex-row-reverse'}
          margin={'ml-[-22.4rem]'}
        />
      </div>

      {
        TeamsData_2023_24.map((item) => (
          <div data-aos={item.id % 2 === 0 ? 'fade-left' : 'fade-right'}>
            <TeamMemberCard
              id={item.id}
              name={item.name}
              post={item.post}
              linkedin={item.linkedin}
              instagram={item.instagram}
              github={item.github}
              twitter={item.twitter}

              image={item.image}
              bgcolor={item.bgcolor}
              position={item.position}
              margin={item.margin}
            />
          </div>
        ))
      }
    </>
    
  )
}
}

export default TeamMember