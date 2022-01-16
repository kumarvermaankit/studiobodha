import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Home from "./component/home"
import Navbar from './component/navbar';
import Stories from './component/stories';
import Blog from "./component/blog"
import Contact from './component/contact';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Fragment, useEffect, useState } from 'react';
import Footer from './component/footer';

import axios from 'axios';
import Footer2 from './component/footer2';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CFooter } from '@coreui/react'
function App() {

  const [blogs, setblogs] = useState([]);



  useEffect(() => {

    axios.get("https://studiobodhi9555ankit.herokuapp.com/blog-data/1")
      .then((res) => {
        console.log(res);
        setblogs(res.data)
      })

  }, [])



  return (

    <div className='main-wrapper'>
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




      {/* <CFooter>
        <Footer2 />
      </CFooter> */}
    </div>
  );
}

export default App;
