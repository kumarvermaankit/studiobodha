import React from 'react';
import './navbar3.css';
import logo from "./SBL.jpg"

const NavBar = ({ brandName, brandNameStyle }) => {
    return (
        <nav>
            <div className='menu-wrapper'>
                <p style={{ brandNameStyle }} className='brand-name'><img style={{ width: "10%", height: "10%" }} src={logo} /></p>
                <div className='menu-button-wrapper'>
                    <button>btn1</button>
                    <button>btn2</button>
                    <button>btn3</button>
                    <button>btn4</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;