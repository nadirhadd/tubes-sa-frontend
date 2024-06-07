import React from 'react'
import { Hero, Sidebar, Navbar } from '../components'

const Dashboard = () => {
  return (
    <div className='flex h-full'>
      <Sidebar/>
      <div className='flex flex-col w-full'>
        <Navbar/>
        <div className='p-4 bg-[#EEEDEB] h-screen'>
          <Hero/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard