import React, { useEffect, useState } from 'react'
import Tinymce from "./tinymce"
import "./blog.css"
import axios from 'axios';

import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
export default function Blog(props) {

    var params = useParams();
    console.log(params)
    const [obj, setobj] = useState({
        title: "",
        content: ""
    })

    useEffect(() => {

        console.log("tt")

        axios.get(`https://studiobodhi9555ankit.herokuapp.com/data/${params.id}`)
            .then((res) => {
                console.log(res);


                setobj(res.data)
            })


    }, [])

    console.log(obj)
    return (
        <div style={{ display: props.display ? "none" : null }}>
            <div class="casestudies">
                <h1>{obj !== undefined ? (obj.title.toUpperCase()) : null}</h1>

            </div>
            <img style={{ width: "74%", marginLeft: "13.9%" }} src={obj.blogphoto} />
            <div style={{ marginLeft: "10.7%", marginTop: "2%" }}>
                <Tinymce
                    t={obj !== undefined ? obj.content : null}

                    width="90%"

                    height="auto"

                />
            </div>
        </div>
    )
}
