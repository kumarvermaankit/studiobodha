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
                            <p>Please call us on <a href="tel:0-9599989361">0-9599989361</a>&nbsp; or drop a mail to <a href="mailto:info@kaaru.com" target="_blank">info@kaaru.com</a>&nbsp;to make prior appointments before you visit us.</p>
                            <p>Our timings are from 9:30AM to 5.30PM. We’re closed on all Sundays, Forth Saturdays and National Holidays.</p>

                            <h6>OUR ADDRESS</h6>
                            <p>Plot No. 07, Club Drive Road<br />
                                (near Metro pillar&nbsp;number 119) Ghitorni<br />
                                New Delhi -110030, India</p>
                            <h6><img class="locatemap" src="https://kaaru.com/wp-content/themes/twentysixteen/images/locate_map.gif" /><a href="https://goo.gl/maps/RfBrdCngCBo" target="_blank">LOCATE US ON GOOGLE MAPS</a></h6>

                            <hr />
                            <h5>careers</h5>
                            <p>If design is your calling, if you are a risk taker and not a follower, someone who will dedicate themselves to delivering results – KAARU offers the right platform for you to learn, explore and grow. Please send your Portfolio and CV by email to <a href="mailto:careers@kaaru.com" target="_blank">careers@kaaru.com</a></p>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div class="container">
                            <form id="contact" action="" method="post">
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
                            </form>

                            <p></p>

                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
