import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light fixed-top p-1 shadow-sm ">
            <div className="logo">
                <img src="./logo.png" alt="Logo" />
            </div>
            <ul className="nav-menu">
                <li><a href="#">Find Passion</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Hire</a></li>
            </ul>
            <div className="auth-buttons">
                <Link to={"/Login"} className="login-button ">Login</Link>
                <Link to={'/Register'} className='signup-button bg-dark text-light'>SignUp</Link>
    
            </div>
        </nav>
    )
}

export default Navbar
