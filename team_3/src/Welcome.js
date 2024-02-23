import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Outlet, Navigate, NavLink } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import './Welcome.css';
import Login from "./Login";

const onButtonClick = () => {
    // find out how to work with this
}


// React-Router 
function Welcome() {
  return (
    <div classname="mainContainer">
       <Router>
      <nav>
        <ul>
          <li>
            <Link to="/signup">
                <Button variant="contained">
                    Signup
                </Button>
            </Link>
          </li>
          <li>
            <Link to="/login">
                
                <Button variant="outlined">
                    Login
                </Button>
            </Link>
          </li>
        </ul>
      </nav>

     
        <Routes>
          {/* <Route path="/signup" element={<Signup/>}></Route> */}
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Welcome;