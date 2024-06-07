import React from 'react'
import { Sidebar, Navbar, AllMeetings } from '../components'

const Meetings = () => {
  return (
    <div className='flex h-full'>
      <Sidebar/>
      <div className='flex flex-col w-full'>
        <Navbar/>
        <div className='p-4 bg-[#EEEDEB] h-full'>
          <AllMeetings/>
        </div>
      </div>
    </div>
  )
}

export default Meetings