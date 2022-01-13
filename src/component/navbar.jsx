import React from 'react'
import "./navbar.css"
export default function Navbar() {
    return (
        <div className='navbar'>
            <img style={{ width: "104px", height: "93.33px" }} src="https://kaaru.com/wp-content/themes/twentysixteen/images/karu_logo.jpg" />
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
