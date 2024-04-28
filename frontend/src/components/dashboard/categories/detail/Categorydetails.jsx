import React from 'react'
import "./categorydetails.css";

const Categorydetails = () => {
  return (
    <div className='details-container'>
        <div className="the-image">
            <img src="./jiraya 2.png" alt="" />
        </div>

        <div className="details">
            <div className="heading">
                <h2> Mathew Taxman (MBE) </h2>
                <p>Business, Real Estate, Economics</p>
                <small>stevetor Rating 
                <img src="./star.png" alt="" />
                <img src="./star.png" alt="" />
                <img src="./star.png" alt="" />
                <img src="./star.png" alt="" />
                <img src="./star transparent.png" alt="" /></small>
            </div>

            <div className="detail-body ">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
            </div>
            <div className="about">

            <div className="item">
                    <h1>20+</h1>
                    <p>Members</p>
                </div>

                <div className="item">
                    <h1>30+</h1>
                    <p>projects</p>
                </div>

                <div className="item">
                    <h1>6+</h1>
                    <p>Specialities</p>
                </div>
            </div>

            <div className="socials">
                <img src="./fb.png" alt="" />
                <img src="./x.png" alt="" />
                <img src="./linkedin.png" alt="" />
                <img src="./instagram.png" alt="" />
            </div>
        </div>

    </div>
  )
}

export default Categorydetails
