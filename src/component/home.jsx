import React, { useEffect, useState } from 'react'
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import Footer2 from './footer2';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default function Home() {
    const [images, setimages] = useState(null)


    useEffect(() => {
        axios.get("https://studiobodhi9555ankit.herokuapp.com/photo-url/1")
            .then((res) => {
                console.log(res);
                setimages(res.data)
            })

    }, [])



    console.log(images)


    function slides() {
        return (
            <Carousel animationHandler="fade" interval={3000} autoPlay={true} width={"103%"} infiniteLoop={true}   >
                {images.map((each) => {
                    return (
                        <div  >
                            <img className="slide_image" style={{ width: "100%", aspectRatio: "5/2.8" }} src={each.picurl} />
                        </div>
                    )

                })}
            </Carousel>

        )
    }

    return (
        <Container>
            <Row >
                <div className='carousel'>

                    {images !== null ? slides() : null}

                </div>
            </Row>


        </Container>

    )
}
