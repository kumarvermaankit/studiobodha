import React, { useEffect, useState } from 'react'
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Home() {


    const [images, setimages] = useState([]);

    // useEffect(() => {
    //     axios.get("/api").then((result) = {
    //         setimages(result);
    //     })
    // }, [])





    function slides() {
        return (
            <div>
                {images.map((each) => {
                    <div>
                        <img src={each.src} />
                    </div>
                })}
            </div>

        )
    }

    return (
        <div className='carousel'>
            <Carousel interval={1000} autoPlay={true} width={"75%"} infiniteLoop={true} dynamicHeight={true} height={"50%"} >
                <div>
                    <img style={{ height: 639.17 }} src="https://digitalsynopsis.com/wp-content/uploads/2015/02/superhero-action-figure-toys-hrjoe-photography-1.jpg" />

                </div>
                <div>
                    <img style={{ height: 639.17 }} src="https://digitalsynopsis.com/wp-content/uploads/2015/02/superhero-action-figure-toys-hrjoe-photography-3.jpg" />

                </div>
                <div>
                    <img style={{ height: 639.17 }} src="https://digitalsynopsis.com/wp-content/uploads/2015/02/superhero-action-figure-toys-hrjoe-photography-10.jpg" />

                </div>
            </Carousel>
        </div>
    )
}
