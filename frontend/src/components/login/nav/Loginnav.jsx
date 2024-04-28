import React from 'react'
import { Link } from 'react-router-dom'
import "./loginNav.css";

const Loginnav = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light fixed-top p-3 ">
            <div className="logo">
                <img src="./logo.png" alt="Logo" />
            </div>
            <div className="auth-buttons">
                
                <Link to={'/Register'} className='signup-button'>Register</Link>
                <Link to={"/"} className="login-button">Home Page</Link>
    
            </div>
        </nav>
    </div>
  )
}

export default Loginnav


