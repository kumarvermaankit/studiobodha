import React from 'react'
import "./navbar.css"
import logo from "./SBL.jpg"
import insta from "./insta.jpeg"
import linkedin from "./linked_in.jpg"
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Nav from "@rsuite/responsive-nav";
// import Navbar from 'responsive-react-js-navbar'

export default function Navbar() {


    const links = [{
        "href": "/ourstory",
        "label": "work",
        "background": false,
    },
    {
        "href": "/login",
        "label": "Login",
        "background": false,
    },
    {
        "href": "/register",
        "label": "Register",
        "background": true,
    }
    ]

    return (
        // <div className='nav_bar'>

        <Nav className='nav_bar' >
            <Nav.Item eventKey="A" href="/" className='navlink' ><img style={{ width: "18%", height: "20%" }} src={logo} /></Nav.Item>
            <Nav.Item eventKey="B" href="ourstory" className='navlink'  >About Us</Nav.Item>
            <Nav.Item eventKey="C" href="/work" className='navlink' >Our Work</Nav.Item>
            <Nav.Item eventKey="D" href="/contact" className='navlink' >Contact us</Nav.Item>
            <Nav.Item eventKey="E" style={{ marginLeft: "34%" }} href="https://www.instagram.com/studio_bodhi/" target="_blank" className='navlink' ><img className='nav_img' src={insta} /></Nav.Item>
            <Nav.Item eventKey="D" href="https://www.linkedin.com/company/studiobodhii/" className='navlink' target="_blank" ><img className='nav_img' src={linkedin} /></Nav.Item>

        </Nav>

        /* 
                    <a style={{ width: "19%" }} href="/"><img style={{ width: "" }} src="https://kaaru.com/wp-content/themes/twentysixteen/images/karu_logo.jpg" /></a>
        
                    <ul className='menu'>
                        <li>
                        </li>
                        <li>
                            <a href="/work" >Our Work</a>
                        </li>
                        <li>
                            <a href="/contact" >Contact us</a>
                        </li>
                        <li style={{ width: "10%", marginLeft: "32%" }} >
                            <a href="https://www.instagram.com/studio_bodhi/" className='social2' ><img style={{ width: "50%", height: "100%" }} src={insta} /></a>
        
                        </li>
                        <li style={{ width: "10%" }}>
                            <a href="https://www.linkedin.com/company/studiobodhii/" className='social2' ><img style={{ width: "50%", height: "100%" }} src={linkedin} /></a>
        
                        </li>
        
        
                    </ul> */
        // </div>
    )
}


{/* <Container style={{ width: "20%", marginLeft: "50%" }}>
                    <Row>
                        <Col >
                            <a href="https://www.instagram.com/studio_bodhi/" className='social' ><img style={{ width: "30%", height: "7%" }} src={insta} /></a>
                        </Col>
                        <Col>
                            <a href="https://www.linkedin.com/company/studiobodhii/" className='social' ><img style={{ width: "30%", height: "7%" }} src={linkedin} /></a>
                        </Col>
                    </Row>
                </Container> */}