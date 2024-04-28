import React from 'react'
import "./dashboard.css"
import Dashnav from '../components/dashboard/nav/Dashnav'
import Sidebar from '../components/dashboard/sidebar/Sidebar'
import Menu from '../components/dashboard/menu/Menu'
import Categories from '../components/dashboard/categories/Categories'

const Dashboard = () => {
    
  return (
    <div>
      <Dashnav />
      
      <div className="content">
        <Menu/>
        <Categories/>
      </div>
      
      <Sidebar />
    </div>
  )
}

export default Dashboard
