import React from 'react'
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul className="nav flex-column">
        <li className="nav-item">
          <img src="./categories.png" alt="" />
          <a className="nav-link" href="#">Categories</a>
        </li>
        <li className="nav-item">
        <img src="./menu-icon.png" alt="" />
          <a className="nav-link" href="#">Skills</a>
        </li>
        <li className="nav-item">
        <img src="./hireicon.png" alt="" />
          <a className="nav-link" href="#">Hire</a>
        </li>
        <li className="nav-item">
        <img src="./manyusers.png" alt="" />
          <a className="nav-link" href="#">My Mentors</a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
