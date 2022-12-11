import React, { useState } from 'react'
import CardMain from '../cardMain/CardMain'


const ProfileMain = () => {

  const [name, setName] = useState('Your Name')
  const [job, setJob] = useState('Your Job')
  const [about, setAbout] = useState('Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.')

  return (
    <div className='Profile'>
      <CardMain name={name} job={job} about={about}/>
    </div>
  )
}

export default ProfileMain


