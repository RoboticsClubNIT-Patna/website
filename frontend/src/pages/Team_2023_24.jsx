import React from 'react'
import TeamMember from '../components/TeamsPageComponents.jsx/TeamMember'

const Team_2023_24 = ({year}) => {
  console.log(year);
  return (
        <>
           <div className='overflow-x-hidden'>
                <TeamMember year={year}/>
           </div>
        </>
  )
}

export default Team_2023_24