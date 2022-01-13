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

        axios.get("https://studiobodhi9555ankit.herokuapp.com/blog-data/1")
            .then((res) => {
                console.log(res);


                setobj(res.data.find(e => e.id.toString() === params.id))
            })


    }, [])

    console.log(obj)
    return (
        <div style={{ display: props.display ? "none" : null }}>
            <div class="casestudies">
                <h1>{obj !== undefined ? (obj.title.toUpperCase()) : null}</h1>

            </div>
            <img style={{ width: "74%", marginLeft: "13.9%" }} src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F8%2F7%2Fa%2F602419.jpg&f=1&nofb=1" />
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
