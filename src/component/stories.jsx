import React from 'react'
import "./stories2.css"
import Blog from './blog';
export default function Stories(props) {


    function BlogCreator() {

        var i = 0;
        return (
            <div>
                {props.blogs.map((each) => {
                    i++;
                    return (
                        <div className={i != 1 ? "blogdiv" : null}>
                            <a style={{ textDecoration: "none" }} href={`/blog/${each[0]}`}>
                                <div style={{ display: "flex" }}>
                                    <div className="listsection">
                                        <p>{each[1].substring(0, 50) + "..."}</p>

                                    </div>
                                    <div className='listsection-2' >
                                        <img style={{ width: "100%", height: "auto", maxHeight: "100%" }} src={each[2]} alt="" title="" />


                                    </div>


                                </div>

                            </a>
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div>
            <div className="change">

            </div>
            <div className="stories">


                <div>
                    {BlogCreator()}

                </div>

                <div className="change">

                </div>
            </div>

        </div>
    )
}
