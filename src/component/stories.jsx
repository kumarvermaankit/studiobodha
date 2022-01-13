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
                            <a style={{ textDecoration: "none" }} href={`/blog/${each.id}`}>
                                <div style={{ display: "flex" }}>
                                    <div className="listsection">
                                        <p>{each.title}</p>

                                    </div>
                                    <div className='listsection-2' >
                                        <img style={{ width: "100%", height: "60%" }} src="https://kaaru.com/wp-content/uploads/issue_images/2018-10-11.jpg" alt="" title="" />
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
        <div className="stories">
            <div className="change">

            </div>

            <div>
                {BlogCreator()}

            </div>


        </div>
    )
}
