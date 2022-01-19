import React from 'react'
import "./navbar.css"
import logo from "./SBL.jpg"
export default function Navbar() {
    return (
        <div className='nav_bar'>
            <a href="/"><img style={{ width: "134px", height: "93.33px" }} src={logo} /></a>

            <ul className='menu'>
                <li>
                    <a href="/ourstory" >Our Story</a>
                </li>
                <li>
                    <a href="/work" >Our Work</a>
                </li>
                <li>
                    <a href="/contact" >CONTACT US</a>
                </li>
            </ul>
        </div>
    )
}
