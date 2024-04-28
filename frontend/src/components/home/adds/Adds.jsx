import React from 'react';
import './adds.css';
import { Link } from 'react-router-dom';

const Adds = () => {
    return (
        <div className='adds'>

            <div className="section d-flex">
                <div className="side">
                    <h2>Watch <br /> Grow<br /> Learn</h2>
                </div>
                <div className="bar1">
                    Find your Passion
                    <div className="inbar">GO</div>
                </div>

                <div className="frontimg">
                    <img src="./mansitted.png" alt="" />
                </div>

                <div className="bar2">

                    <div className="inbar2"><h2>Coding</h2></div>
                </div>

                <div className="frontimg">
                    <img src="./womansitted.png" alt="" />
                </div>

                <div className="bar3">
                    <div className="inbar3"><h2>Business</h2></div>
                </div>
                <div className="frontimg">
                    <img src="./manstanding.png" alt="" />
                </div>

            </div>

            <div className='lowerNavigation'>
                <h3>Unlimited access to 100+ industry experts</h3>
                <div className="navigation">
                    <ul className="menu">
                        <li><Link to ={"/Profiles"} className='nav-link active'>All Categories</Link></li>
                        <li><a href="#">Entertainment</a></li>
                        <li><a href="#">Business</a></li>
                        <li><a href="#">Science</a></li>
                        <li><a href="#">Programming</a></li>
                        <li><a href="#">UI/UX Design</a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Adds;

