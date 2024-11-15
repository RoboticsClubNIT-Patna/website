import React from 'react'
import TeamMember from '../components/TeamsPageComponents.jsx/TeamMember'

const TeamsPage = ({year}) => {
  return (
        <>
           <div className='overflow-x-hidden'>
                <TeamMember year={year}/>
           </div>
        </>
  )
}

export default TeamsPage