import React from 'react'
import "./navbar.css"
import logo from "./SBL.jpg"
export default function Navbar() {
    return (
        <div className='navbar'>
            <a href="/"><img style={{ width: "134px", height: "93.33px" }} src={logo} /></a>

            <ul className='menu'>
                <li>
                    <a href="/" >HOME</a>
                </li>
                <li>
                    <a href="/stories" >STORIES</a>
                </li>
                <li>
                    <a href="/contact" >CONTACT US</a>
                </li>
            </ul>
        </div>
    )
}
