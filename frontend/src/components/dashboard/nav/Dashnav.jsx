import React from 'react'
import "./dashnav.css"
import { Link } from 'react-router-dom'

const Dashnav = () => {
  return (
    <div className='dashnav'>
      <nav className="navbar navbar-light bg-light fixed-top p-2">
            <div className="logo">
                <img src="./logo.png" alt="Logo" />
            </div>
            <div className="searchbox">
              <form action="">
                <input type="text" placeholder='Search.....' required/>
                <button><img src="./search.png" alt="" /></button>
                
              </form>
              
            </div>
            <div className="icons">

                <img src="./bill.png" alt="" />
                <img src="./message.png" alt="" />
                <img src="./notification.png" alt="" />
                <img src="./user.png" alt="" />
    
            </div>
        </nav>
    </div>
  )
}

export default Dashnav
