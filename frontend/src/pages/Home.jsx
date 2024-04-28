import React from 'react'
import Navbar from '../components/home/navigation/Navbar'
import Adds from '../components/home/adds/Adds'
import Profiles from '../components/home/profiles/Profiles'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Navbar />
      <Adds />
      <Outlet />
    </div>
  )
}

export default Home
