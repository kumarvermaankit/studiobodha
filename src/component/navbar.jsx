import React from 'react'
import "./navbar.css"
import logo from "./SBL.jpg"
import insta from "./insta.jpeg"
import linkedin from "./linked_in.jpg"
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
export default function Navbar() {
    return (
        <div className='nav_bar'>
            <a style={{ width: "19%", height: "80%" }} href="/"><img style={{ width: "100%", height: "100%" }} src={logo} /></a>

            <ul className='menu'>
                <li>
                    <a href="/ourstory" >About Us</a>
                </li>
                <li>
                    <a href="/work" >Our Work</a>
                </li>
                <li>
                    <a href="/contact" >Contact us</a>
                </li>
                {/* <li style={{ width: "10%", marginLeft: "32%" }} >
                    <a href="https://www.instagram.com/studio_bodhi/" className='social2' ><img style={{ width: "50%", height: "100%" }} src={insta} /></a>

                </li>
                <li style={{ width: "10%" }}>
                    <a href="https://www.linkedin.com/company/studiobodhii/" className='social2' ><img style={{ width: "50%", height: "100%" }} src={linkedin} /></a>

                </li> */}
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

            </ul>
        </div>
    )
}
