import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./component/home"
import Navbar from './component/navbar';
import Stories from './component/stories';
import Blog from "./component/blog"
import Contact from './component/contact';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [blogs, setblogs] = useState([]);
  const [images, setimages] = useState([])


  useEffect(() => {
    axios.get("https://studiobodhi9555ankit.herokuapp.com/photo-url/1")
      .then((res) => {
        console.log(res);
        setimages(res.data)
      })

    axios.get("https://studiobodhi9555ankit.herokuapp.com/blog-data/1")
      .then((res) => {
        console.log(res);
        setblogs(res.data)
      })

  }, [])


  return (

    <div>



      <Navbar />



      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/stories">
          <Stories blogs={blogs} />
        </Route>
        <Route exact path="/blog/:id">
          <Blog blogs={blogs} />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>

      </Router>
    </div>
  );
}

export default App;
