import React, { useEffect, useState } from 'react'
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
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
            <Carousel interval={1000} autoPlay={true} width={"75%"} infiniteLoop={true} dynamicHeight={true} height={"50%"} >
                {images.map((each) => {
                    return (
                        <div>
                            <img style={{ height: 639.17 }} src={each.picurl} />
                        </div>
                    )

                })}
            </Carousel>

        )
    }

    return (
        <div className='carousel'>

            {images !== null ? slides() : null}

        </div>
    )
}
