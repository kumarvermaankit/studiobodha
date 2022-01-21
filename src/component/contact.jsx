import React, { useState } from 'react'
import "./contact.css"
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
export default function Contact() {


    const [contactDetails, setcontactDetails] = useState({
        name: "",
        phonenumber: "",
        email: "",
        message: ""
    })


    function Change(event) {

        console.log(event.target.name, event.target.value)

        setcontactDetails((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    console.log(contactDetails)

    // function ContactForm() {
    //     return (

    //     )
    // }


    function onSubmit() {
        axios.post("https://studiobodhi9555ankit.herokuapp.com/contact-save/1", contactDetails)
            .then((res) => {
                console.log(res);

            })
    }

    return (
        <div style={{ display: "flex" }} className='contact-parent'>
            <Container>
                <Row>
                    <Col sm={6}>
                        <div class="contact">
                            <h5><b>visit us</b></h5>
                            <p>Drop a mail to <a href="mail@studiobodhi.in" target="_blank">mail@studiobodhi.in </a>&nbsp;to make prior appointments before you visit us.</p>

                            <h6>OUR ADDRESS</h6>
                            <p>Studio & Workshop
                                Plot 6A, Shed No 8B, Gurukul Industrial Area, Faridabad</p>
                            <h6><img class="locatemap" src="https://kaaru.com/wp-content/themes/twentysixteen/images/locate_map.gif" /><a href="https://goo.gl/maps/C5BwSczBAppjdN7M7" target="_blank">LOCATE US ON GOOGLE MAPS</a></h6>

                            <hr />
                            <h5>careers</h5>
                            <p>If you are interested in working with us drop your resumes at <a href="mailto:mail.studiobodhi.in" target="_blank">mail.studiobodhi.in.</a></p>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div class="container">
                            <div id="contact" >
                                <h3>Quick Contact</h3>
                                <h4>Contact us today, and get reply with in 24 hours!</h4>
                                <fieldset>
                                    <input placeholder="Your name" value={contactDetails.name} type="text" tabindex="1" required autofocus name="name" onChange={(event) => Change(event)} />
                                </fieldset>
                                <fieldset>
                                    <input placeholder="Your Email Address" value={contactDetails.email} type="email" tabindex="2" required name="email" onChange={(event) => Change(event)} />
                                </fieldset>
                                <fieldset>
                                    <input placeholder="Your Phone Number" value={contactDetails.phonenumber} type="tel" tabindex="3" required name="phonenumber" onChange={(event) => Change(event)} />
                                </fieldset>

                                <fieldset>
                                    <textarea placeholder="Type your Message Here...." value={contactDetails.message} tabindex="5" required name="message" onChange={(event) => Change(event)}  ></textarea>
                                </fieldset>
                                <fieldset>
                                    <button type="submit" onClick={onSubmit} name="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                                </fieldset>
                            </div>

                            <p></p>

                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
