import React from 'react'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Insta from "./insta.jpeg"
export default function Footer2() {
    return (
        // <div>
        //     <div className='footer2'>
        //         <ul style={{ display: "flex" }}>
        //             <li>
        //                 <span>© StudioBodhi</span>
        //             </li>

        //             <li>
        //                 <span>All rights reserved</span>
        //             </li>
        //         </ul>
        //     </div>

        // </div>

        <footer class="colored-section" id="footer">
            <div class="container-fluid">
                <div className='footer2'>
                    <Container>
                        <Row>
                            <Col>
                                <span>© StudioBodhi</span>
                            </Col>
                            <Col>
                                <span>All rights reserved</span>
                            </Col>
                            <Col>
                                <a href="https://www.instagram.com/studio_bodhi/" target="_blank" ><img src={Insta} style={{ width: "15%", height: "40%", marginLeft: "60%", marginTop: "2%" }} /></a>
                            </Col>
                        </Row>

                    </Container>
                    {/* <ul style={{ display: "flex" }}>
                        <li>
                            <span>© StudioBodhi</span>
                        </li>
                         
                        <li>
                            <span>All rights reserved</span>
                        </li>
                    </ul> */}
                </div>
                {/* <div className="footer-right">
                    <ul className="list-inline">
                        <h3><li className="list-inline-item"><a href="#" style={{ color: 'white', cursor: "pointer", marginLeft: "27px" }}>Get in Touch</a></li></h3>
                    </ul>
                    <div className="social">
                        <a href="https://t.me/joinchat/xrbUyk1degk5OTll" target="_blank"><i style={{ color: "white" }} className="icon ion-social-instagram" ><TelegramIcon /></i></a>
                        <a href="https://www.linkedin.com/company/cyduck/" target="_blank"><i style={{ color: "white" }} className="icon ion-social-youtube-outline" ><LinkedInIcon /></i></a>
                        <a ><i className="icon ion-social-twitter" ></i><TwitterIcon /></a>
                        <a href="#" href="https://discord.gg/XJNPaF4b" target="_blank">D</a>
                    </div>
                </div>
                <p className="copyright" style={{ color: 'white' }}>© Copyright 2021 Cyduck</p> */}
            </div>
        </footer >
    )
}
