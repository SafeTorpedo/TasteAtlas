import React from 'react'
import DashNavbar from '../components/DashNavbar'
import Searchbar from '../components/Searchbar'

const Dashboard = () => {
  return (
    <div className='h-screen text-[#0d0a0b]'>
        <DashNavbar />
        <Searchbar />
    </div>
  )
}

export default Dashboard

