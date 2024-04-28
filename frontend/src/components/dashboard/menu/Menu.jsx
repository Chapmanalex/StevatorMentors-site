import React from 'react'
import { Link } from 'react-router-dom';
import "./menu.css"

const Menu = () => {
  return (
    <div>
      <ul className="menu d-flex">
                       <li><img src="arrow-circle-left.png" alt="" /></li>
                        <li><Link to ={"/Categories"} className='nav-link active'>All Categories</Link></li>
                        <li><a href="#">Entertainment</a></li>
                        <li><a href="#">Business</a></li>
                        <li><a href="#">Science</a></li>
                        <li><a href="#">Programming</a></li>
                        <li><a href="#">UI/UX Design</a></li>
                        <li><a href="#">AI</a></li>
                        <li><a href="#">Agriculture</a></li>
                        <li><img src="./arrow-circle-right.png" alt="" /></li>
                    </ul>
    </div>
  )
}

export default Menu
